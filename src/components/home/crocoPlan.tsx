import { Button } from "../ui/button";
import {CheckCircle} from "lucide-react"
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function RangoPlan({isMonthly}:{isMonthly:boolean}) {
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
                        <h3 className="text-2xl">کروکو</h3>
                    </div>
                    <p className="text-subtext">رنگو بهت کمک میکنه با پالت رنگ و هویت بصری خودت منوی دیجیتالتو بسازی؛ و با اضافه کردن عکس آیتم‌ها به مشتریانت تو انتخاب سفارش کمک کنی...</p>
                </div>
                <div className="relative bg-foreground/10 py-4 px-6 flex flex-col gap-4">
                    <h4 className="text-2xl">{isMonthly ? `${formatCurrency(500)} هزار تومان ` : `${formatCurrency(5)} میلیون تومان `}<span className="text-base text-subtext mr-2">{isMonthly? "ماهانه" : "سالانه"}</span></h4>
                    <div className="w-full flex justify-center">
                        <Link href={`/order?plan=croco&payment=${isMonthly?"monthly":"yearly"}`}>
                            <Button variant="default" className="w-36 bg-amber-400 dark:bg-amber-300">
                                <p className="text-lg">سفارش کروکو</p>
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
                            <p className="w-11/12">تمامی ویژگی‌های پلن داینو و رنگو</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">موجود/ناموجود کردن آیتم‌ها در ساعات مشخص روز یا روزهای مشخص هفته</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">امکان استفاده از دامنه‌ی شخصی (مثل mycafe.ir)</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">تجزیه و تحلیل تعداد اسکن کیوآرکد</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">منوی دیجیتال مجموعه‌های چندشعبه‌ای</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">تغییر ظاهر کیوآرکد (رنگ و شکل هندسی)</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">منوی دوزبانه (فارسی و انگلیسی)</p>
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
                        src={resolvedTheme === 'dark' ? `/crocoAvatarDark.png` : `/crocoAvatar.png`}
                        alt="sdf"
                        fill
                        className="object-cover"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />
                    <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" /> */}
                </div>
                <h3 className="text-2xl text-amber-400 dark:text-amber-300">کروکو</h3>
            </div>
            <p className="text-subtext">رنگو بهت کمک میکنه با پالت رنگ و هویت بصری خودت منوی دیجیتالتو بسازی؛ و با اضافه کردن عکس آیتم‌ها به مشتریانت تو انتخاب سفارش کمک کنی...</p>
        </div>
        <div className="relative bg-amber-400/10 py-4 px-6 flex flex-col gap-4">
            <h4 className="text-2xl">{isMonthly ? `${formatCurrency(500)} هزار تومان ` : `${formatCurrency(5)} میلیون تومان `}<span className="text-base text-subtext mr-2">{isMonthly? "ماهانه" : "سالانه"}</span></h4>
            <div className="w-full flex justify-center">
                <Link href={`/order?plan=croco&payment=${isMonthly?"monthly":"yearly"}`}>
                    <Button variant="default" className="w-36 bg-amber-400 dark:bg-amber-300">
                        <p className="text-lg">سفارش کروکو</p>
                    </Button>
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>
        <div className="flex flex-col p-4 px-6 gap-2">
            <h4>ویژگی‌های برجسته:</h4>
            <ul className="space-y-2">
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">تمامی ویژگی‌های پلن داینو و رنگو</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">موجود/ناموجود کردن آیتم‌ها در ساعات مشخص روز یا روزهای مشخص هفته</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">امکان استفاده از دامنه‌ی شخصی (مثل mycafe.ir)</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">تجزیه و تحلیل تعداد اسکن کیوآرکد</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">منوی دیجیتال مجموعه‌های چندشعبه‌ای</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">تغییر ظاهر کیوآرکد (رنگ و شکل هندسی)</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">منوی دوزبانه (فارسی و انگلیسی)</p>
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