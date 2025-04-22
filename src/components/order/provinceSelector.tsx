"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandList, CommandInput } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
// import {cities} from "@/components/order/cities"

// List of povinces
// const provinces = cities.filter((city) => city.type === "province")

interface ProvinceSelectorProps {
    provinces: string[]
  value: string
  onChange: (value: string) => void
}

export default function ProvinceSelector({ provinces, value, onChange }: ProvinceSelectorProps) {
  const [open, setOpen] = useState(false)
  const [selectedProvince, setSelectedProvince] = useState<string>(value || "")

  useEffect(() => {
    if (value) {
      setSelectedProvince(value)
    }
  }, [value])

  const handleSelect = (provinceName: string) => {
    if (typeof(provinceName) === "string") {
      setSelectedProvince(provinceName)
      onChange(provinceName)
    } 
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="relative w-full flex-row justify-between bg-primary/10 border-0">
          <div className="flex items-start px-2 gap-2">
            {selectedProvince ? (
              <>
                <span>{selectedProvince}</span>
              </>
            ) : (
              "انتخاب استان"
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
            <CommandInput placeholder="جست و جو" />
          <CommandList>
            <CommandGroup className=" overflow-y-auto">
              {/* <div
                className="flex items-center gap-2 px-2 py-1.5 text-base rounded-sm cursor-pointer hover:bg-accent hover:text-accent-foreground"
                onClick={() => handleSelect("")}
              >
                <Check className={cn("h-4 w-4", !selectedIcon ? "opacity-100" : "opacity-0")} />
                <span>بدون آیکون</span>
              </div> */}
              {provinces.map((provinceName) => {
                return (
                    <div
                    key={provinceName}
                    className="flex items-center gap-2 px-2 py-1.5 text-base rounded-sm cursor-pointer hover:bg-accent hover:text-accent-foreground"
                    onClick={() => handleSelect(provinceName)}
                    >
                    <Check className={cn("h-4 w-4", selectedProvince === provinceName ? "opacity-100" : "opacity-0")} />
                    <span>{provinceName}</span>
                    </div>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

