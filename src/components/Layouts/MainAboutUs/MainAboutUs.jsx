import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imgAboutUs  from '../../../assets/imagenes/imgAboutUs.jpg'


export const MainAboutUs = () => {
  return (
    <div className="cajonExterior">
        <Imagen url={ imgAboutUs } />
    </div>
  )
}

