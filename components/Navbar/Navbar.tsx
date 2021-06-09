import React from 'react'
import {ActiveLink} from '../ActiveLink'

export const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className="navbar-list">
        <ActiveLink href='/' className='navbar-list__item' activeClassName='navbar-list__item_active'>
          Пользователи
        </ActiveLink>
        <ActiveLink href='/posts' className='navbar-list__item' activeClassName='navbar-list__item_active'>
          Посты
        </ActiveLink>
      </div>
    </div>
  )
}
