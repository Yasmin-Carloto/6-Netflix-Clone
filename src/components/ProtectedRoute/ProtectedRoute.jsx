import { Navigate } from "react-router-dom";
import { useToken } from "../../contexts/TokenContext";
import PropTypes from "prop-types";

export function ProtectedRoute({ children }) {
    const {token} = useToken()

    if(!token){
        return <Navigate to="/login" replace />
    }
    return children
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
