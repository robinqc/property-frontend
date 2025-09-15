import { PropertySection } from "@/components/property-section";
import { getProperties } from "@/api/properties";
import { QueryClient } from "@tanstack/react-query";

interface Props {
    searchParams?: Promise<{
        searchTerm?: string;
    }>
}

export default async function PropertiesPage(props: Props) {
    const searchParams  = await props.searchParams;
    const properties = await getProperties(searchParams);
    return (
        <div className="pt-10 bg-background flex-grow-1">
            <PropertySection title="Featured Properties" properties={properties} />
        </div>
    )
}

