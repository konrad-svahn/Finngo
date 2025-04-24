import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5001", headers: { 'content-Type': 'multipart/form-data' }});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const get = () => API.get()
 