import { PropertySection } from "@/components/property-section";
import { getProperties } from "@/api/properties";
import { ErrorMessage } from "@/components/ui/error-message";

interface Props {
    searchParams?: Promise<{
        searchTerm?: string;
    }>
}

export default async function PropertiesPage(props: Props) {
    try {
        const searchParams  = await props.searchParams;
        const properties = await getProperties(searchParams);
        const hasError = !properties || properties.length === 0;
        return (
            <div className="pt-10 bg-background flex-grow-1">
                
                <PropertySection title="Featured Properties" properties={properties} />
                
            </div>
        )
    } catch (error) {
        return (
            <div className="pt-10 bg-background flex-grow-1">
                <ErrorMessage />
            </div>
        );
    }
}

