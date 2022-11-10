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

const postApi = async(url, data) => {
    try{
        return await axios.post(url, data);
    }catch(error){
        console.log("Error from POST API", error);
    }
}

export  {getApi};