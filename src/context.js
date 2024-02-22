import React, { useContext, useEffect, useState } from "react"


const AppContext = React.createContext()

export let URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvoider = ({ children }) => {

    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState([])
    let [isError, setIsError] = useState({ show: false, msg: '' })
    let [query, setQuery] = useState('titanic')

    let getMovies = async (url) => {

        setIsLoading(true)

        try {
            let getUrl = await fetch(url)
            let data = await getUrl.json()
            console.log(data)

            if (data.Response === "True") {
                setIsLoading(false)
                setIsError({
                    show: false , msg: ""
                })
                setMovies(data.Search)
            }
            else {
                setIsError({
                    show: true , msg: data.Error
                })
            }
        } catch (Error) {
            console.log(Error)
        }
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${URL}&s=${query}`)
        }, 500)

        return () => clearTimeout(timerOut)

    }, [query])

    return <AppContext.Provider value={{ isLoading, movies, isError, query, setQuery }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvoider, useGlobalContext }