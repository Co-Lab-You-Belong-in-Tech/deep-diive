import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default axios.create({
    baseURL: baseUrl,
})