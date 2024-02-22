import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context'



function SingleMovie() {

  

    let { id } = useParams()

  return (
    <h2>Single  Movie {id}</h2>
  )
}

export default SingleMovie