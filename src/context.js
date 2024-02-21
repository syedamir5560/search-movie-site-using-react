import React, { useContext } from "react"

const AppContext = React.createContext()

const AppProvoider = ({children}) =>{
    return <AppContext.Provider value='AAMIR'>
{children}
    </AppContext.Provider>

    const useGlobalContext =()=>{
        return useContext(AppContext)
    }
}

const useGlobalContext =()=>{
    return useContext(AppContext)
}

export {AppContext , AppProvoider , useGlobalContext}