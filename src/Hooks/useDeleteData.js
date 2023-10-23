import { baseUrl } from "../Api/baseUrl";

const useDeleteData = async (url, params) => {

    const config = {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }

    const res = await baseUrl.delete(url, params, config);

    return res.data;
}

export default useDeleteData