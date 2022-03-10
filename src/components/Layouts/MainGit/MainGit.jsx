import React from 'react'

export const MainGit = () => {
  return (
    <div className="cajonExterior">
      <div className='cajon'>
        <h2>Registrarse</h2>
        <br></br>

      {/* Registrarse */}

        <form onSubmit={handleOnSubmit}>
            {/* <label for="name">Nombre:</label> */}
            <input placeholder="Nombre" type="text" id="name" name="user_name" />
            {/* <label for="password">Contrasenia:</label> */}
            <input placeholder="Contrasenia" type="password" id="password" name="user_password" />
            {/* <label for="user">Usuario:</label> */}
            <input placeholder="Usuario" type="text" id="user" name="user_user" />
            <br></br>
            <br></br>
            <button>Registrarse</button>
            <br></br>
            <a href="/Twitter">Iniciar Sesion</a>
        </form>
      </div>
    </div>
  )
}
