"use client"
import { User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react";

interface Props {
    isMobileSearchOpen: boolean;
    setIsMobileSearchOpen: (isOpen: boolean) => void;
}

export default function RightButtons({
    isMobileSearchOpen,
    setIsMobileSearchOpen
}: Props) {
    return (
        <div className="flex items-center space-x-4">

            <Button variant="ghost" size="icon">
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden`}
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              {isMobileSearchOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
    )
}