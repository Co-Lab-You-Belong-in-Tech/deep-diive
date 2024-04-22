import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// console.log(BaseUrl)

export default axios.create({
    // local
    // baseURL: "http://localhost:8080/api"
    // production
    baseURL: "https://deepdiiveapi-staging.onrender.com"
    // staging
    // baseURL: "https://deepdiiveapi-staging.herokuapp.com/api"
})