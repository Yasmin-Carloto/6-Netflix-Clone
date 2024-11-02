import { Navigate } from "react-router-dom";
import { useToken } from "../../contexts/TokenContext";
import PropTypes from "prop-types";

export function RedirectRoute({children}) {
    const {token} = useToken()

    if(token){
        return <Navigate to="/" replace />
    }
    return children
}

RedirectRoute.propTypes = {
    children: PropTypes.node.isRequired,
}