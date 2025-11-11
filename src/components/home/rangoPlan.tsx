import { Button } from "../ui/button";
import {CheckCircle} from "lucide-react"
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import GradientBorder from "../ui/gradientBorder";

const features = [
    "تمامی ویژگی‌های پلن داینو",
    "یک عکس برای هر آیتم منو",
    "صفحه‌ی فرود(خانه) با عکس، پیام خوشامدگوییو متن معرفی ثابت",
    "صفحه‌ی کاتالوگ محصولات فروشگاهی شامل عنوان، توضیحات و عکس محصولات",
    "صفحه‌ی گالری ثابت تصاویر با تقسیم‌بندی آلبوم",
    "صفحه‌ی وبلاگ با 24 مقاله جهت افزایش امتیاز SEO",
    "نمایش صحیح در تمام اندازه‌ها (گوشی، تبلت، دسکتاپ)",
    "قابلیت ارسال نوتیفیکیشن در تمام سیستم‌های عامل (اندروید، ios و ویندوز)",
    "فرم استخدام و همکاری",
    "فرم نظر سنجی، پیشنهادات و انتقادات",
    "ایجاد، ویرایش، حذف و تغییر ترتیب محصولات",
    "ایجاد نوتیفیکیشن و ارسال گروهی به مشتریان",
    "مدیریت، تأیید، پاسخ‌گویی و انتشار نظرات"
]

export default function RangoPlan() {
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
                            <h3 className="text-2xl text-primary">رنگو</h3>
                        </div>
                        <p className="text-subtext">رنگو بهت کمک میکنه با پالت رنگ و هویت بصری خودت منوی دیجیتالتو بسازی؛ و با اضافه کردن عکس آیتم‌ها به مشتریانت تو انتخاب سفارش کمک کنی...</p>
                    </div>
                    <GradientBorder color="primary" left={false} right={false} radius="none">
                        <div className="relative bg-primary/10 py-4 px-6 flex flex-col items-center gap-4">
                            <h4 className="text-2xl">{`${formatCurrency(25000000)} تومان `}</h4>
                            <div className="w-full flex justify-center">
                                <Link href={`/order?plan=rango`}>
                                    <Button variant="default" className="w-36">
                                        <p className="text-lg">سفارش رنگو</p>
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
                                            <CheckCircle className="w-4 h-4 text-primary mt-1" />
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
            <GradientBorder color="primary" left={false} right={false} radius="none">
                <div className="relative bg-primary/10 py-4 px-6 flex flex-col items-center gap-4">
                    <h4 className="text-2xl">{`${formatCurrency(25000000)} تومان `}</h4>
                    <div className="w-full flex justify-center">
                        <Link href={`/order?plan=rango`}>
                            <Button variant="default" className="w-36">
                                <p className="text-lg">سفارش رنگو</p>
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
                                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
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