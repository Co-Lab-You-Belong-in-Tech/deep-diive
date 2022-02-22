import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_URL;
console.log(BaseUrl)

export default axios.create({
    // baseURL: "https://deepdiiveapi.herokuapp.com/api"
    baseURL: BaseUrl
})