import axios from "axios";
console.log("BASE_URL:", import.meta.env.VITE_BASE_URL);
console.log("TOKEN:", import.meta.env.VITE_TMDB_TOKEN);


import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default api;