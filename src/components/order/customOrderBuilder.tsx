'use client'

import { useState, useMemo, useEffect } from "react";
import { customFeatures, INITIAL_PRICE, Feature, FeatureOption } from "@/lib/data/customFeatures";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface CustomOrderBuilderProps {
  selectedFeatures: Record<string, string>;
  onFeaturesChange: (features: Record<string, string>) => void;
  onPriceChange: (price: number) => void;
  onComplete: () => void;
}

export default function CustomOrderBuilder({ 
  selectedFeatures, 
  onFeaturesChange,
  onPriceChange,
  onComplete
}: CustomOrderBuilderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  // Calculate total price based on selected features
  const totalPrice = useMemo(() => {
    let price = INITIAL_PRICE;
    
    Object.entries(selectedFeatures).forEach(([featureId, optionId]) => {
      const feature = customFeatures.find(f => f.id === featureId);
      if (feature) {
        const option = feature.options.find(o => o.id === optionId);
        if (option) {
          price += option.price;
        }
      }
    });
    
    return price;
  }, [selectedFeatures]);

  // Update parent component when price changes
  useEffect(() => {
    onPriceChange(totalPrice);
  }, [totalPrice, onPriceChange]);

  const handleFeatureChange = (featureId: string, optionId: string) => {
    const updatedFeatures = {
      ...selectedFeatures,
      [featureId]: optionId,
    };
    onFeaturesChange(updatedFeatures);
  };

  const handleNext = () => {
    if (currentStep < customFeatures.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectionsCount = useMemo(() => {
    return Object.entries(selectedFeatures).filter(([featureId, optionId]) => {
      const feature = customFeatures.find(f => f.id === featureId);
      if (feature) {
        const option = feature.options.find(o => o.id === optionId);
        return option && option.price > 0;
      }
      return false;
    }).length;
  }, [selectedFeatures]);

  const currentFeature = customFeatures[currentStep];

  return (
    <div className="space-y-6 w-full max-w-2xl">
      <Card className="sticky top-4 z-10 p-4 bg-background/95 backdrop-blur-sm border-primary/20">
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-primary">
                مرحله {formatCurrency(currentStep + 1)} از {formatCurrency(customFeatures.length)}
              </span>
              <span className="text-muted-foreground">
                {selectionsCount} انتخاب فعال
              </span>
            </div>
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute top-0 right-0 h-full bg-gradient-to-l from-primary to-primary/70 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / customFeatures.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Price Display */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <p className="text-sm text-muted-foreground">قیمت کل سفارش:</p>
              <p className="text-2xl font-bold text-primary">
                {formatCurrency(totalPrice)} میلیون تومان
              </p>
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">قیمت پایه: {formatCurrency(INITIAL_PRICE)} م.ت</p>
              <p className="text-xs text-muted-foreground">
                افزوده‌ها: {formatCurrency(totalPrice - INITIAL_PRICE)} م.ت
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 border-primary/40">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
              {formatCurrency(currentStep + 1)}
            </div>
            <Label className="text-2xl font-bold text-primary">
              {currentFeature.title}
            </Label>
          </div>
          
          <RadioGroup
            dir="rtl"
            value={selectedFeatures[currentFeature.id] || currentFeature.options[0].id}
            onValueChange={(value) => handleFeatureChange(currentFeature.id, value)}
            className="space-y-3"
          >
            {currentFeature.options.map((option) => (
              <div 
                key={option.id}
                className="flex items-center justify-between p-4 rounded-lg border-2 hover:bg-accent/50 hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value={option.id} id={`${currentFeature.id}-${option.id}`} />
                  <Label 
                    htmlFor={`${currentFeature.id}-${option.id}`}
                    className="text-lg font-medium cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
                <span className={`text-sm font-semibold ${option.price > 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {option.price > 0 ? `+ ${formatCurrency(option.price)} م.ت` : 'رایگان'}
                </span>
              </div>
            ))}
          </RadioGroup>
        </div>
      </Card>

      <div className="flex items-center justify-between gap-4">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          <ChevronRight className="ml-2 h-5 w-5" />
          مرحله قبل
        </Button>
        
        {currentStep === customFeatures.length - 1 ? (
          <Button
            onClick={onComplete}
            size="lg"
            className="flex-1 bg-primary"
          >
            ادامه به فرم اطلاعات
            <Check className="mr-2 h-5 w-5" />
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            size="lg"
            className="flex-1"
          >
            مرحله بعد
            <ChevronLeft className="mr-2 h-5 w-5" />
          </Button>
        )}
      </div>

      {currentStep === customFeatures.length - 1 && (
        <Card className="p-4 bg-primary/10 border-primary/30">
          <div className="flex items-center gap-3 text-primary">
            <Check className="h-5 w-5" />
            <p className="font-semibold">
              شما همه مراحل را طی کرده‌اید! برای ادامه روی دکمه بالا کلیک کنید.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
