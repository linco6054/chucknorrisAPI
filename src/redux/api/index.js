import axios from "axios";
const API = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
});

export const getCategories = () => API.get("/categories");

export const getJokes = (cat) => API.get(`random?category=${cat}`);
