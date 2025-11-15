'use client'

import { useState, FormEvent } from "react";
import { useSearchParams } from 'next/navigation'
import {cities} from "@/components/order/cities"
import ProvinceSelector from "@/components/order/provinceSelector";
import CitySelector from "@/components/order/citySelector";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createOrder } from "@/lib/data/orderData";
import { useToast } from "@/components/ui/toastContext";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CustomOrderBuilder from "./customOrderBuilder";
import { Card } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

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
    const planParam = searchParams.get('plan')
    
    const [currentStep, setCurrentStep] = useState<'plan' | 'custom' | 'form'>(
        planParam ? 'form' : 'plan'
    );
    const [selectedPlan, setSelectedPlan] = useState<string>(planParam || '');
    
    const [provinceId, setProvinceId] = useState()
    const provinces = cities.filter((city) => city.type === "province").sort((a,b) => a.name.localeCompare(b.name))
    
    const [customFeatures, setCustomFeatures] = useState<Record<string, string>>({});
    const [customPrice, setCustomPrice] = useState(10);
    const [customBuilderCompleted, setCustomBuilderCompleted] = useState(false);

    const [newOrder, setNewOrder] = useState<FormOrderData>({
        storeName: "",
        storeInstagram: "",
        ownerName: "",
        phoneNumber: 0,
        city: "",
        province: "",
        plan: planParam || "",
    });
    const [isLoading, setIsLoading] = useState(false);
    
    const { toast } = useToast();

    const handlePlanSelection = (plan: string) => {
        setSelectedPlan(plan);
        setNewOrder({ ...newOrder, plan });
        
        if (plan === 'custom') {
            setCurrentStep('custom');
        } else {
            setCurrentStep('form');
        }
    };

    const handleCustomBuilderComplete = () => {
        setCustomBuilderCompleted(true);
        setCurrentStep('form');
    };

    const handleCreateSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            
            const orderData: FormOrderData = {
                ...newOrder,
                plan: selectedPlan,
                ...(selectedPlan === "custom" && {
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
                plan: planParam || "",
            });
            setCustomFeatures({});
            setSelectedPlan(planParam || '');
            setCurrentStep(planParam ? 'form' : 'plan');

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

    if (currentStep === 'plan') {
        return (
            <div className="min-h-screen pb-20 pt-2">
                <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background to-foreground/10">
                    <h1 className="text-3xl text-primary">انتخاب طرح</h1>
                    
                    <div className="grid gap-6 w-full max-w-4xl sm:grid-cols-2 lg:grid-cols-4">
                        {/* Dino Plan */}
                        <Card 
                            className="relative p-6 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('dino')}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-2xl font-bold">داینو</h3>
                                <p className="text-center text-sm text-subtext">
                                    پلن پایه برای شروع سریع
                                </p>
                                <p className="text-xl font-bold text-primary">
                                    {formatCurrency(10)} میلیون تومان
                                </p>
                                <Button variant="default" className="w-full">
                                    انتخاب داینو
                                </Button>
                            </div>
                        </Card>

                        {/* Rango Plan */}
                        <Card 
                            className="relative p-6 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('rango')}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-2xl font-bold text-primary">رنگو</h3>
                                <p className="text-center text-sm text-subtext">
                                    پلن پیشرفته با امکانات بیشتر
                                </p>
                                <p className="text-xl font-bold text-primary">
                                    {formatCurrency(25)} میلیون تومان
                                </p>
                                <Button variant="default" className="w-full">
                                    انتخاب رنگو
                                </Button>
                            </div>
                        </Card>

                        {/* Croco Plan */}
                        <Card 
                            className="relative p-6 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('croco')}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-2xl font-bold text-amber-400 dark:text-amber-300">کروکو</h3>
                                <p className="text-center text-sm text-subtext">
                                    پلن کامل با تمام امکانات
                                </p>
                                <p className="text-xl font-bold text-amber-400 dark:text-amber-300">
                                    {formatCurrency(40)} میلیون تومان
                                </p>
                                <Button variant="default" className="w-full bg-amber-400 dark:bg-amber-300">
                                    انتخاب کروکو
                                </Button>
                            </div>
                        </Card>

                        {/* Custom Plan */}
                        <Card 
                            className="relative p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 border-primary"
                            onClick={() => handlePlanSelection('custom')}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <h3 className="text-2xl font-bold text-primary">سفارشی</h3>
                                <p className="text-center text-sm text-subtext">
                                    بسازید آنچه را که نیاز دارید
                                </p>
                                <p className="text-xl font-bold text-primary">
                                    از {formatCurrency(10)} میلیون تومان
                                </p>
                                <Button variant="default" className="w-full">
                                    ساخت سفارشی
                                </Button>
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        );
    }

    if (currentStep === 'custom' && !customBuilderCompleted) {
        return (
            <div className="min-h-screen pb-20 pt-2">
                <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background to-foreground/10">
                    <CustomOrderBuilder 
                        selectedFeatures={customFeatures}
                        onFeaturesChange={setCustomFeatures}
                        onPriceChange={setCustomPrice}
                        onComplete={handleCustomBuilderComplete}
                    />
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20 pt-2">
            <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background to-foreground/10">
                <h1 className="text-3xl text-primary">سفارش منوی دیجیتال</h1>
                
                {/* Selected Plan Summary */}
                <Card className="w-full max-w-2xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-6 h-6 text-primary" />
                            <span className="text-lg font-semibold">
                                {selectedPlan === 'dino' && 'طرح داینو'}
                                {selectedPlan === 'rango' && 'طرح رنگو'}
                                {selectedPlan === 'croco' && 'طرح کروکو'}
                                {selectedPlan === 'custom' && 'سفارش سفارشی'}
                            </span>
                        </div>
                        <span className="text-xl font-bold text-primary">
                            {selectedPlan === 'dino' && `${formatCurrency(10)} میلیون تومان`}
                            {selectedPlan === 'rango' && `${formatCurrency(25)} میلیون تومان`}
                            {selectedPlan === 'croco' && `${formatCurrency(40)} میلیون تومان`}
                            {selectedPlan === 'custom' && `${formatCurrency(customPrice)} میلیون تومان`}
                        </span>
                    </div>
                    {!planParam && (
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => {
                                setCurrentStep('plan');
                                setCustomBuilderCompleted(false);
                            }}
                            className="mt-4"
                        >
                            تغییر طرح
                        </Button>
                    )}
                </Card>

                <form
                    onSubmit={handleCreateSubmit}
                    className="space-y-6 w-full max-w-2xl"
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

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            variant="default"
                            size="lg"
                            className="text-xl font-bold w-full sm:w-auto px-12"
                        >
                            {selectedPlan === 'custom' 
                                ? `ثبت سفارش (${formatCurrency(customPrice)} میلیون تومان)`
                                : "ثبت سفارش"
                            }
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
