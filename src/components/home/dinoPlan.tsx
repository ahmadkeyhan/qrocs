import { Button } from "../ui/button";
import {CheckCircle} from "lucide-react"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import GradientBorder from "../ui/gradientBorder";

const features = [
    "طراحی رابط کاربری اختصاصی",
    "نمایش دسته‌بندی‌هاو آیتم‌های منو (عنوان، توضیح، مواد تشکیل‌دهنده، قیمت و آیکون)",
    "لینک‌های اجتماعی، راههای ارتباطی، آدرس و نقشه‌ی مسیریابی گوگل مپس در فوتر",
    "دامنه‌ی ir. رایگان",
    "هاست اروپا یک ساله",
    "پشتیبانی فنی به مدت یک سال",
    "نمایش صحیح در تمام گوشی‌ها",
    "امکان انتخاب تم لایت مد یا دارک مد",
    "ایجاد، ویرایش، حذف و تغییر ترتیب دسته‌بندی‌هاو آیتم‌های منو",
    "موجود/ناموجود کردن دستی آیتم‌ها جهت نمایش و عدم نمایش در منو",
    "مدیریت حسابهای کاربری و تعیین سطح دسترسی کاربران",
    "ایجاد و ویرایش رنگ و طرح کیوآر کد آماده‌ی چاپ"
]

export default function DinoPlan() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
    // Only show the UI after mounting to prevent hydration mismatch
    useEffect(() => {
      setMounted(true)
    }, [])
    if (!mounted) {
        return (
            <GradientBorder color="border">
                <div className="relative flex flex-col gap-2 bg-background rounded-3xl overflow-hidden h-fit w-full">
                    <div className="flex flex-col p-4 px-6 gap-2">
                        <div className="hidden w-full gap-4 -mr-6 -mt-4 lg:flex lg:items-center">
                            <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">

                            </div>
                            <h3 className="text-2xl">داینو</h3>
                        </div>
                        <p className="text-subtext">داینو بهت کمک میکنه تو چند دقیقه منوی دیجیتال خودتو بسازی؛ و تو چند ثانیه بارگزاریش کنی! هرموقع هم که لازم شد تغییرش بدی...</p>
                    </div>
                    <GradientBorder color="border" left={false} right={false} radius="none">
                        <div className="relative bg-foreground/10 py-4 px-6 flex flex-col items-center gap-4">
                            <h4 className="text-2xl">{`${formatCurrency(10000000)} تومان `}</h4>
                            <div className="w-full flex justify-center">
                                <Link href='/order?plan=dino'>
                                    <Button variant="default" className="w-36 bg-foreground">
                                        <p className="text-lg">سفارش داینو</p>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </GradientBorder>
                    <div className="flex flex-col p-4 px-6 gap-2">
                        <h4>ویژگی‌های برجسته:</h4>
                        <ul>
                            {features.map((feature) => {
                                return (
                                    <GradientBorder key={feature} color="border" right={false} left={false} bottom={false}>
                                        <li className="text-subtext flex gap-2 py-2 items-center">
                                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                                            <p className="w-full">
                                                {feature}
                                            </p>
                                        </li>
                                    </GradientBorder>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </GradientBorder>
           )
    }
   return (
    <GradientBorder color="border">
        <div className="relative flex flex-col gap-2 bg-background rounded-3xl overflow-hidden h-fit w-full">
            <div className="flex flex-col p-4 px-6 gap-2">
                <div className="hidden w-full gap-4 -mr-6 -mt-4 lg:flex lg:items-center">
                    <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">
                        <Image
                            src={resolvedTheme === 'dark' ? `/dinoAvatarDark.png` : `/dinoAvatar.png`}
                            alt="sdf"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-2xl">داینو</h3>
                </div>
                <p className="text-subtext">داینو بهت کمک میکنه تو چند دقیقه منوی دیجیتال خودتو بسازی؛ و تو چند ثانیه بارگزاریش کنی! هرموقع هم که لازم شد تغییرش بدی...</p>
            </div>
            <GradientBorder color="border" left={false} right={false} radius="none">
                <div className="relative bg-foreground/10 py-4 px-6 flex flex-col items-center gap-4">
                    <h4 className="text-2xl">{`${formatCurrency(10000000)} تومان `}</h4>
                    <div className="w-full flex justify-center">
                        <Link href='/order?plan=dino'>
                            <Button variant="default" className="w-36 bg-foreground">
                                <p className="text-lg">سفارش داینو</p>
                            </Button>
                        </Link>
                    </div>
                </div>
            </GradientBorder>
            <div className="flex flex-col p-4 px-6 gap-2">
                <h4>ویژگی‌های برجسته:</h4>
                <ul>
                    {features.map((feature) => {
                        return (
                            <GradientBorder key={feature} color="border" right={false} left={false} bottom={false}>
                                <li className="text-subtext flex gap-2 py-2 items-center">
                                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                                    <p className="w-full">
                                        {feature}
                                    </p>
                                </li>
                            </GradientBorder>
                        )
                    })}
                </ul>
            </div>
        </div>
    </GradientBorder>
   )
}