import { PropertySection } from "@/components/property-section";
import { fetchProperties } from "@/hooks/useProperties";
import { QueryClient } from "@tanstack/react-query";


export default async function PropertiesPage() {
    const properties = await fetchProperties();
    return (
        <div className="pt-10 bg-background min-h-screen">
            <PropertySection title="Featured Properties" properties={properties} />
        </div>
    )
}

