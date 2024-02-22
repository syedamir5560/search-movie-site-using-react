import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom'

function Movie() {

    let { movies, isLoading } = useGlobalContext()


    return (
        <section className='movie-page'>

            <div className='container grid grid-4-col' >
                {
                    movies.map((curMovie, key) => {

                        let { imdbID, Title, Poster } = curMovie

                        return (
                            <NavLink to={`movie/${imdbID}`} key={key}>
                                <div className="card" >
                                    <div className="card-info" >
                                        <h2 >{Title}</h2>
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