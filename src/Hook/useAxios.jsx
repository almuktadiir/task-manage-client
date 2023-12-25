import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-manage-server-azure.vercel.app/'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;