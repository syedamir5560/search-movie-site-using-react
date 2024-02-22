import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'

function SingleMovie() {

    let { id } = useParams()

    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState('')
   

    let getMovies = async (url) => {

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
            getMovies(`${URL}`)
        }, 500)

        return () => clearTimeout(timerOut)

    }, [])





  return (
    <h2>Single  Movie {id}</h2>
  )
}

export default SingleMovie