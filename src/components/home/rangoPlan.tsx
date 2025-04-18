import { Button } from "../ui/button";
import {CheckCircle} from "lucide-react"
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export default function RangoPlan() {
   return (
    <div className="relative flex flex-col gap-2 bg-background rounded-3xl overflow-hidden h-fit">
        <div className="flex flex-col p-4 px-6 gap-2">
            <div className="hidden w-full gap-4 -mr-6 -mt-4 lg:flex lg:items-center">
                <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
                    <Image
                        src="/placeholder.svg"
                        alt="sdf"
                        fill
                        className="object-cover"
                    />
                </div>
                <h3 className="text-2xl">رنگو</h3>
            </div>
            <p className="text-subtext">رنگو بهت کمک میکنه با پالت رنگ و هویت بصری خودت منوی دیجیتالتو بسازی؛ و با اضافه کردن عکس آیتم‌ها به مشتریانت تو انتخاب سفارش کمک کنی...</p>
        </div>
        <div className="relative bg-foreground/10 py-4 px-6 flex flex-col gap-4">
            <h4 className="text-2xl">{formatCurrency(200)} هزار تومان <span className="text-base text-subtext mr-2">در ماه</span></h4>
            <div className="w-full flex justify-center">
                <Button variant="default" className="w-36">
                    <p className="text-lg">سفارش بده</p>
                </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="flex flex-col p-4 px-6 gap-2">
            <h4>ویژگی‌های برجسته:</h4>
            <ul className="space-y-2">
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    ایجاد، مدیریت و حذف دسته‌بندی‌های منو
                </li>
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    ایجاد، مدیریت و حذف آیتم‌های منو
                </li>
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    ناموجود کردن بازه‌ای آیتم‌ها
                </li>
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    کیوآرکد ساز با امکان تغییر رنگ
                </li>
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    پنل ادمین با سطوح دسترسی مختلف برای کارکنان کافه
                </li>
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    انتخاب زیردامنه‌ی اختصاصی (مانند:mycafe.qrocs.ir)
                </li>
                <li className="text-subtext flex gap-1 items-start">
                    <CheckCircle className="w-4 h-4 text-foreground mt-1" />
                    امکان اتصال دامنه‌ی شخصی شما (مانند:mycafe.ir)
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