import { PropertySection } from "@/components/property-section";
import { getProperties } from "@/api/properties";
import { Unlink } from "lucide-react";

interface Props {
    searchParams?: Promise<{
        searchTerm?: string;
    }>
}

export default async function PropertiesPage(props: Props) {
    const searchParams  = await props.searchParams;
    const properties = await getProperties(searchParams);
    const hasError = !properties || properties.length === 0;
    return (
        <div className="pt-10 bg-background flex-grow-1">
            {hasError ? (
                <div className="flex flex-col items-center text-red-500 py-10">
                    <Unlink size={40} className="mb-4" />
                    <div>
                        Sorry, we couldn't load properties at this time. Please try again later.
                    </div>
                </div>
            ) : (
                <PropertySection title="Featured Properties" properties={properties} />
            )}
        </div>
    )
}

