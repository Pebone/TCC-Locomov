import axios from "axios";

const api = axios.create({
  baseURL: "https://461c-2804-14c-de90-85f6-e555-be91-4301-f43c.sa.ngrok.io/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, HEAD, OPTIONS",
  },
});

export default api;
