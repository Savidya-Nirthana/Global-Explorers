import API from "./aiosinstances";

const API_URL = "api/tour_packages";


export const getTour = async() => {
    const response = await API.get(`${API_URL}/get_data`)
    return response;
}  

