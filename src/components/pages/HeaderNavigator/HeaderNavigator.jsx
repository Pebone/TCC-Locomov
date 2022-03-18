import React from 'react'
import Logo from '../../../assets/images/logo.png'
import "../../../assets/css/Global.scss"

export default function HeaderNavigator() {
  return (
    <div className = '__header'>
        <img src = {Logo} className = '__imgHeader'></img>
        <span className = '__spanHeader'>Administrativo</span>
    </div>
  )
}
