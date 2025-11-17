"use client";

import { useState, useMemo, useEffect } from "react";
import {
    customFeatures,
    INITIAL_PRICE,
    Feature,
    FeatureOption,
} from "@/lib/data/customFeatures";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface CustomOrderBuilderProps {
    selectedFeatures: Record<string, string>;
    onFeaturesChange: (features: Record<string, string>) => void;
    onPriceChange: (price: number) => void;
    onComplete: () => void;
    onCancel: () => void;
}

export default function CustomOrderBuilder({
    selectedFeatures,
    onFeaturesChange,
    onPriceChange,
    onComplete,
    onCancel,
}: CustomOrderBuilderProps) {
    const [currentStep, setCurrentStep] = useState(0);

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Calculate total price based on selected features
    const totalPrice = useMemo(() => {
        let price = INITIAL_PRICE;

        Object.entries(selectedFeatures).forEach(([featureId, optionId]) => {
            const feature = customFeatures.find((f) => f.id === featureId);
            if (feature) {
                const option = feature.options.find((o) => o.id === optionId);
                if (option) {
                    price += option.price;
                }
            }
        });

        return price;
    }, [selectedFeatures]);

    // Update parent component when price changes
    useEffect(() => {
        if (totalPrice >= 40) onPriceChange(Math.round(totalPrice * .85));
        else if (totalPrice >= 20) onPriceChange(Math.round(totalPrice * .9));
        else onPriceChange(totalPrice);
    }, [totalPrice, onPriceChange]);

    const handleFeatureChange = (featureId: string, optionId: string) => {
        const updatedFeatures = {
            ...selectedFeatures,
            [featureId]: optionId,
        };
        onFeaturesChange(updatedFeatures);
    };

    const handleNext = () => {
        const currentFeature = customFeatures[currentStep];
            if (!selectedFeatures[currentFeature.id]) {
            const updatedFeatures = {
                ...selectedFeatures,
                [currentFeature.id]: currentFeature.options[0].id,
            };
            onFeaturesChange(updatedFeatures);
        }
            
        if (currentStep < customFeatures.length - 1) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const currentFeature = customFeatures[currentStep];

    return (
        <div className="relative space-y-4 w-full max-w-2xl">
            <div className="space-y-4 sticky top-[5.25rem] sm:top-24 z-10">
                <Card className="p-4 bg-background space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-primary">
                                مرحله {formatCurrency(currentStep + 1)} از{" "}
                                {formatCurrency(customFeatures.length)}
                            </span>
                        </div>
                        <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 right-0 h-full bg-foreground/5 transition-all duration-300"
                                style={{ width: "100%" }}
                            />
                            <div
                                className="absolute top-0 right-0 h-full bg-gradient-to-l from-primary to-primary/70 transition-all duration-300"
                                style={{
                                    width: `${
                                        ((currentStep + 1) /
                                            customFeatures.length) *
                                        100
                                    }%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* Price Display */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-subtext">
                                قیمت کل سفارش:
                            </p>
                            <h3 className={`text-xl font-bold ${totalPrice >= 20 ? "line-through text-foreground decoration-primary decoration-2" : "text-primary"}`}>
                                {formatCurrency(totalPrice * 1000000)}
                                {totalPrice < 20 && <span className="text-sm"> تومان</span>}
                            </h3>
                        </div>
                        {totalPrice >= 20 && <div>
                            <p className="text-sm text-subtext">
                                با تخفیف {totalPrice >= 40 ? formatCurrency(15) : formatCurrency(10)}%:
                            </p>
                            <h3 className="text-xl font-bold text-primary">
                                {totalPrice >= 40 ? formatCurrency(Math.round(totalPrice * .85)*1000000) : formatCurrency(Math.round(totalPrice * .9)*1000000)}
                                <span className=" text-sm"> تومان</span>
                            </h3>
                        </div>}
                    </div>
                    <div className="grid grid-cols-2 items-center justify-between gap-20">
                        {currentStep === 0 ? (
                            <Button
                                onClick={onCancel}
                                size="lg"
                                className="flex-1 bg-foreground/5 text-subtext"
                            >
                                <ChevronRight className="h-5 w-5" />
                                تغییر پلن
                            </Button>
                        ) : (
                            <Button
                                onClick={handlePrevious}
                                disabled={currentStep === 0}
                                size="lg"
                                className="flex-1 bg-foreground/5 text-subtext"
                            >
                                <ChevronRight className="h-5 w-5" />
                                مرحله قبل
                            </Button>
                        )}

                        {currentStep === customFeatures.length - 1 ? (
                            <Button
                                onClick={onComplete}
                                size="lg"
                                className="flex-1"
                            >
                                تکمیل سفارش
                                <Check className="h-5 w-5" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                size="lg"
                                className="flex-1"
                            >
                                مرحله بعد
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                        )}
                    </div>
                </Card>
            </div>

            <div className="space-y-4">
                <div className="px-4">
                    <Label className="text-xl font-[potk] text-primary">
                        {currentFeature.title}
                    </Label>
                </div>

                <RadioGroup
                    dir="rtl"
                    value={
                        selectedFeatures[currentFeature.id] ||
                        currentFeature.options[0].id
                    }
                    onValueChange={(value) =>
                        handleFeatureChange(currentFeature.id, value)
                    }
                    className="space-y-2"
                >
                    {currentFeature.options.map((option) => (
                        <Card
                            color="background"
                            key={option.id}
                            className="flex items-center justify-between p-4 bg-background hover:bg-primary/10  transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    value={option.id}
                                    id={`${currentFeature.id}-${option.id}`}
                                />
                                <Label
                                    htmlFor={`${currentFeature.id}-${option.id}`}
                                    className="text-base"
                                >
                                    {option.label}
                                </Label>
                            </div>
                            <span
                                className={`text-sm font-semibold text-primary w-1/4 text-left`}
                            >
                                {option.price > 0
                                    ? `${formatCurrency(
                                          option.price * 1000000
                                      )} ت`
                                    : "رایگان"}
                            </span>
                        </Card>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
