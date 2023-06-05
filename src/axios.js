import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    withCredentials:true
});

// we use axiosPrivate to add interceptors when our access token expires we send our refresh token
//and get new access token and we are going to retry the previous 403/forbidden request with the new access token

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    withCredentials:true
})

// axios for content type multipart/form-data

export const axiosPrivateImage = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type": "multipart/form-data",
        "Accept": "application/json",
    },
    withCredentials:true
})

