import { PropertyCard } from "./property-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Property {
  id: string
  name: string
  location: string
  price: string
  rating: number
  image: string
  isFavorite?: boolean
}

interface PropertySectionProps {
  title: string
  properties: Property[]
}

export function PropertySection({ title, properties }: PropertySectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 overflow-x-auto pb-4">
          {properties.map((property) => (
            <div key={property.id} className="min-w-[280px]">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
