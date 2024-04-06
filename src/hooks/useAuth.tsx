import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const useAuth = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const AuthRequired = () => {

        const userId = localStorage.getItem("userId");

        useEffect(() => {
            if (location.pathname === '/auth') return;

            if (!userId) {
                navigate('/auth', { replace: true })
            }
        }, [location]);

        return <></>;
    }

    const logout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate('/auth', { replace: true })
    }

    return { logout, AuthRequired }
}



export default useAuth;