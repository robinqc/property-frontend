import React from "react";
import { InfoLabel } from "./info-label";
import { icons } from "./icons";

interface Props {
    property: Property;
}

export default function DetailsContainer({property}: Props) {
    return (
        <div
            className="grid py-10 border-y rounded-lg gap-6 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 justify-items-center items-center bg-slate-50/30"
        >
            <InfoLabel label="Bedrooms" value={property?.bedrooms || 0} icon={icons["Bedrooms"] ? React.createElement(icons["Bedrooms"], { size: 22 }) : null} />
            <InfoLabel label="Bathrooms" value={property?.bathrooms || 0} icon={icons["Bathrooms"] ? React.createElement(icons["Bathrooms"], { size: 22 }) : null} />
            <InfoLabel label="Garage Spaces" value={property?.garageSpaces || 0} icon={icons["Garage Spaces"] ? React.createElement(icons["Garage Spaces"], { size: 22 }) : null} />
            <InfoLabel label="Livable Area" value={property?.livableArea || 0} icon={icons["Livable Area"] ? React.createElement(icons["Livable Area"], { size: 22 }) : null} />
            <InfoLabel label="Total Area" value={property?.totalArea || 0} icon={icons["Total Area"] ? React.createElement(icons["Total Area"], { size: 22 }) : null} />
            <InfoLabel label="Year Built" value={property?.year || 'N/A'} icon={icons["Year Built"] ? React.createElement(icons["Year Built"], { size: 22 }) : null} />
            <InfoLabel label="Type" value={property?.type || 'N/A'} icon={icons["Type"] ? React.createElement(icons["Type"], { size: 22 }) : null} />
        </div>
    )
}