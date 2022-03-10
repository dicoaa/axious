import React from 'react'; 
import { Counter } from '../../UI/Counter/Counter';
import { Imagen } from '../../UI/Imagen/Imagen';
import imgHome from '../../../assets/imagenes/imgHome.png'


export const MainBody = () => {
  return (
    <div className="cajonExterior">
      <div className='cajon'>
        <Counter/>
        <Imagen url={ imgHome }/>
      </div>
    </div>
  )
}
