import React from 'react'
import { InicioSt } from '../style/styles'

const Intro = () => {
  return (
    <InicioSt>
      <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560310/Fylo/illustration-intro_nspcew.png" alt='intro'/>
      <h2>All your files in one secure location, accesible anywhere.</h2>
      <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers</p>
      <a href="#signUp"><button>Get started</button></a>
    </InicioSt>
  )
}

export default Intro