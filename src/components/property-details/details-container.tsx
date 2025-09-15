import { InfoLabel } from "./info-label";

interface Props {
    property: Property;
}

export default function DetailsContainer({property}: Props) {
    return (
        <div className="flex justify-evenly gap-6 py-10 border overflow-wrap flex-wrap rounded-lg">
            <InfoLabel label="Bedrooms" value={property?.bedrooms || 0} />
            <InfoLabel label="Bathrooms" value={property?.bathrooms || 0} />
            <InfoLabel label="Garage Spaces" value={property?.garageSpaces || 0} />
            <InfoLabel label="Livable Area (sq ft)" value={property?.livableArea || 0} />
            <InfoLabel label="Total Area (sq ft)" value={property?.totalArea || 0} />
            <InfoLabel label="Year Built" value={property?.year || 'N/A'} />
            <InfoLabel label="Type" value={property?.type || 'N/A'} />
        </div>
    )
}