import React from 'react'
import { useGlobalContext } from './context'

function Movie() {

    let { movies } = useGlobalContext()

    return (
        <>
            { movies.map((curMovie) => {
                return (
                    <h2>{curMovie.Title}</h2>
                )
            })}
        </>
    )
}


export default Movie