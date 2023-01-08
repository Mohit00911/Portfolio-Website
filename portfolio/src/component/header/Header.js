import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME1 from '../../Assets/ME1.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
  <header>
    <div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Mohit Rawat</h1>
<h5 className='text-light'>Frontend Developer</h5>
<CTA/>
<HeaderSocial/>
<div className='me'>
  <img src={ME1} alt="me" />
</div>
<a href="#contact" className='scroll__down'>Scroll Dowm</a>
    </div>
  </header>
  )
}

export default Header