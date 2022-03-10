import React from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import imgContact  from '../../../assets/imagenes/imgContact.jpg'
import emailjs from '@emailjs/browser'

export const MainContact = () => {

  const sendEmail = (event) =>{
    event.preventDefault()

    emailjs.sendForm('service_zihstls','template_aovaqoc', event.target,'Ukgsv9qh9c5pkxoSQ')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className="cajonExterior">
        <div className='div-form'>
          <h1 className='title-form'>Contact Us</h1>
          <form className='form-mail' onSubmit={sendEmail}>
            <label className='labelContacto'>Name</label>
            <input className='labelInput' type="text" name="user_name"/>
            <hr/>

            <label className='labelContacto'>Email</label>
            <input className='labelInput' type="text" name="user_email"/>
            <hr/>

            <label className='labelContacto'>Message</label>
            <textarea name="user_message" id="" cols="36" rows="10"></textarea>
            <hr/>
            <hr/>
            <hr/>

            <button className='btnSend'>Send</button>
          </form>
        </div>
    </div>
  )
}
