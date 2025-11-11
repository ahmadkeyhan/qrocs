import { Button } from "../ui/button";
import {CheckCircle} from "lucide-react"
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function RangoPlan({isMonthly} : {isMonthly: boolean}) {
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
                        <h3 className="text-2xl">رنگو</h3>
                    </div>
                    <p className="text-subtext">رنگو بهت کمک میکنه با پالت رنگ و هویت بصری خودت منوی دیجیتالتو بسازی؛ و با اضافه کردن عکس آیتم‌ها به مشتریانت تو انتخاب سفارش کمک کنی...</p>
                </div>
                <div className="relative bg-foreground/10 py-4 px-6 flex flex-col gap-4">
                    <h4 className="text-2xl">{`${formatCurrency(25000000)} تومان `}</h4>
                    <div className="w-full flex justify-center">
                        <Link href={`/order?plan=rango&payment=${isMonthly?"monthly":"yearly"}`}>
                            <Button variant="default" className="w-36">
                                <p className="text-lg">سفارش رنگو</p>
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
                            <p className="w-11/12">تمامی ویژگی‌های پلن داینو</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">نمایش لوگوی مجموعه</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">آپلود عکس برای آیتم‌های منو</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">انتخاب طرح‌بندی (layout) منو</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">انتخاب رنگ و فونت اختصاصی</p>
                        </li>
                        <li className="text-subtext flex gap-1 items-center">
                            <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                            <p className="w-11/12">موجود/ناموجود کردن دستی آیتم‌های منو</p>
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
                        src={resolvedTheme === 'dark' ? `/rangoAvatarDark.png` : `/rangoAvatar.png`}
                        alt="sdf"
                        fill
                        className="object-cover"
                    />
                </div>
                <h3 className="text-2xl text-primary">رنگو</h3>
            </div>
            <p className="text-subtext">رنگو بهت کمک میکنه با پالت رنگ و هویت بصری خودت منوی دیجیتالتو بسازی؛ و با اضافه کردن عکس آیتم‌ها به مشتریانت تو انتخاب سفارش کمک کنی...</p>
        </div>
        <div className="relative bg-primary/10 py-4 px-6 flex flex-col gap-4">
            <h4 className="text-2xl">{`${formatCurrency(25000000)} تومان `}</h4>
            <div className="w-full flex justify-center">
                <Link href={`/order?plan=rango&payment=${isMonthly?"monthly":"yearly"}`}>
                    <Button variant="default" className="w-36">
                        <p className="text-lg">سفارش رنگو</p>
                    </Button>
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        <div className="flex flex-col p-4 px-6 gap-2">
            <h4>ویژگی‌های برجسته:</h4>
            <ul className="space-y-2">
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">تمامی ویژگی‌های پلن داینو</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">نمایش لوگوی مجموعه</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">آپلود عکس برای آیتم‌های منو</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">انتخاب طرح‌بندی (layout) منو</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">انتخاب رنگ و فونت اختصاصی</p>
                </li>
                <li className="text-subtext flex gap-1 items-center">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    <p className="w-11/12">موجود/ناموجود کردن دستی آیتم‌های منو</p>
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