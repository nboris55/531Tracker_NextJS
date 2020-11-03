import React, { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
                const res = await fetch('http://localhost:3000/api/me', {
                    headers : {
                        'Accept' : 'application/json'
                    }
                })
                const user = await res.json()
                if (user) setUser(user.data);
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    // const login = async (email, password) => {
    //     const { data: token } = await api.post('auth/login', { email, password })
    //     if (token) {
    //         console.log("Got token")
    //         Cookies.set('token', token, { expires: 60 })
    //         api.defaults.headers.Authorization = `Bearer ${token.token}`
    //         const { data: user } = await api.get('users/me')
    //         setUser(user)
    //         console.log("Got user", user)
    //     }
    // }

    // const logout = (email, password) => {
    //     Cookies.remove('token')
    //     setUser(null)
    //     delete api.defaults.headers.Authorization
    //     window.location.pathname = '/login'
    // }
    


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)


