import { Button } from "../ui/button"
import Image from "next/image";
import {QrCode} from "lucide-react"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
    const {resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) {
        return (
            <div className="grid sm:grid-cols-2 w-full p-4 max-w-5xl">
                <div className="flex flex-col text-center px-8 sm:px-2 items-center justify-center w-full">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-1">منوی دیجیتالتو بساز</h1>
                    <p className="text-lg mb-4 text-foreground w-[32ch]">جای اینکه هر ماه منوی کافه یا رستوران رو دوباره چاپ کنی، با کراکس دیجیتالش کن تا مشتری‌ها با اسکن کیوآرکد به راحتی ببیننش!</p>
                    <div className="flex justify-center gap-4">
                        <Link href='/order'>
                            <Button variant="default" size="lg">
                                <QrCode className="w-5 h-5" />
                                <p className="text-lg">سفارش منو</p>
                            </Button>
                        </Link>
                        <Link href='#plans'>
                            <Button variant="default" size="lg" className="bg-foreground/15 text-foreground">
                                <p className="text-lg">پلن‌ها</p>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative aspect-square w-full -my-4 lg:-my-10">
                    
                </div>
            </div>
        );
    }
        
  return (
    <div className="grid sm:grid-cols-2 w-full p-4 max-w-5xl">
        <div className="flex flex-col text-center px-8 sm:px-2 items-center justify-center w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-1">منوی دیجیتالتو بساز</h1>
            <p className="text-lg mb-4 text-foreground w-[32ch]">جای اینکه هر ماه منوی کافه یا رستوران رو دوباره چاپ کنی، با کراکس دیجیتالش کن تا مشتری‌ها با اسکن کیوآرکد به راحتی ببیننش!</p>
            <div className="flex justify-center gap-4">
                <Link href='/order'>
                    <Button variant="default" size="lg">
                        <QrCode className="w-5 h-5" />
                        <p className="text-lg">سفارش منو</p>
                    </Button>
                </Link>
                <Link href='#plans'>
                    <Button variant="default" size="lg" className="bg-foreground/15 text-foreground">
                        <p className="text-lg">پلن‌ها</p>
                    </Button>
                </Link>
            </div>
        </div>
        <div className="relative aspect-square w-full -my-4 lg:-my-10">
            <Image
                src={resolvedTheme === "light" ? `/heroBanner.png` : `/heroBannerDark.png`}
                alt="sdf"
                fill
                className="object-cover"
            />
        </div>
    </div>
  );
}
