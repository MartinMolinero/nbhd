"use client"

import { useRouter } from "next/navigation";
import React, {useContext, useEffect, useState} from "react";
import GENERAL_URLS from "@constants/urls";

const AuthContext = React.createContext({})

export const AuthenticationProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const isAuthenticated = !!user
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const logout = () => {
        setUser(null)
        setIsLoading(false)
        router.push(GENERAL_URLS.HOME.route)
    }

    const authenticate = () => {
        console.log('AUTHENTICATING')
        setIsLoading(true)
        // TODO - make api request to authenticate
        setUser({
            name: 'Martin',
            lastName: 'Molinero',
            email: 'martin@me.com',
            isAdmin: false
        })
        
        setIsLoading(false)
    }

    useEffect(() => {
        authenticate()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                authenticate: authenticate,
                logout: logout,
                isLoading: isLoading,
                isAuthenticated: !!user,
                token: user?.name // TODO - change value
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
export const ProtectRoute = ({children}) => {
    const {isAuthenticated, isLoading} = useAuth();
    const notAuthenticatedOrLoggingIn = (!isAuthenticated && window.location.pathname !== GENERAL_URLS.LOGIN.route)
    if (isLoading ||notAuthenticatedOrLoggingIn ) {
        console.log('PROTECTING')
        return <h1>Protecting Route</h1>
    }
    return children
}