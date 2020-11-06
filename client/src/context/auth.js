import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = await fetch('http://localhost:3000/api/me')
            if (token) {
                const {data: user} = await token.json()
                setUser(user)
            }
         
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const logout = () => {
        Cookies.remove('auth')
        setUser(null)
        Router.replace('/')
      }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)