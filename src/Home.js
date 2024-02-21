import React, { useContext } from 'react'
import { useGlobalContext } from './context'


function Home() {

    let context = useGlobalContext()  

  return (

    <div>Home {context  }</div>

  )
}

export default Home