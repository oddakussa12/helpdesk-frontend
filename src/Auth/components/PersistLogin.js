import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from "../../hooks/useAuth";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }
        !auth?.access_token ? verifyRefreshToken() : setIsLoading(false);
    }, [])

    useEffect(() => {
    }, [isLoading])

    return (
        <>
            {isLoading ?
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <span className="loading loading-ring loading-lg text-secondary"></span>
                        </div>
                    </div>
                </div>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin