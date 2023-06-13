import React from 'react'
import { NavLink } from 'react-router-dom'
import voltar from '../../images/voltar.png'

const Header = () => {
  return (
    <div>
        <header>
          <div>
            <NavLink to='/'><img style={{width: '25px'}} src={voltar} alt='icone de voltar'/></NavLink>
          </div>
        </header>
    </div>
  )
}

export default Header