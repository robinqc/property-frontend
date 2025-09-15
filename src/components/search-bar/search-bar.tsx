"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import SearchFilters from "./search-filters"

export function SearchBar() {
    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const [internalSearchTerm, setInternalSearchTerm] = useState(searchParams.get('searchTerm')?.toString() || "");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(internalSearchTerm);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(internalSearchTerm);
        }, 300);
        return () => {
            clearTimeout(handler);
        };
    }, [internalSearchTerm]);
    
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (debouncedSearchTerm) {
            params.set("searchTerm", debouncedSearchTerm);
        } else {
            params.delete("searchTerm");
        }
        replace(`${pathname}?${params.toString()}`);
    }, [debouncedSearchTerm]);
    return (
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full flex">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search properties by name, location, neighborhood..."
              className="pl-10 pr-4 w-full bg-muted/50 border-border focus:bg-background rounded-r-none"
              value={internalSearchTerm}
              defaultValue={searchParams.get('searchTerm')?.toString()}
              onChange={(e) => setInternalSearchTerm(e.target.value)}
            />
            </div>
            <SearchFilters />
          </div>
      </div>
    )
}