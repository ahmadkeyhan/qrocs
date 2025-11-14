'use client'

import { useState, useMemo } from "react";
import { customFeatures, INITIAL_PRICE, Feature, FeatureOption } from "@/lib/data/customFeatures";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radioGroup";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface CustomOrderBuilderProps {
  selectedFeatures: Record<string, string>;
  onFeaturesChange: (features: Record<string, string>) => void;
  onPriceChange: (price: number) => void;
}

export default function CustomOrderBuilder({ 
  selectedFeatures, 
  onFeaturesChange,
  onPriceChange 
}: CustomOrderBuilderProps) {
  
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
  useMemo(() => {
    onPriceChange(totalPrice);
  }, [totalPrice, onPriceChange]);

  const handleFeatureChange = (featureId: string, optionId: string) => {
    const updatedFeatures = {
      ...selectedFeatures,
      [featureId]: optionId,
    };
    onFeaturesChange(updatedFeatures);
  };

  return (
    <div className="space-y-6">
      {/* Price Display */}
      <Card className="sticky top-4 z-10 p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">قیمت کل سفارش:</p>
            <p className="text-3xl font-bold text-primary">
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
      </Card>

      {/* Features Selection */}
      <div className="space-y-6">
        {customFeatures.map((feature, index) => (
          <Card key={feature.id} className="p-6 hover:border-primary/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {formatCurrency(index + 1)}
                </div>
                <Label className="text-xl font-bold text-primary">
                  {feature.title}
                </Label>
              </div>
              
              <RadioGroup
                dir="rtl"
                value={selectedFeatures[feature.id] || feature.options[0].id}
                onValueChange={(value) => handleFeatureChange(feature.id, value)}
                className="space-y-3"
              >
                {feature.options.map((option) => (
                  <div 
                    key={option.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={option.id} id={`${feature.id}-${option.id}`} />
                      <Label 
                        htmlFor={`${feature.id}-${option.id}`}
                        className="text-base font-medium cursor-pointer"
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
        ))}
      </div>
    </div>
  );
}
