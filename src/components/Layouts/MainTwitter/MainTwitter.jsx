import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imgTwitter  from '../../../assets/imagenes/imgTwitter.jpg'

export const MainTwitter = () => {
  return (
    <div className="cajonExterior">
      <div className='cajon'>
        <h2>Iniciar Sesion</h2>
        <br></br>
        <form action="/my-handling-form-page" method="post">
          {/* <label for="user">Usuario:</label> */}
          <input placeholder="Usuario" type="text" id="user" name="user_user" />

          {/* <label for="password">Contrasenia:</label> */}
          <input placeholder="Contrasenia" type="password" id="password" name="user_password" />

          <br></br>
          <br></br>
          <button>Iniciar Sesion</button>
          <br></br>
          <a href="/Git">Nuevo usuario</a><br></br>

        </form>
      </div>
    </div>
  )
}
