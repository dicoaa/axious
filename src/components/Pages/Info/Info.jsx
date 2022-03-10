import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { MainInfo } from '../../Layouts/MainInfo/MainInfo'
import { Header } from '../../Layouts/Header/Header'


export const Info = () => {
  return (
    <div className='exteriorFull'>
        <Header/>
        <MainInfo/>
        <Footer/>
    </div>
  )
}
