import axios from "axios";

// const { BASE_URL } = process.env;

export default axios.create({
    baseURL: "https://deepdiiveapi.herokuapp.com/api"
    // baseURL: `${BASE_URL}`
    // baseURL: "http://localhost:8080/api"
})