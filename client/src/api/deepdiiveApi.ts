import axios from "axios";

// const BaseUrl = process.env.REACT_APP_BASE_URL;
// console.log(BaseUrl)

export default axios.create({
    // local
    baseURL: "http://localhost:8080/api"
    // production
    // baseURL: "https://deepdiiveapi.herokuapp.com/api"
    // staging
    // baseURL: "https://deepdiiveapi-staging.herokuapp.com/api"
})