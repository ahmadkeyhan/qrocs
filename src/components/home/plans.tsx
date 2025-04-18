import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import DinoPlan from "./dinoPlan";
import RangoPlan from "./rangoPlan";
import CrocoPlan from "./crocoPlan";

export default function Plans() {
  return (
    <div className="relative flex flex-col items-center gap-6 w-full max-w-6xl py-6">
        {/* <div> */}
            <h2 className="text-3xl text-primary">طرح‌های کراکس</h2>
        {/* </div> */}
        {/* mobile and tablet features */}
        <Tabs
          defaultValue="dino"
          className="w-full flex flex-col sm:flex-row-reverse lg:hidden"
        >
            <TabsList>
                <TabsTrigger value="dino">
                    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="sdf"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="sm:text-xl">داینو</h3>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="rango">
                    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="sdf"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="sm:text-xl">رنگو</h3>
                    </div>
                </TabsTrigger>
                <TabsTrigger value="croco">
                    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 bg-background pb-2 sm:pb-0 sm:pl-4 sm:gap-4 sm:w-48">
                        <div className="relative w-20 h-20 rounded-3xl overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="sdf"
                                fill
                                className="object-cover"
                            />
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
                    <RangoPlan />
                </TabsContent>
                <TabsContent
                    value="croco"
                >
                    <CrocoPlan />
                </TabsContent>
            </div>
        </Tabs>
        {/* desktop features */}
        <div className="hidden lg:flex gap-6 mb-6">
            <DinoPlan />
            <RangoPlan />
            <CrocoPlan />
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
