"use client"

import { title } from "process";
import Feature from "./feature";
import { useState } from "react";
import { Switch } from "../ui/switch";

export default function Features() {
    const featuresVsPrint = [
        {
            title: "حذف هزینه‌های چاپ1",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: "/placeholder.svg"
        },
        {
            title: "حذف هزینه‌های چاپ2",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: "/placeholder.svg"
        },
        {
            title: "حذف هزینه‌های چاپ3",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: "/placeholder.svg"
        },
        {
            title: "حذف هزینه‌های چاپ4",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: ""
        },
        {
            title: "حذف هزینه‌های چاپ5",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: ""
        },
    ]

    const featuresVsDigital = [
        {
            title: "حذف هزینه‌های چاپ6",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: "/placeholder.svg"
        },
        {
            title: "حذف هزینه‌های چاپ2",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: "/placeholder.svg"
        },
        {
            title: "حذف هزینه‌های چاپ3",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: "/placeholder.svg"
        },
        {
            title: "حذف هزینه‌های چاپ4",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: ""
        },
        {
            title: "حذف هزینه‌های چاپ5",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: ""
        },
    ]

    const [features,setFeatures] = useState(featuresVsPrint)
    const [isPrint, setIsPrint] = useState(true)

  return (
    <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full p-4 bg-gradient-to-b from-background to-foreground/5">
        <div className="flex flex-col gap-2 items-center text-center px-4 sm:col-span-2 lg:col-span-3">
            <h2 className="text-3xl text-primary">ویژگی‌های کراکس</h2>
            {/* <p className="text-lg">چرا منوی دیجیتال کراکس بهتر از منوی چاپی یا بقیه منوهای دیجیتاله؟</p> */}
            <div className="flex justify-center items-center gap-2 w-full">
                <p>مقایسه با منوی چاپی</p>
                <Switch 
                    id="new-dialog-active"
                    checked={isPrint}
                    onCheckedChange={(checked) => {
                        setIsPrint(!isPrint)
                        if (checked) setFeatures(featuresVsPrint)
                        else setFeatures(featuresVsDigital)
                    }}
                />
                <p>مقایسه با منوهای دیجیتال</p>
            </div>
        </div>
        {/* one column for mobile */}
        <div className="grid gap-4 sm:hidden">
            {features.map((feature, index) => {
                return <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} key={`${feature.title}${index}`} />
            })}
        </div>
        {/* two columns for  tablet */}
        <div className="hidden gap-4 sm:grid lg:hidden">
            {features.filter((feature,index) => index % 2 === 0).map((feature, index) => {
                return <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} key={`${feature.title}${index}`} />
            })}
        </div>
        <div className="hidden gap-4 sm:grid lg:hidden">
            {features.filter((feature,index) => index % 2 === 1).map((feature, index) => {
                return <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} key={`${feature.title}${index}`} />
            })}
        </div>
        {/* three columns for desktop */}
        <div className="hidden gap-4 lg:grid">
            {features.filter((feature,index) => index % 3 === 0).map((feature, index) => {
                return <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} key={`${feature.title}${index}`} />
            })}
        </div>
        <div className="hidden gap-4 lg:grid">
            {features.filter((feature,index) => index % 3 === 1).map((feature, index) => {
                return <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} key={`${feature.title}${index}`} />
            })}
        </div>
        <div className="hidden gap-4 lg:grid">
            {features.filter((feature,index) => index % 3 === 2).map((feature, index) => {
                return <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} key={`${feature.title}${index}`} />
            })}
        </div>
        {/* decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  );
}
