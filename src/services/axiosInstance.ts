import Axios from "axios";

const axios = Axios.create({});

axios.defaults.timeout = 120000; // Milliseconds

export default axios;
