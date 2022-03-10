import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { MainAboutUs } from '../../Layouts/MainAboutUs/MainAboutUs'
import { Footer } from '../../Layouts/Footer/Footer'

export const AboutUs = () => {
  return (
    <div className='exteriorFull'>
        <Header/>
        <MainAboutUs/>
        <Footer/>
    </div>
  )
}
