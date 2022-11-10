import axios from 'axios';

axios.defaults.headers.authorization = "Bearer " + token;
axios.defaults.baseURL = "http://localhost:3000";

const getApi = async(url, data=null) => {
    try{
        return await axios.get(url, data);
    }catch(error){
        console.log("Error from GET API", error);
    }
}

export  {getApi};