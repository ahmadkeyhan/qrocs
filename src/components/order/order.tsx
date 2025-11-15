'use client'

import { useState, FormEvent, useEffect } from "react";
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
import { useTheme } from "next-themes";
import Image from "next/image";
import GradientBorder from "../ui/gradientBorder";

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
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

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
                <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background via-foreground/10 to-foreground/10">
                    <h1 className="text-3xl text-primary">انتخاب پلن</h1>
                    
                    <div className="grid gap-4 w-full max-w-4xl sm:grid-cols-2 lg:grid-cols-4">
                        {/* Dino Plan */}
                        <Card 
                            className="flex items-end bg-background cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('dino')}
                        >
                            <div className="relative w-20 h-20 rounded-3xl overflow-hidden ">
                                {mounted && <Image
                                    src={resolvedTheme === 'dark' ? `/dinoAvatarDark.png` : `/dinoAvatar.png`}
                                    alt="sdf"
                                    fill
                                    className="object-cover"
                                />}
                            </div>
                            <div className="flex flex-col grow gap-4 p-6 pr-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl">داینو</h3>
                                    <p className="text-lg font-bold">
                                        {formatCurrency(10000000)} <span className="text-sm">تومان</span>
                                    </p>
                                </div>
                                <GradientBorder color="border" bottom={false} right={false} left={false} radius="none">
                                    <p className="text-subtext pt-4 text-sm">
                                    امکانات ضروری منوی دیجیتال با کمترین هزینه
                                </p>
                                </GradientBorder>
                            </div>
                        </Card>

                        {/* Rango Plan */}
                        <Card 
                            className="flex items-end bg-primary cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('rango')}
                        >
                            <div className="relative w-20 h-20 rounded-3xl overflow-hidden ">
                                {mounted && <Image
                                    src={resolvedTheme === 'dark' ? `/rangoAvatarDark.png` : `/rangoAvatar.png`}
                                    alt="sdf"
                                    fill
                                    className="object-cover"
                                />}
                            </div>
                            <div className="flex flex-col grow gap-4 p-6 pr-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl text-background">رنگو</h3>
                                    <p className="text-lg text-background font-bold">
                                        {formatCurrency(25000000)} <span className="text-sm">تومان</span>
                                    </p>
                                </div>
                                <GradientBorder color="white" bottom={false} right={false} left={false} radius="none">
                                    <p className="text-white/70 pt-4 text-sm">
                                    امکانات پیشرفته‌ی منوی دیجیتال با {formatCurrency(10)}% تخفیف
                                </p>
                                </GradientBorder>
                            </div>
                        </Card>

                        {/* Croco Plan */}
                        <Card 
                            className="flex items-end bg-background cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('croco')}
                        >
                            <div className="relative w-20 h-20 rounded-3xl overflow-hidden ">
                                {mounted && <Image
                                    src={resolvedTheme === 'dark' ? `/crocoAvatarDark.png` : `/crocoAvatar.png`}
                                    alt="sdf"
                                    fill
                                    className="object-cover"
                                />}
                            </div>
                            <div className="flex flex-col grow gap-4 p-6 pr-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl text-amber-400 dark:text-amber-300">کروکو</h3>
                                    <p className="text-lg text-foreground font-bold">
                                        {formatCurrency(40000000)} <span className="text-sm">تومان</span>
                                    </p>
                                </div>
                                <GradientBorder color="border" bottom={false} right={false} left={false} radius="none">
                                    <p className="text-subtext pt-4 text-sm">
                                   تمام امکانات منوی دیجیتال کردیت با {formatCurrency(15)}% تخفیف
                                </p>
                                </GradientBorder>
                            </div>
                        </Card>

                        {/* Custom Plan */}
                        <Card 
                            className="flex items-end bg-background cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlanSelection('custom')}
                        >
                            <div className="flex flex-col grow gap-4 p-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl">کاستوم</h3>
                                    <p className="text-lg font-bold">
                                        <span className="text-sm">شروع از</span> {formatCurrency(10000000)} <span className="text-sm">تومان</span>
                                    </p>
                                </div>
                                <GradientBorder color="border" bottom={false} right={false} left={false} radius="none">
                                    <p className="text-subtext pt-4 text-sm">
                                   هیچ کدوم از پلن‌ها مناسب نیازت نیست؟ ویژگی‌های مد نظرت رو انتخاب کن و سفارش شخصی‌سازی شده بده! 
                                </p>
                                </GradientBorder>
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
                <main className="flex flex-col items-center min-h-screen p-4 gap-6 bg-gradient-to-b from-background via-foreground/10 to-foreground/10">
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
            <main className="flex flex-col items-center min-h-screen p-4 gap-4 bg-gradient-to-b from-background via-foreground/10 to-foreground/10">
                <h1 className="text-3xl text-primary">سفارش منوی دیجیتال</h1>
                
                {/* Selected Plan Summary */}
                <Card 
                    className={`flex items-end ${selectedPlan === "rango" ? "bg-primary" : "bg-background"} cursor-pointer hover:shadow-lg transition-shadow`}
                >
                    {selectedPlan !== 'custom' && <div className="relative w-20 h-20 rounded-3xl overflow-hidden ">
                        {mounted && <Image
                            src={
                                resolvedTheme === 'dark' && selectedPlan === 'dino' ? `/dinoAvatarDark.png` :
                                resolvedTheme === 'light' && selectedPlan === 'dino' ? `/dinoAvatar.png` :
                                resolvedTheme === 'dark' && selectedPlan === 'rango' ? `/rangoAvatarDark.png` :
                                resolvedTheme === 'light' && selectedPlan === 'rango' ? `/rangoAvatar.png` :
                                resolvedTheme === 'dark' && selectedPlan === 'croco' ? `/crocoAvatarDark.png` :
                                `/crocoAvatar.png`
                                }
                            alt="sdf"
                            fill
                            className="object-cover"
                        />}
                    </div>}
                    <div className="flex flex-col grow gap-4 p-6">
                        <div className={`flex justify-between items-center ${selectedPlan === "rango" ? "text-background" : "text-foreground"}`}>
                            <h3 className="text-2xl">
                                {selectedPlan === 'dino' && 'داینو'}
                                {selectedPlan === 'rango' && 'رنگو'}
                                {selectedPlan === 'croco' && 'کروکو'}
                                {selectedPlan === 'custom' && 'کاستوم'}
                            </h3>
                            <p className="text-lg font-bold">
                                {selectedPlan === 'dino' && `${formatCurrency(10000000)}`}
                                {selectedPlan === 'rango' && `${formatCurrency(25000000)}`}
                                {selectedPlan === 'croco' && `${formatCurrency(40000000)}`}
                                {selectedPlan === 'custom' && `${formatCurrency(customPrice*1000000)}`}
                                <span className="text-sm"> تومان</span>
                            </p>
                        </div>
                        {selectedPlan !== "custom" && <Button 
                            size="sm" 
                            onClick={() => {
                                setCurrentStep('plan');
                                setCustomBuilderCompleted(false);
                            }}
                            className={selectedPlan === "rango" ? "bg-background text-foreground" : "bg-foreground/10 text-foreground"}
                        >
                            تغییر پلن
                        </Button>}
                    </div>
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
