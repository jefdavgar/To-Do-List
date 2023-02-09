import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/http://localhost:3030";
export default axios.create({
    baseURL: proxy + "http://localhost:3030"
});