import React from 'react'

import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { URL } from "./context"

function SingleMovie() {

    let { id } = useParams()


    let [isLoading, setIsLoading] = useState(true)
    // const [isError, setIsError] = useState({ show: "false", msg: "" });
    let [movies, setMovies] = useState(null)


    let getMovies = async (url) => {

        try {
            let getUrl = await fetch(url)
            let data = await getUrl.json()
            console.log(data)

            if (data.Response === "True") {
                setIsLoading(false)

                setMovies(data)
            }
        } catch (Error) {
            console.log(Error)
        }
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${URL}&i=${id}`)
        }, 500)

        return () => clearTimeout(timerOut)

    }, [id])

    if (isLoading) {
        return (
            <div className='movie-section'>
                <div className='loading'>
                    Loading...
                </div>
            </div>
        )
    }

    return (
        <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movies.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movies.Title}</p>
            <p className="card-text">{movies.Released}</p>
            <p className="card-text">{movies.Genre}</p>
            <p className="card-text">{movies.imdbRating} / 10</p>
            <p className="card-text">{movies.Country}</p>
            <p className="card-text">{movies.Runtime}</p>
            <p className="card-text">{`Director:- ${movies.Director}`}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    )
}

export default SingleMovie