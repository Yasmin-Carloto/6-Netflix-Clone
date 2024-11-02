import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

export const TokenContext = createContext()
export const TokenProvider = (({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("netflix-access-token") || "")
    const [rememberMe, setRememberMe] = useState(false)

    useEffect(() => {
        if(token){
            localStorage.setItem("netflix-access-token", token)
        } else {
            localStorage.removeItem("netflix-access-token")
        }

       function handleUncheckedBox() {
            localStorage.removeItem("netflix-access-token")
       }

       if(!rememberMe){
            window.addEventListener("beforeunload", handleUncheckedBox)

            return () => {
                window.removeEventListener("beforeunload", handleUncheckedBox)
            }
       }
    }, [token, rememberMe])

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