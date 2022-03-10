import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainGit } from '../../Layouts/MainGit/MainGit'
import { Header } from '../../Layouts/Header/Header'



export const Git = () => {
  return (
    <div className='exteriorFull'>
        <Header/>
        <MainGit/>
        <Footer/>
    </div>
  )
}
