import React, { useContext, useEffect, useState } from "react"

const AppContext = React.createContext()

let URL = `http://www.omdbapi.com/?apikey=75c784&s=titanic`

const AppProvoider = ({ children }) => {

    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState([])
    let [isError, setIsError] = useState({ show: 'false', msg: ' ' })

    let getMovies = async (url) => {

        try {
            let getUrl = await fetch(url)
            let data = await getUrl.json()
            console.log(data)

            if (data.Response === "True") {
                setIsLoading(false)
                setMovies(data.Search)
            }
            else {
                setIsError({
                    show: 'true', msg: data.error
                })
            }
        } catch (Error) {
            console.log(Error)
        }
    }

    useEffect(() => {
        getMovies(URL)
    }, [])

    return <AppContext.Provider value={{ isLoading, movies, isError }}>
        {children}
    </AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvoider, useGlobalContext }