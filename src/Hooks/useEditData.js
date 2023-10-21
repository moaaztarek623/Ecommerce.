import { baseUrl } from "../Api/baseUrl";

const useEditDataWithImage = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }

    const res = await baseUrl.put(url, params, config);

    console.log(res);

    return res;
}

const useEditData = async (url, params) => {
    const res = await baseUrl.put(url, params);

    console.log(res);

    return res;
}

export {useEditDataWithImage, useEditData};