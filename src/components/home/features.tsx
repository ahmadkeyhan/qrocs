"use client"

import Feature from "./feature";
import { useState } from "react";
import { Switch } from "../ui/switch";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
    const featuresVsPrint = [
        {
            title: "انعطاف‌‌‌پذیری منوی دیجیتال",
            description: "هر تغییری تو منوی چاپی نیازمند چاپ مجدده، که پروسه‌ی زمان‌بریه! در حالی که با منوی دیجیتال تو چند لحظه میتونی هر آیتم، دسته‌بندی یا قیمتی رو تغییر بدی. ",
            color: "",
            image: ""
        },
        {
            title: "حذف هزینه‌های چاپ",
            description: "چه به دلیل خراب شدن طی گذر زمان، چه افزایش روزانه‌ی قیمت مواد اولیه، عمر منوهای چاپی کوتاهه و هزینه‌ی چاپ زیاد! ولی تغییر قیمت، اضافه کردن آیتم جدید و ... تو کراکس هیچ هزینه‌ای نداره!",
            color: "",
            image: ""
        },
        {
            title: "دسترسی‌پذیری منو",
            description: "منوی چاپی فقط از میزها و کانتر به صورت حضوری در دسترسه. ولی منوی دیجیتال با اسکن کیوآرکد یا داشتن لینک منو حتی از خونه هم دسترس‌پذیره.",
            color: "",
            image: ""
        },
        {
            title: "پشتیبانی از دو زبان",
            description: "جا دادن اطلاعات محصول تو منوی چاپی به یک زبان کار سختیه؛ چه برسه به دو زبان! با کراکس میتونی منوی فارسی و انگلیسی(یا هر زبان دیگه‌ای) داشته باشی تا به مشتریان بیشتری سرویس بدی، مثل توریست‌ها!",
            color: "",
            image: ""
        },
        {
            title: "موجود/ناموجود کردن آیتم‌ها",
            description: "با منوی چاپی مجبورید به مشتریها بگید: شرمنده! فلان آیتم رو تموم کردیم! ولی با کراکس به راحتی آیتم‌ها رو ناموجود کنید، یا فقط در ساعات مشخصی از روز، یا روزهای معین هفته موجود کنید.",
            color: "",
            image: ""
        },
    ]

    const featuresVsDigital = [
        {
            title: "پنل ادمین",
            description: "اکثر منوهای دیجیتال پنل ادمین ندارن و هر تغییری باید توسط برنامه‌نویس اعمال بشه، ولی با داشبورد کراکس به راحتی میتونید هر موقع خواستید دسته‌بندی‌ها، آیتم‌ها، قیمت‌ها و حتی ظاهر منو رو تغییر بدید.",
            color: "",
            image: ""
        },
        {
            title: "موجود/ناموجود کردن آیتم‌ها",
            description: "اکثر منوهای دیجیتال قابلیت تغییر موجودی آیتم‌هارو ندارن، اگر هم داشته‌ باشن، دستی و تک به تک میتونید موجودی رو تغییر بدید! ولی با کراکس علاوه بر این، میتونید فقط در ساعات مشخصی از روز، یا روزهای معین هفته آیتمی رو موجود کنید.",
            color: "",
            image: ""
        },
        {
            title: "شخصی سازی ظاهر منو",
            description: "یه برند باید همه‌چیش باهم بخونه! کراکس به جای استفاده از قالب‌های آماده، رابط کاربری اختصاصی خودتو برات می‌سازه.",
            color: "",
            image: ""
        },
        {
            title: "پشتیبانی از چند شعبه",
            description: "وقتی مجموعه‌ای چند شعبه داره، داشتن منوی دیجیتال مشترک برای شعبه‌ها محدودیتهای خودش، و منوی دیجیتال متفاوت برای هر شعبه دردسرهای خودش رو داره! کراکس مدیریت منوی شعبه‌ها رو خیلی آسون کرده.",
            color: "",
            image: ""
        },
        // {
        //     title: "پشتیبانی از دو زبان",
        //     description: "اکثر منوهای دیجیتال فقط از یک زبان پشتیبانی میکنن! با کراکس میتونی منوی فارسی و انگلیسی(یا هر زبان دیگه‌ای) داشته باشی تا به مشتریان بیشتری سرویس بدی، مثل توریست‌ها!",
        //     color: "",
        //     image: ""
        // },
        {
            title: "شخصی‌سازی کد کیوآر",
            description: "مشتری شما هر روز ده‌ها کد کیوآر سیاه و سفید و پیش‌فرض می‌بینه! رنگ و طرح کیوآر کدتون رو شخصی‌سازی کنید و حتی لوگوتون رو توش قرار بدید، تا چشم‌نواز و چشم‌گیر بشه.",
            color: "",
            image: ""
        },
        {
            title: "تجزیه و تحلیل اسکن کیوآرکد",
            description: "تعداد اسکن و توزیع زمانی اسکن منوتون رو پیگیری کنید؛ تا اقدامات بازاریابی و بهینه‌سازی‌های لازم رو انجام بدید.",
            color: "",
            image: ""
        },
        
    ]

    const [features,setFeatures] = useState(featuresVsPrint)
    const [isPrint, setIsPrint] = useState(true)

    // Animation variants for containers
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 },
        staggerChildren: 0.2, // Stagger children by 0.1 seconds
        delayChildren: 0.1, // Start staggering after 0.1 seconds
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 },
        staggerChildren: 0.1, // Faster stagger on exit
        staggerDirection: -1, // Reverse stagger direction on exit
      },
    }),
  }

  // Animation variants for individual cards
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    //   transition: {
    //     type: "spring",
    //     stiffness: 300,
    //     damping: 20,
    //   },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.95,
    //   transition: {
    //     type: "spring",
    //     stiffness: 300,
    //     damping: 20,
    //   },
    }),
  }

    // Direction: 1 for right to left (when switching to digital), -1 for left to right (when switching to print)
    const direction = isPrint ? 1 : -1

  return (
    <div className="relative overflow-clip grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full p-4 bg-gradient-to-b from-background to-foreground/5">
        <div className="flex flex-col gap-2 items-center text-center px-4 py-4 sm:col-span-2 lg:col-span-3 bg-background/70 backdrop-blur-md sticky top-[3.75rem] sm:top-[4.5rem] z-10">
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
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
        {/* one column for mobile */}
        <div className="relative sm:hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={isPrint ? "print-mobile" : "digital-mobile"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    whileInView="center"
                    exit="exit"
                    className="grid gap-4"
                >
                    {features.map((feature, index) => {
                        return (
                            <motion.div key={`${feature.title}${index}`} variants={cardVariants} custom={direction} className="w-full">
                                <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
        {/* two columns for  tablet */}
        <div className="hidden relative sm:grid lg:hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                key={isPrint ? "print-tablet-col1" : "digital-tablet-col1"}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                whileInView="center"
                exit="exit"
                className="grid gap-4"
                >
                    {features.filter((feature,index) => index % 2 === 0).map((feature, index) => {
                        return (
                            <motion.div key={`${feature.title}${index}`} variants={cardVariants} custom={direction} className="w-full">
                                <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
        <div className="hidden relative sm:grid lg:hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={isPrint ? "print-tablet-col1" : "digital-tablet-col1"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    whileInView="center"
                    exit="exit"
                    className="grid gap-4"
                >
                    {features.filter((feature,index) => index % 2 === 1).map((feature, index) => {
                        return (
                            <motion.div key={`${feature.title}${index}`} variants={cardVariants} custom={direction} className="w-full">
                                <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
        {/* three columns for desktop */}
        <div className="hidden relative lg:grid">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={isPrint ? "print-desktop-col1" : "digital-desktop-col1"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    whileInView="center"
                    exit="exit"
                    className="grid gap-4"
                >
                    {features.filter((feature,index) => index % 3 === 0).map((feature, index) => {
                        return (
                            <motion.div key={`${feature.title}${index}`} variants={cardVariants} custom={direction} className="w-full">    
                                <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} />
                            </motion.div>
    )                })}
                </motion.div>
            </AnimatePresence>        
        </div>
        <div className="hidden relative lg:grid">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={isPrint ? "print-desktop-col1" : "digital-desktop-col1"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    whileInView="center"
                    exit="exit"
                    className="grid gap-4"
                >
                    {features.filter((feature,index) => index % 3 === 1).map((feature, index) => {
                        return (
                            <motion.div key={`${feature.title}${index}`} variants={cardVariants} custom={direction} className="w-full">    
                                <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} />
                            </motion.div>
    )                })}
                </motion.div>
            </AnimatePresence>        
        </div>
        <div className="hidden relative lg:grid">
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={isPrint ? "print-desktop-col1" : "digital-desktop-col1"}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    whileInView="center"
                    exit="exit"
                    className="grid gap-4"
                >
                    {features.filter((feature,index) => index % 3 === 2).map((feature, index) => {
                        return (
                            <motion.div key={`${feature.title}${index}`} variants={cardVariants} custom={direction} className="w-full">    
                                <Feature title={feature.title} description={feature.description} color={feature.color} image={feature.image} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </AnimatePresence>        
        </div>
        {/* decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  );
}
