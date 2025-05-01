import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

const API = axios.create({baseURL: "http://localhost:5001"});

API.interceptors.request.use(async (req) => {
    auth = await AsyncStorage.getItem("authKey")
    console.log(auth)
    if (auth != undefined && auth != null) {
        req.headers.Authorization = `Bearer ${
            auth
        }`;
    }
    return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);

export const createTour = (tourData) => API.post("/tour", tourData);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = (updatedTourData, id) => API.patch(`/tour/${id}`, updatedTourData);
export const getTour = (id) => API.get(`/tour/${id}`);
