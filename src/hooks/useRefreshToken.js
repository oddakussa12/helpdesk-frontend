import httpCommon from '../axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth} = useAuth();

    const refresh = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const roles = JSON.parse(localStorage.getItem('roles'));

        const response = await httpCommon.post('/auth/refresh-token');
        const access_token = response?.data?.access_token;
        localStorage.setItem('access_token', JSON.stringify(access_token));
        // set the global auth context
        setAuth({ access_token, user, roles });

        return access_token;  
    }
    return refresh;
};

export default useRefreshToken
