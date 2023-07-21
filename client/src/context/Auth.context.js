import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [loggedin, setLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [token, setToken] = useState("")

    const loginFunc = () => {
        setUsername(localStorage.getItem('token'))
        setToken(localStorage.getItem('username'))
        // console.log(username, token)
        setLoggedIn(!loggedin)
        // console.log(loggedin)
    }
    return (
        <AuthContext.Provider value={{ LoginFunc: loginFunc, status: loggedin, token: token, username: username }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvider