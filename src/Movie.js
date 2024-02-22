import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

function Movie() {

    let { movies, isLoading } = useGlobalContext()

    if(isLoading){
        return(
            <div className='movie-section'>
                <div className='loading'>
                    Loading...
                </div>
            </div>
        )
    }

    return (
        <section className='movie-page'>
            <div className='container grid grid-4-col' >
                {
                    movies.map((curMovie, key) => {
                        let { imdbID, Title, Poster } = curMovie
                        let MovieName = Title.substring(0, 15)
                        return (
                            <NavLink to={`movie/${imdbID}`} key={key}>
                                <div className="card" >
                                    <div className="card-info" >
                                        <h2 >{MovieName.length >= 15 ? `${MovieName}...` : MovieName}</h2>
                                        <img src={Poster} alt='imdbID' />
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Movie