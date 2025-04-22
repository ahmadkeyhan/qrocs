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

interface FormOrderData {
    storeName: string
    storeInstagram? : string
    ownerName: string
    phoneNumber: number
    city: string
    province: string
    plan: string
    paymantPeriod: string
}

export default function Order() {
    const searchParams = useSearchParams()
    const plan = searchParams.get('plan')
    const [provinceId, setProvinceId] = useState()
    const provinces = cities.filter((city) => city.type === "province").sort((a,b) => a.name.localeCompare(b.name))
    // const turk = cities.filter((city) => city.type === "county" && city["province_id"] === 103)

    const [newOrder, setNewOrder] = useState<FormOrderData>({
        storeName: "",
        storeInstagram: "",
        ownerName: "",
        phoneNumber: 0,
        city: "",
        province: "",
        plan: plan? plan : "",
        paymantPeriod: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const { toast } = useToast();

    const handleCreateSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            if (newOrder.plan !== "dino") {
                await createOrder(newOrder);
            } else {
                await createOrder({...newOrder, paymantPeriod: "monthly"});
            }
            
            setNewOrder({
                storeName: "",
                storeInstagram: "",
                ownerName: "",
                phoneNumber: 0,
                city: "",
                province: "",
                plan: plan? plan : "",
                paymantPeriod: ""
            });

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

    const handlePaymentPeriodChange = (value: string) => {
        setNewOrder({ ...newOrder, paymantPeriod: value });
    };

    return (
        <div className="min-h-screen pb-20 pt-2">
            <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background to-foreground/10">
                <h1 className="text-3xl text-primary">سفارش منوی دیجیتال</h1>
                <form
                    onSubmit={handleCreateSubmit}
                    className="relative w-full p-4 bg-background rounded-3xl"
                >
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
                        <div className="flex flex-col gap-2">
                            <Label className="text-lg font-medium">
                                طرح انتخابی:
                            </Label>
                            <RadioGroup
                                dir="rtl"
                                value={newOrder.plan}
                                onValueChange={handlePlanChange}
                                className="flex gap-16"
                                required
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
                        <div className="flex flex-col gap-2">
                            {newOrder.plan && newOrder.plan !== 'dino' && 
                                <>
                                    <Label className="text-lg font-medium">
                                        بازه‌ی پرداخت دلخواه:
                                    </Label>
                                    <RadioGroup
                                        dir="rtl"
                                        value={newOrder.paymantPeriod}
                                        onValueChange={handlePaymentPeriodChange}
                                        className="flex gap-4"
                                        required
                                    >
                                        <div className="flex items-center gap-1">
                                            <RadioGroupItem value="monthly" id="monthly" />
                                            <Label className="text-base font-medium" htmlFor="monthly">ماهانه {formatCurrency(newOrder.plan === "rango" ? 300 : 500)} هزار تومان</Label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <RadioGroupItem value="yearly" id="yearly" />
                                            <Label className="text-base font-medium" htmlFor="yearly">سالانه {formatCurrency(newOrder.plan === "rango" ? 3 : 5)} میلیون تومان</Label>
                                        </div>
                                    </RadioGroup>
                                </>
                            }
                        </div>
                        <div className="flex justify-end sm:col-span-2">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                variant="default"
                                size="lg"
                                className="text-xl font-bold"
                            >
                                ثبت سفارش
                            </Button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                    <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                </form>
            </main>
        </div>
    )
}