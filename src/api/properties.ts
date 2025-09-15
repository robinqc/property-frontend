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

