import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import DinoPlan from "./dinoPlan";
import RangoPlan from "./rangoPlan";
import CrocoPlan from "./crocoPlan";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";

export default function Plans() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isMonthly, setIsmonthly] = useState(true)
    
  
    // Only show the UI after mounting to prevent hydration mismatch
    useEffect(() => {
      setMounted(true)
    }, [])
    if (!mounted) {
        return (
            <div className="relative flex flex-col items-center gap-4 w-full max-w-6xl py-6">
                <h2 className="text-3xl text-primary">طرح‌های کراکس</h2>
                <div className="flex justify-center items-center gap-2 w-full mb-2">
                    <p>پرداخت ماهانه</p>
                    <Switch 
                        id="new-dialog-active"
                        checked={isMonthly}
                        onCheckedChange={(checked) => setIsmonthly(!isMonthly)}
                    />
                    <p>پرداخت سالانه</p>
                </div>
                {/* mobile and tablet features */}
                <Tabs
                  defaultValue="dino"
                  className="w-full flex flex-col sm:flex-row-reverse lg:hidden"
                >
                    <TabsList>
                        <TabsTrigger value="dino">
                            <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                                <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
  
                                </div>
                                <h3 className="sm:text-xl">داینو</h3>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="rango">
                            <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                                <div className="relative w-20 h-20 rounded-3xl overflow-hidden">

                                </div>
                                <h3 className="sm:text-xl">رنگو</h3>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="croco">
                            <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                                <div className="relative w-20 h-20 rounded-3xl overflow-hidden">

                                </div>
                                <h3 className="sm:text-xl">کروکو</h3>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                    <div dir="rtl" className="px-4 max-w-128">
                        <TabsContent
                            value="dino"
                        >
                            <DinoPlan />
                        </TabsContent>
                        <TabsContent
                            value="rango"
                        >
                            <RangoPlan isMonthly={isMonthly} />
                        </TabsContent>
                        <TabsContent
                            value="croco"
                        >
                            <CrocoPlan isMonthly={isMonthly} />
                        </TabsContent>
                    </div>
                </Tabs>
                {/* desktop features */}
                <div className="hidden lg:flex gap-6 mb-6">
                    <DinoPlan />
                    <RangoPlan isMonthly={isMonthly} />
                    <CrocoPlan isMonthly={isMonthly} />
                </div>
        
                <Button variant="ghost" size="lg" className="relative w-40 rounded-full overflow-hidden text-subtext">
                    <p className="text-lg">
                    مقایسه‌ی کامل طرح‌ها
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
                </Button>
                {/* decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
          );
    }

  return (
    <div className="relative flex flex-col items-center gap-4 w-full max-w-6xl py-6">
        <h2 className="text-3xl text-primary">طرح‌های کراکس</h2>
        <div className="flex justify-center items-center gap-2 w-full mb-2">
            <p>پرداخت ماهانه</p>
            <Switch 
                id="new-dialog-active"
                checked={isMonthly}
                onCheckedChange={(checked) => setIsmonthly(!isMonthly)}
            />
            <p>پرداخت سالانه</p>
        </div>
        {/* mobile and tablet features */}
        <Tabs
          defaultValue="dino"
          className="w-full flex flex-col sm:flex-row-reverse lg:hidden"
        >
            <TabsList>
                <TabsTrigger value="dino">
                    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">
                            <Image
                                src={resolvedTheme === 'dark' ? `/dinoAvatarDark.png` : `/dinoAvatar.png`}
                                alt="sdf"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl">داینو</h3>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="rango">
                    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">
                            <Image
                                src={resolvedTheme === 'dark' ? `/rangoAvatarDark.png` : `/rangoAvatar.png`}
                                alt="sdf"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl text-purple-500">رنگو</h3>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="croco">
                    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">
                            <Image
                                src={resolvedTheme === 'dark' ? `/crocoAvatarDark.png` : `/crocoAvatar.png`}
                                alt="sdf"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl text-amber-400 dark:text-amber-300">کروکو</h3>
                    </div>
                </TabsTrigger>
            </TabsList>
            <div dir="rtl" className="px-4 max-w-128">
                <TabsContent
                    value="dino"
                >
                    <DinoPlan />
                </TabsContent>
                <TabsContent
                    value="rango"
                >
                    <RangoPlan isMonthly={isMonthly} />
                </TabsContent>
                <TabsContent
                    value="croco"
                >
                    <CrocoPlan isMonthly={isMonthly} />
                </TabsContent>
            </div>
        </Tabs>
        {/* desktop features */}
        <div className="hidden lg:flex gap-6 mb-6">
            <DinoPlan />
            <RangoPlan isMonthly={isMonthly} />
            <CrocoPlan isMonthly={isMonthly} />
        </div>

        <Button variant="default" size="lg" className="relative w-40 rounded-full overflow-hidden bg-foreground text-background">
            <p className="text-lg">
            مقایسه‌ی کامل طرح‌ها
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 top-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
        </Button>
        {/* decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  );
}
