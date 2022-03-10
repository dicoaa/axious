import React from 'react'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'

export const Footer = () => {
  return (
    <div className = 'footer'>
        <NavLink to="/Git"><Botones nombre="Registrarse"/></NavLink>
        <NavLink to="/Twitter"><Botones nombre="Iniciar Sesion"/></NavLink>
        <NavLink to="/Info"><Botones nombre="Traer Usuarios"/></NavLink>
    </div>
  )
}
