import axios from "axios";

const baseURL= 'https://www.breakingbadapi.com/api/';
const breakingBadApi = axios.create({baseURL})

export default breakingBadApi;