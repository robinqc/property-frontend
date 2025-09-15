"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface PropertyCardProps {
  idProperty: string
  name: string
  address: string
  price: string
  rating: number
  image: string
  isFavorite?: boolean
}

export function PropertyCard({ idProperty, name, address, price, rating, image, isFavorite = false }: PropertyCardProps) {
  return (
    <Link href={`/properties/${idProperty}`} className="block">
    <Card className="group overflow-hidden border-none shadow-none hover:shadow-none transition-all duration-300 pt-0 cursor-pointer bg-transparent">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={image || "https://picsum.photos/200/300"}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90",
            isFavorite && "text-red-500",
          )}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
        </Button>
        <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="text-xs font-medium text-foreground">New</span>
        </div>
      </div>

      <CardContent className="px-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">{name}</h3>
            <div className="flex items-center space-x-1">
              
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-foreground">{3.2}</span>
            </div>
          </div>

          <p className="text-md text-muted-foreground line-clamp-1 font-[Cinzel]">{address}</p>

          <div>
            <p className="text-md font-medium text-foreground">
              <span className="text-muted-foreground font-[Cinzel]">$ </span>
              <span className="text-foreground font-[Cinzel]">{price?.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}
