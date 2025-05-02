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

