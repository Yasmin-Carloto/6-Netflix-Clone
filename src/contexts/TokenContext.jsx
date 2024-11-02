import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

export const TokenContext = createContext()
export const TokenProvider = (({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("netflix-access-token") || "")
    const [rememberMe, setRememberMe] = useState(() => localStorage.getItem("remember-me-netfix") || "false")

    useEffect(() => {
        if(token){
            localStorage.setItem("netflix-access-token", token)
        } else {
            localStorage.removeItem("netflix-access-token")
        }
    }, [token])

    useEffect(() => {
        localStorage.setItem("remember-me-netfix", rememberMe);
    }, [rememberMe])

    useEffect(() => {
        const handleBeforeUnload = () => {
            if (!JSON.parse(rememberMe)) {
                setToken("")
            }
        }

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        }
    }, [rememberMe])

    return (
        <TokenContext.Provider value={{ token, setToken, rememberMe, setRememberMe}}>
            {children}
        </TokenContext.Provider>
    )
})

export const useToken = () => {
    return useContext(TokenContext)
}

TokenProvider.propTypes = {
    children: PropTypes.node.isRequired
}