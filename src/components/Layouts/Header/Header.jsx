import React from 'react'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'

export const Header = () => {
  return (
    <div className = 'header'>
      <NavLink to="/"><Botones nombre="Home"/></NavLink>
      <NavLink to="/Contact"><Botones nombre="Contact"/></NavLink>
      <NavLink to="/AboutUs"><Botones nombre="About us"/></NavLink>
    </div>
  )
}
