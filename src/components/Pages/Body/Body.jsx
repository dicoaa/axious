import React from 'react'
import { Footer } from '../../Layouts/Footer/Footer'
import { Header } from '../../Layouts/Header/Header'
import { MainBody } from '../../Layouts/MainBody/MainBody.jsx'



export const Body = () => {
  return (
    <div className='exteriorFull'>
      <Header/>
      <MainBody/>
      <Footer/>
    </div>
  )
}
