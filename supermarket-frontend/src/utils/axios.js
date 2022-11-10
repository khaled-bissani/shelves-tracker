import axios from 'axios';

axios.defaults.headers.authorization = "Bearer " + token;
axios.defaults.baseURL = "http://localhost:3000";