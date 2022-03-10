import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { MainTwitter } from '../../Layouts/MainTwitter/MainTwitter'

export const Twitter = () => {
  return (
    <div className='exteriorFull'>
        <Header/>
        <MainTwitter/>
        <Footer/>
    </div>
  )
}
