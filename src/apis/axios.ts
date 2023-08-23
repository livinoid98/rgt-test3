import axios from "axios";

const SERVER_URL = "http://211.44.24.167:9002/codingTest";

export default axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
});