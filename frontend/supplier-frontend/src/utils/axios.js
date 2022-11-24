import axios from "axios";

const sendRequest = async ({ method = "GET", data = null, route = null }) => {
    if (!route) throw Error("URL Required");
    if (method === "GET") {
        const response = await axios.get(route);
        return response.data;
    }
    const response = await axios.request({
        url: route,
        method: method,
        data: data,
    });
    return response.data;
};

export default sendRequest;