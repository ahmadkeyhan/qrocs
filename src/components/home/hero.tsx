"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {QrCode} from "lucide-react"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
    const {theme} = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) 
        return (
            <div className="grid sm:grid-cols-2 w-full p-4 max-w-5xl">
                <div className="flex flex-col text-center px-8 sm:px-2 items-center justify-center w-full">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-1">منوی دیجیتالتو بساز</h1>
                    <p className="text-lg mb-4 text-foreground w-[32ch]">جای اینکه هر ماه منوتون رو دوباره چاپ کنید، با کراکس منوی کافه یا رستوران رو دیجیتال کنید تا مشتریانتون با اسکن کیوآرکد به راحتی ببیننش!</p>
                    <div className="flex justify-center gap-4">
                        <Button variant="default" size="lg">
                        <QrCode className="w-5 h-5" />
                        <p className="text-lg">منوتو بساز</p>
                        </Button>
                        <Button variant="secondary" size="lg">
                        <p className="text-lg">پلن‌ها</p>
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-square w-full -my-4 lg:-my-10">
                    
                </div>
            </div>
        );
  return (
    <div className="grid sm:grid-cols-2 w-full p-4 max-w-5xl">
        <div className="flex flex-col text-center px-8 sm:px-2 items-center justify-center w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-1">منوی دیجیتالتو بساز</h1>
            <p className="text-lg mb-4 text-foreground w-[32ch]">جای اینکه هر ماه منوتون رو دوباره چاپ کنید، با کراکس منوی کافه یا رستوران رو دیجیتال کنید تا مشتریانتون با اسکن کیوآرکد به راحتی ببیننش!</p>
            <div className="flex justify-center gap-4">
                <Button variant="default" size="lg">
                <QrCode className="w-5 h-5" />
                <p className="text-lg">منوتو بساز</p>
                </Button>
                <Button variant="secondary" size="lg">
                <p className="text-lg">پلن‌ها</p>
                </Button>
            </div>
        </div>
        <div className="relative aspect-square w-full -my-4 lg:-my-10">
            <Image
                src={theme === "light" ? `/heroBanner.png` : `/heroBannerDark.png`}
                alt="sdf"
                fill
                className="object-cover"
            />
        </div>
    </div>
  );
}
