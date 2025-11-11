import { Button } from "../ui/button";
import {CheckCircle} from "lucide-react"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function DinoPlan() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
    // Only show the UI after mounting to prevent hydration mismatch
    useEffect(() => {
      setMounted(true)
    }, [])
    if (!mounted) {
        return (
            <div className="relative flex flex-col gap-2 bg-background rounded-3xl overflow-hidden h-fit w-full">
                <div className="flex flex-col p-4 px-6 gap-2">
                    <div className="hidden w-full gap-4 -mr-6 -mt-4 lg:flex lg:items-center">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden">

                        </div>
                        <h3 className="text-2xl">داینو</h3>
                    </div>
                    <p className="text-subtext">داینو بهت کمک میکنه تو چند دقیقه منوی دیجیتال خودتو بسازی؛ و تو چند ثانیه بارگزاریش کنی! هرموقع هم که لازم شد تغییرش بدی...</p>
                </div>
                <div className="relative bg-foreground/10 py-4 px-6 flex flex-col gap-4">
                    <h4 className="text-2xl">رایگان</h4>
                    <div className="w-full flex justify-center">
                        <Link href='/order?plan=dino'>
                            <Button variant="default" className="w-36 bg-foreground">
                                <p className="text-lg">سفارش داینو</p>
                            </Button>
                        </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <div className="flex flex-col p-4 px-6 gap-2">
                    <h4>ویژگی‌های برجسته:</h4>
                    <ul className="space-y-2">
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">زیر دامنه‌ی اختصاصی (برای مثال mycafe.qrocs.ir)</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">ایجاد و دانلود کیوآر کد</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">ایجاد، ویرایش و حذف دسته‌بندی‌ها</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">ایجاد، ویرایش و حذف آیتم‌ها و قیمت‌ها</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">به‌روزرسانی خودکار منو بعد از تغییر</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">منوی دیجیتال و داشبورد واکنش‌گرا (نمایش درست در موبایل، تبلت و دسکتاپ)</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">نمایش آدرس و مختصات گوگل مپ در فوتر منوی دیجیتال</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">نمایش شماره تلفن و حسابهای شبکه‌های اجتماعی مجموعه در فوتر منوی دیجیتال</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">نمایش نام و شعار مجموعه</p>
                        </li>
                    </ul>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
            </div>
           )
    }
   return (
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
        <div className="relative bg-foreground/10 py-4 px-6 flex flex-col gap-4">
            <h4 className="text-2xl">رایگان</h4>
            <div className="w-full flex justify-center">
                <Link href='/order?plan=dino'>
                    <Button variant="default" className="w-36 bg-foreground">
                        <p className="text-lg">سفارش داینو</p>
                    </Button>
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="flex flex-col p-4 px-6 gap-2">
            <h4>ویژگی‌های برجسته:</h4>
            <ul className="space-y-2">
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">زیر دامنه‌ی اختصاصی (برای مثال mycafe.qrocs.ir)</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">ایجاد و دانلود کیوآر کد</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">ایجاد، ویرایش و حذف دسته‌بندی‌ها</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">ایجاد، ویرایش و حذف آیتم‌ها و قیمت‌ها</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">به‌روزرسانی خودکار منو بعد از تغییر</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">منوی دیجیتال و داشبورد واکنش‌گرا (نمایش درست در موبایل، تبلت و دسکتاپ)</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">نمایش آدرس و مختصات گوگل مپ در فوتر منوی دیجیتال</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">نمایش شماره تلفن و حسابهای شبکه‌های اجتماعی مجموعه در فوتر منوی دیجیتال</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">نمایش نام و شعار مجموعه</p>
                </li>
            </ul>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
    </div>
   )
}