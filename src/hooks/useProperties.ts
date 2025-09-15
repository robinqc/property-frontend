import { useQuery } from "@tanstack/react-query";
import api from "@/api/api";
interface Property {
    id: string;
    name: string;
    price: number;
    idOwner: string;
    address: string;
};


export const fetchProperties = async (searchTerm?: string): Promise<Property[]> => {
    const response = await api.get("/property", {
        params: searchTerm ? { search: searchTerm } : {},
    });
    return response.data;
}


export const useProperties = (searchTerm?: string) => {
    return useQuery({
        queryKey: ['properties', searchTerm],
        queryFn: () => fetchProperties(searchTerm),
    });
};
