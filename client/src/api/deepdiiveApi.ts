import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default axios.create({
    baseURL: baseUrl,
    // local
    // baseURL: "http://localhost:8080/api"
    // production
    // baseURL: "https://deepdiiveapi-staging.onrender.com"
    // staging
    // baseURL: "https://deepdiiveapi-staging.herokuapp.com/api"
})