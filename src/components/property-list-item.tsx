import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
    property: Property;
}

export default function PropertyListItem({ property }: Props) {
    return (
        <div
            className="flex gap-6 p-4 rounded-xl transition-all duration-200 bg-card cursor-pointer block group"
            id={property.idProperty}
            data-testid="property-list-item"
            onClick={() => {
                redirect(`/properties/${property.idProperty}`);
            }}
        >
            <div className="relative w-80 h-60 flex-shrink-0 rounded-lg overflow-hidden">
            <img
                src={property.images?.[0]?.file || "https://picsum.photos/200/300"}
                alt={property.name}
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
            />
            </div>
            <div className="flex-1 flex flex-col justify-between py-2">
            <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-emerald-600 transition-colors">
                {property.name}
                </h3>
                <div className="flex items-center text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.address}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {property.overview.slice(0, 350)}...
                </p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">4.3</span>
                </div>
                <div className="text-right">
                <span className="text-lg font-bold text-foreground">$ {property.price?.toLocaleString()}</span>
                </div>
            </div>
            </div>
        </div>
    );
}