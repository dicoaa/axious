import React from 'react'
import imgHome from '../../../assets/imagenes/imgHome.png'

export const Imagen = ({url}) => {
  return (
    <div className="img">
        <img src={url} alt="" />
    </div>
  )
}
