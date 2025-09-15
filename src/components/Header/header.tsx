"use client"

import { SearchBar } from "@/components/search-bar/search-bar"
import Logo from "./logo"
import RightButtons from "./right-buttons"

export function Header() {

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <SearchBar />
          <RightButtons />
        </div>
      </div>
    </header>
  )
}
