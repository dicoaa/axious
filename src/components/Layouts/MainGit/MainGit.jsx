import React, {useState} from 'react'

export const MainGit = () => {

  const axios = require('axios').default;

  const [data, setData] = useState({
    form: {
      "username":"",
      "password":"",
      "name":"",
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
    else if(capturaNombre === "name"){
      setData({
        form:{
          ...data.form,
          ["name"]:capturaValor
        }
      })
    }
    console.log(data.form)
  }

  const postIniciarSesion = () => {
    // console.log(data.form)
    axios.post('https://backend-edw.herokuapp.com/usuario', data.form)
    .then(function (response) {
      console.log(response);
      if(response.data.Message === 'Usuario con ese username ya esta registrado'){
        console.log('Usuario ya registrado')
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
        <h2>Registrarse</h2>
        <br></br>

      {/* Registrarse */}

        <form onSubmit={prevenirDefault}>
            {/* <label for="name">Nombre:</label> */}
            <input placeholder="Nombre" type="text" id="name" name="username" onChange={capturarInicio}/>
            {/* <label for="password">Contrasenia:</label> */}
            <input placeholder="Contrasenia" type="password" id="password" name="password" onChange={capturarInicio}/>
            {/* <label for="user">Usuario:</label> */}
            <input placeholder="Usuario" type="text" id="user" name="name" onChange={capturarInicio}/>
            <br></br>
            <br></br>
            <button onClick={postIniciarSesion}>Registrarse</button>
            <br></br>
            <a href="/Twitter">Iniciar Sesion</a>
        </form>
      </div>
    </div>
  )
}
