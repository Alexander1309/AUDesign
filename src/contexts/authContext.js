import { createContext, useState } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {
    let defaultAuth
    const auth = JSON.parse(localStorage.getItem('AUDesign_isAuth'))
    const token = localStorage.getItem('AUDesign_token')
    const user = JSON.parse(localStorage.getItem('AUDesign_user'))
    
    if(auth && token && user && typeof auth === 'boolean' && typeof token === 'string' && typeof user === 'object') defaultAuth = true
    else {
        localStorage.setItem('AUDesign_isAuth', false)
        defaultAuth = false
    }

    const [isAuth, setIsAuth] = useState(defaultAuth)

    const signIn = cb => {
        setIsAuth(true)
        localStorage.setItem('AUDesign_isAuth', true)
        setTimeout(cb, 100)
    }
    
    const logOut = cb => {
        setIsAuth(false)
        localStorage.setItem('AUDesign_isAuth', false)
        setTimeout(cb, 100)
    }

    return (
        <authContext.Provider value={{ isAuth, signIn, logOut }}>
            {children}
        </authContext.Provider>
    )
}

export { authContext, AuthProvider }