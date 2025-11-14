'use client'

import { useState, FormEvent } from "react";
import { useSearchParams } from 'next/navigation'
import {cities} from "@/components/order/cities"
import ProvinceSelector from "@/components/order/provinceSelector";
import CitySelector from "@/components/order/citySelector";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup";
import { createOrder } from "@/lib/data/orderData";
import { useToast } from "@/components/ui/toastContext";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CustomOrderBuilder from "./customOrderBuilder";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface FormOrderData {
    storeName: string
    storeInstagram? : string
    ownerName: string
    phoneNumber: number
    city: string
    province: string
    plan: string
    customOrder?: {
        selectedFeatures: Record<string, string>;
        totalPrice: number;
    }
}

export default function Order() {
    const searchParams = useSearchParams()
    const plan = searchParams.get('plan')
    const [provinceId, setProvinceId] = useState()
    const provinces = cities.filter((city) => city.type === "province").sort((a,b) => a.name.localeCompare(b.name))
    
    const [orderType, setOrderType] = useState<"predefined" | "custom">(plan ? "predefined" : "custom");
    const [customFeatures, setCustomFeatures] = useState<Record<string, string>>({});
    const [customPrice, setCustomPrice] = useState(10);

    const [newOrder, setNewOrder] = useState<FormOrderData>({
        storeName: "",
        storeInstagram: "",
        ownerName: "",
        phoneNumber: 0,
        city: "",
        province: "",
        plan: plan? plan : "",
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const { toast } = useToast();

    const handleCreateSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            
            const orderData: FormOrderData = {
                ...newOrder,
                plan: orderType === "custom" ? "custom" : newOrder.plan,
                ...(orderType === "custom" && {
                    customOrder: {
                        selectedFeatures: customFeatures,
                        totalPrice: customPrice,
                    }
                })
            };
            
            await createOrder(orderData);
            
            setNewOrder({
                storeName: "",
                storeInstagram: "",
                ownerName: "",
                phoneNumber: 0,
                city: "",
                province: "",
                plan: plan? plan : "",
            });
            setCustomFeatures({});

            toast({
                title: "سفارش شما ثبت شد!",
                description: "به زودی با شما تماس می‌گیریم."
            })

        } catch (error: any) {
            console.log(error.message)
        } finally {
            setIsLoading(false);
        }
    };

    const handlePlanChange = (value: string) => {
        setNewOrder({ ...newOrder, plan: value });
    };

    return (
        <div className="min-h-screen pb-20 pt-2">
            <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background to-foreground/10">
                <h1 className="text-3xl text-primary">سفارش منوی دیجیتال</h1>
                
                <Tabs 
                    value={orderType} 
                    onValueChange={(value) => setOrderType(value as "predefined" | "custom")}
                    className="w-full"
                    dir="rtl"
                >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="custom" className="text-lg">سفارش سفارشی</TabsTrigger>
                        <TabsTrigger value="predefined" className="text-lg">طرح‌های آماده</TabsTrigger>
                    </TabsList>
                    
                    <form
                        onSubmit={handleCreateSubmit}
                        className="space-y-6"
                    >
                        {/* Basic Information Form */}
                        <div className="relative w-full p-6 bg-background rounded-3xl">
                            <h2 className="text-2xl font-bold text-primary mb-6">اطلاعات پایه</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-lg font-medium">
                                        عنوان مجموعه:
                                    </Label>
                                    <Input
                                        placeholder=""
                                        value={newOrder.storeName}
                                        onChange={(e) =>
                                            setNewOrder({ ...newOrder, storeName: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-lg font-medium">
                                        نام و نام خانوادگی مدیر مجموعه:
                                    </Label>
                                    <Input
                                        placeholder=""
                                        value={newOrder.ownerName}
                                        onChange={(e) =>
                                            setNewOrder({ ...newOrder, ownerName: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <ProvinceSelector
                                        value={newOrder.province}
                                        provinces={provinces.map((province) => province.name)}
                                        onChange={(provinceName) => {
                                                setNewOrder({ ...newOrder, province: provinceName })
                                                const selectedprov = provinces.filter((province) => province.name === provinceName)[0]
                                                setProvinceId(selectedprov.id)
                                            }
                                        }
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <CitySelector 
                                        value={newOrder.city}
                                        cities={cities.filter((city) => city.type === "county" && city["province_id"] === provinceId).sort((a,b) => a.name.localeCompare(b.name)).map((city) => city.name)}
                                        onChange={(cityName) => setNewOrder({ ...newOrder, city: cityName })}
                                        disabled={!provinceId}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-lg font-medium">
                                        شماره‌ی تماس:
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="number"
                                            value={newOrder.phoneNumber ? newOrder.phoneNumber : ""}
                                            onChange={(e) =>
                                                setNewOrder({ ...newOrder, phoneNumber: Number(e.target.value) })
                                            }
                                            required
                                        />
                                        <p className="w-1/5 text-lg text-subtext font-semibold">{formatCurrency(98)} +</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-lg font-medium">
                                        اینستاگرام مجموعه: (اختیاری)
                                    </Label>
                                    <Input
                                        placeholder=""
                                        value={newOrder.storeInstagram}
                                        onChange={(e) =>
                                            setNewOrder({ ...newOrder, storeInstagram: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                            <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                            <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                        </div>

                        <TabsContent value="predefined" className="mt-0">
                            <div className="relative w-full p-6 bg-background rounded-3xl">
                                <h2 className="text-2xl font-bold text-primary mb-6">انتخاب طرح</h2>
                                <div className="flex flex-col gap-4">
                                    <Label className="text-lg font-medium">
                                        طرح انتخابی:
                                    </Label>
                                    <RadioGroup
                                        dir="rtl"
                                        value={newOrder.plan}
                                        onValueChange={handlePlanChange}
                                        className="flex gap-16"
                                        required={orderType === "predefined"}
                                    >
                                        <div className="flex items-center gap-1">
                                            <RadioGroupItem value="dino" id="dino" />
                                            <Label className="text-lg font-medium" htmlFor="dino">داینو</Label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <RadioGroupItem value="rango" id="rango" />
                                            <Label className="text-lg font-medium" htmlFor="rango">رنگو</Label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <RadioGroupItem value="croco" id="croco" />
                                            <Label className="text-lg font-medium" htmlFor="croco">کروکو</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                                <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                                <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                            </div>
                        </TabsContent>

                        <TabsContent value="custom" className="mt-0">
                            <div className="relative w-full p-6 bg-background rounded-3xl">
                                <h2 className="text-2xl font-bold text-primary mb-6">انتخاب امکانات</h2>
                                <CustomOrderBuilder 
                                    selectedFeatures={customFeatures}
                                    onFeaturesChange={setCustomFeatures}
                                    onPriceChange={setCustomPrice}
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                                <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                                <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                            </div>
                        </TabsContent>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                variant="default"
                                size="lg"
                                className="text-xl font-bold w-full sm:w-auto px-12"
                            >
                                {orderType === "custom" 
                                    ? `ثبت سفارش (${formatCurrency(customPrice)} میلیون تومان)`
                                    : "ثبت سفارش"
                                }
                            </Button>
                        </div>
                    </form>
                </Tabs>
            </main>
        </div>
    )
}
