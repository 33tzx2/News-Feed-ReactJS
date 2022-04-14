import React from 'react'
import './Menu.css'

const Menu = ({header, items, active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className='blur'/>
      <div className='menu__content' onClick={e => e.stopPropagation()}>
        <div className='menu__header'>{header}</div>
        <ul className='menu_list'>
          <li><a href='./main' className='MenuLink'>Categories</a>
            <ul className='subMenu__list'>
            <li><a href='./main' className='subMenu__link'>Sport</a></li>
            <li><a href='./main' className='subMenu__link'>World</a></li>
            <li><a href='./main' className='subMenu__link'>Covid</a></li>
            <li><a href='./main' className='subMenu__link'>Business</a></li>
            <li><a href='./main' className='subMenu__link'>Politics</a></li>
            <li><a href='./main' className='subMenu__link'>Science</a></li>
            <li><a href='./main' className='subMenu__link'>Religion</a></li>
            <li><a href='./main' className='subMenu__link'>Health</a></li>
            </ul>
          </li>
          <li ><a href='./main' className='menu_link'>Trending News</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu