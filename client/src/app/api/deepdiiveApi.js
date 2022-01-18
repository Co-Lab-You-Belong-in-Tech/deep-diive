import axios from "axios";

export default axios.create({
    baseURL: "https://deepdiiveapi.herokuapp.com/api"
})