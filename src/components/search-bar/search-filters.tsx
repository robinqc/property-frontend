"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { SlidersHorizontal } from "lucide-react"
import {useDebouncedCallback} from 'use-debounce'
import { usePathname, useRouter } from "next/navigation"

const DEFAULT_MIN_PRICE = 1000000;
const DEFAULT_MAX_PRICE = 30000000;

export default function SearchFilters() {
    const [priceRange, setPriceRange] = useState([DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE])
    const { replace } = useRouter();
    const pathname = usePathname();
    const handlePriceRangeChange = (value?: number[]) => {
        console.log("Applying price range filter:", value);
        const params = new URLSearchParams(window.location.search);
        if (value) {
            params.set("minPrice", value[0].toString());
            params.set("maxPrice", value[1].toString());
        } else {
            params.delete("minPrice");
            params.delete("maxPrice");
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-l-none border-l-0 bg-muted/50 hover:bg-background"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Price Range (USD)</Label>
                      <div className="px-3">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={300000000}
                          min={1000000}
                          step={10000000}
                          className="w-full"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => {
                        handlePriceRangeChange();
                        setPriceRange([DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE]);
                      }}>
                        Reset
                      </Button>
                      <Button size="sm" onClick={() => handlePriceRangeChange(priceRange)}>Apply Filters</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
    )
}