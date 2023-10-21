import { baseUrl } from "../Api/baseUrl";

const useInsertData = async (url, params) => {

    const res = await baseUrl.post(url, params);
    return res;
}

const useInsertImage = async (url, parmas) => {
    const config = {
        headers:{"Content-Type":"multipart/form-data"}
    }
    
    const res = await baseUrl.post(url, parmas ,config);

    return res;
}

export {useInsertData, useInsertImage};