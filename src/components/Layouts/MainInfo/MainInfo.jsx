import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imgInfo  from '../../../assets/imagenes/imgInfo.jpg'


export const MainInfo = () => {
  return (
    <div className="cajonExterior">
      <div className='cajon'>  
        <h2>Traer Usuarios</h2>
        <br></br>
        <hr />
        <input placeholder="Usuario que desea buscar:" type="text" id="buscar-input" name="buscar-input" />
        <br></br>
        <button>Buscar</button>
      </div>
    </div>
  )
}
