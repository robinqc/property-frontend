import api from "./api"

export const getPropertyById = async (id: string): Promise<Property | null> => {
    try {
        const response = await api.get(`/property/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching property:", error);
        return null;
    }
}

export const getProperties = async (searchParams?: { [key: string]: string | string[] | undefined }): Promise<Property[]> => {
    try {
        console.log("Fetching properties with searchParams:", searchParams);
        const response = await api.get("/property", {
            params: searchParams,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching properties:", error);
        return [];
    }
}

