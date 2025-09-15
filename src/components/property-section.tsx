"use client"
import { PropertyCard } from "./property-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Grid3X3, List } from "lucide-react"
import PropertyListItem from "./property-list-item"
import { useState } from "react"

interface PropertySectionProps {
  title: string
  properties: Property[]
}

export function PropertySection({ title, properties }: PropertySectionProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <div className="flex items-center space-x-2  hidden sm:hidden md:inline-flex">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 overflow-x-auto pb-4">
            {properties.map((property) => (
              <div key={property.idProperty}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {properties.map((property) => (
              <div key={property.idProperty}>
                <PropertyListItem property={property} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
