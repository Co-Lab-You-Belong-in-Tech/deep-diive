import axios from "axios";

export default axios.create({
    // baseURL: "https://deepdiiveapi.herokuapp.com/api"
    baseURL: "http://localhost:8080/api"
})