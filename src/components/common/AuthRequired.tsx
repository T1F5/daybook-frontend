import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthRequired = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (location.pathname === '/auth') return;

        if (!userId) {
            navigate('/auth', { replace: true })
        }
    }, [location]);

    return <></>
}

export default AuthRequired;