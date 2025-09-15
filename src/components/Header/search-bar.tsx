"use client"

import { Search, User, Menu, Home, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useEffect, useState } from "react"
import useStateData from "@/hooks/useStateData"

export function SearchBar() {
    const {
        searchTerm,
        setSearchTerm,
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice
    } = useStateData();
    const priceRange = [minPrice || 50000, maxPrice || 500000];
    const setPriceRange = (range: [number, number]) => {
        setMinPrice?.(range[0]);
        setMaxPrice?.(range[1]);
    };
    const [_, setInternalSearchTerm] = useState(searchTerm || "");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(_);
    useEffect(() => {
        const handler = setTimeout(() => {
            console.log("Debounced search term to:", _);
            setDebouncedSearchTerm(_);
        }, 600); // 300ms debounce

        return () => {
            clearTimeout(handler);
        };
    }, [_]);
    useEffect(() => {
        console.log("Updating global searchTerm to:", debouncedSearchTerm);
        setSearchTerm?.(debouncedSearchTerm);
    }, [debouncedSearchTerm]);
    return <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full flex">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search properties by name, location, neighborhood..."
                  className="pl-10 pr-4 w-full bg-muted/50 border-border focus:bg-background rounded-r-none"
                value={_}
                onChange={(e) => setInternalSearchTerm(e.target.value)}
                />
              </div>
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
                      <Label className="text-sm font-medium">Price Range (COP per night)</Label>
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
                      <Button variant="outline" size="sm" onClick={() => setPriceRange([50000, 500000])}>
                        Reset
                      </Button>
                      <Button size="sm">Apply Filters</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
}