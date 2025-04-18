import { Button } from "@/components/ui/button";
import Image from "next/image";
import {QrCode} from "lucide-react"

export default function Hero() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 w-full p-4 max-w-6xl mb-6">
        <div className="flex flex-col text-center px-8 sm:px-2 items-center justify-center w-full">
            <h1 className="text-3xl lg:text-5xl text-primary mb-1">منوی دیجیتالتو بساز</h1>
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
        <div className="relative aspect-[5/4] w-full rounded-3xl overflow-hidden">
            <Image
                src="/placeholder.svg"
                alt="sdf"
                fill
                className="object-cover"
            />
        </div>
    </div>
  );
}
