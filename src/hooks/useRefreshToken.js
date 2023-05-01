import httpCommon from '../axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        // update your access token
        const response = await httpCommon.post('/company/refresh');
        const roles = [1000, 2000, 3000];
        const access_token = response?.data?.data?.access_token;
        const user = response?.data?.data?.user;
        const is_admin = response?.data?.data?.user?.is_admin;
        // set the global auth context
        setAuth({ access_token, user, roles, is_admin });

        return access_token;
    }
    return refresh;
};

export default useRefreshToken
