import React, {useState} from 'react'
// import axios from 'axios'

// Iniciar Sesion

export const MainTwitter = () => {

  const axios = require('axios').default;

  const [data, setData] = useState({
    form: {
      "username":"",
      "password":""
    },
  })

  async function capturarInicio (e) {
    const capturaNombre = e.target.name
    const capturaValor = e.target.value

    if(capturaNombre === "username"){
      setData({
        form:{
          ...data.form,
          ["username"]:capturaValor
        }
      })
    }
    else if(capturaNombre === "password"){
      setData({
        form:{
          ...data.form,
          ["password"]:capturaValor
        }
      })
    }
  }

  const postIniciarSesion = () => {

    axios.post('https://backend-edw.herokuapp.com/login', data.form)
    
    .then(function (response) {
      console.log(response);
      if(response.data.Message === 'Credenciales Invalidas'){
        console.log('Usuario o contrasenia incorrectos')
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log('Error en la conexion')
    });
  }

  const prevenirDefault = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="cajonExterior">
      <div className='cajon'>
        <h2>Iniciar Sesion</h2>
        <br></br>
        <form  onSubmit = {prevenirDefault}>
          {/* <label for="user">Usuario:</label> */}
          <input placeholder="Usuario" type="text" id="username" name="username" onChange={capturarInicio}/>

          {/* <label for="password">Contrasenia:</label> */}
          <input placeholder="Contrasenia" type="password" id="password" name="password" onChange={capturarInicio} />

          <br></br>
          <br></br>
          <button onClick={postIniciarSesion}>Iniciar Sesion</button>
          <br></br>
          <a href="/Git">Nuevo usuario</a><br></br>

        </form>
      </div>
    </div>
  )
}
