import axios from "axios";

// const logout = () => {
//     sessionStorage.clear();
// };

const api = axios.create({
    baseURL: "https://locomov-tcc.herokuapp.com/",
    headers: {"Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, HEAD, OPTIONS"}
});

export default api;