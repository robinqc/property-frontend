"use client"

import { Search, User, Menu, Home, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function Header() {
  const [priceRange, setPriceRange] = useState([50000, 500000])

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground font-[Cinzel]">MILLION</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full flex">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search properties by name, location, neighborhood..."
                  className="pl-10 pr-4 w-full bg-muted/50 border-border focus:bg-background rounded-r-none"
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
                          max={1000000}
                          min={50000}
                          step={10000}
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

          {/* Navigation & Account */}
          <div className="flex items-center space-x-4">

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
