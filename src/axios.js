import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type": "application/json",
        // "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9jb21wYW55L2xvZ2luIiwiaWF0IjoxNjgxMTI2NjkzLCJleHAiOjE2ODEyMTMwOTMsIm5iZiI6MTY4MTEyNjY5MywianRpIjoiYW9aQWVYeHJjaE9ISXlraSIsInN1YiI6IjMiLCJwcnYiOiJkNTU3ODNhMjU3MTI1YWU1NWUxMzhmNjk2NGQ4MjdiZjQzOGFjYzgxIn0.TbZA2Q8DMRfLms3VKJGM1YATO6qiU3f42HhTRmqn0nw",
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

