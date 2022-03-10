import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { MainContact } from '../../Layouts/MainContact/MainContact'

export const Contact = () => {
  return (
    <div className='exteriorFull'>
        <Header/>
        <MainContact/>
        <Footer/>
    </div>
  )
}
