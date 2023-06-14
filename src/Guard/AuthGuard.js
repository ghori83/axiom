import React from 'react'
import { Navigate } from "react-router-dom"



    const AuthGuard = ({ children }) => {
    
        const isLogged = localStorage.getItem("isLogged") === "true" ? true : false
    
        if (!isLogged) return  <Navigate to="/about" replace={true}/>
    
        return (
            <>
            
            {children}</>

        )
    }
    




export default AuthGuard