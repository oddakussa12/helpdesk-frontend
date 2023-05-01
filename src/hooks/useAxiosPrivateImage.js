import { axiosPrivateImage } from "../axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivateImage = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivateImage.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.access_token}`;
                }

                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivateImage.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                // 403 is forbidden code when our access token expires for a request
                // we only want to retry once to prevent endless loop, that is why we use && !prevRequest?.sent
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivateImage(prevRequest);
                }

                return Promise.reject(error);
            }
        );

        // clean up function
        return () => {
            axiosPrivateImage.interceptors.request.eject(requestIntercept);
            axiosPrivateImage.interceptors.response.eject(responseIntercept);
        }

    }, [auth, refresh])

    return axiosPrivateImage;
}

export default useAxiosPrivateImage