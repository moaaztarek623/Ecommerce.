import { baseUrl } from "../Api/baseUrl";

const useGetData = async (url, params) => {

    const config = {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

    const res = await baseUrl.get(url, params, config);

    return res.data;
}

export default useGetData