interface PropertyImage {
    ifProperty: string;
    file: string;
}

interface Property {
    idProperty: string;
    name: string;
    price: number;
    idOwner: string;
    address: string;
    images: PropertyImage[];
    bedrooms: number;
    bathrooms: number;
    garageSpaces: number;
    overview: string;
    livableArea: number;
    totalArea: number;
    type: string;
    area: string;
    city: string;
    state: string;
    zipCode: string;
    year: number;
}