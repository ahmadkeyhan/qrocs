import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import DinoPlan from "./dinoPlan";
import RangoPlan from "./rangoPlan";
import CrocoPlan from "./crocoPlan";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion"

export default function Plans() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const [isTablet, setIsTablet] = useState(false)

    // Check if screen is tablet size or larger
    useEffect(() => {
        const checkScreenSize = () => {
        setIsTablet(window.innerWidth >= 640) // sm breakpoint
        }

        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    const [currentTab, setCurrentTab] = useState("dino")
    const previousTabRef = useRef("dino")
    // Map tab values to indices for direction calculation
    const tabOrder = ["dino", "rango", "croco"]

    const getDirection = () => {
        const currentIndex = tabOrder.indexOf(currentTab)
        const previousIndex = tabOrder.indexOf(previousTabRef.current)

        // If moving to a higher index tab, slide left to right (direction = 1)
        // If moving to a lower index tab, slide right to left (direction = -1)
        return currentIndex < previousIndex ? 1 : -1
    }

    const direction = getDirection()

    // Animation variants for tab content
    const slideVariants = {
        enter: (direction: number) => ({
        x: isTablet ? 0 : direction > 0 ? 300 : -300,
        y: isTablet ? (direction < 0 ? 600 : -600) : 0,
        opacity: 0,
        }),
        center: {
        zIndex: 1,
        x: 0,
        y:0,
        opacity: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 20 },
            y: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
        },
        },
        exit: (direction: number) => ({
        zIndex: 0,
        x: isTablet ? 0 : direction < 0 ? 300 : -300,
        y: isTablet ? (direction > 0 ? 600 : -600) : 0,
        opacity: 0,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 20 },
            y: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
        },
        }),
    }

    const handleTabChange = (newTab: string) => {
        previousTabRef.current = currentTab
        setCurrentTab(newTab)
    }
    
    // Render the current tab content
    const renderTabContent = () => {
        switch (currentTab) {
        case "dino":
            return <DinoPlan />
        case "rango":
            return <RangoPlan />
        case "croco":
            return <CrocoPlan />
        default:
            return <DinoPlan />
        }
    }
  
    // Only show the UI after mounting to prevent hydration mismatch
    useEffect(() => {
      setMounted(true)
    }, [])
    if (!mounted) {
        return (
            <div className="relative overflow-clip flex flex-col items-center gap-4 w-full lg:px-48 py-6 bg-gradient-to-b from-background to-foreground/5">
                <div className="bg-background/70 backdrop-blur-md w-full p-4 text-center sticky top-[3.75rem] sm:top-[4.5rem] z-10">
                    <h2 className="text-3xl text-primary">پلن‌های کرِدیت</h2>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>
                <Tabs
                defaultValue="dino"
                value={currentTab}
                onValueChange={handleTabChange}
                className="w-full flex flex-col sm:flex-row-reverse lg:hidden"
                >
                    <TabsList>
                        <TabsTrigger value="dino">
                            <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                                <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">

                                </div>
                                <h3 className="text-lg sm:text-xl">داینو</h3>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="rango">
                            <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                                <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">

                                </div>
                                <h3 className="text-lg sm:text-xl text-primary">رنگو</h3>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="croco">
                            <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                                <div className="relative w-20 h-20 rounded-3xl overflow-hidden border border-border">

                                </div>
                                <h3 className="text-lg sm:text-xl text-amber-400 dark:text-amber-300">کروکو</h3>
                            </div>
                        </TabsTrigger>
                    </TabsList>
                    <div dir="rtl" className="px-4 max-w-128">
                        <AnimatePresence mode="popLayout" custom={direction}>
                            <motion.div
                            key={`${currentTab}-${isTablet}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            // className="absolute inset-0"
                            >
                            {renderTabContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Tabs>
                {/* desktop features */}
                <div className="hidden lg:flex gap-6 mb-6">
                    <DinoPlan />
                    <RangoPlan />
                    <CrocoPlan />
                </div>

                <Button variant="default" size="lg" className="relative w-40 rounded-full overflow-hidden bg-foreground text-background">
                    <p className="text-lg">
                    مقایسه‌ی کامل پلن‌ها
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
    <div className="relative overflow-clip flex flex-col items-center gap-4 w-full lg:px-48 py-6 bg-gradient-to-b from-background to-foreground/5">
        <div className="bg-background/70 backdrop-blur-md w-full p-4 text-center sticky top-[3.75rem] sm:top-[4.5rem] z-10">
            <h2 className="text-3xl text-primary">پلن‌های کرِدیت</h2>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
        <Tabs
          defaultValue="dino"
          value={currentTab}
          onValueChange={handleTabChange}
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
                        <h3 className="text-lg sm:text-xl text-primary">رنگو</h3>
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
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                    key={`${currentTab}-${isTablet}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    // className="absolute inset-0"
                    >
                    {renderTabContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Tabs>
        {/* desktop features */}
        <div className="hidden lg:flex gap-6 mb-6">
            <DinoPlan />
            <RangoPlan />
            <CrocoPlan />
        </div>

        <Button variant="default" size="lg" className="relative w-40 rounded-full overflow-hidden bg-foreground text-background">
            <p className="text-lg">
            مقایسه‌ی کامل پلن‌ها
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
