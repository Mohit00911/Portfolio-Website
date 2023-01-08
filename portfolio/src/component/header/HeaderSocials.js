import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohit-rawat-323133229/" target="blank"><BsLinkedin/></a>
        <a href="https://www.facebook.com/profile.php?id=100069372529840" target="blank"><AiFillFacebook/></a>
        <a href="https://instagram.com/i_am_rawat_?igshid=YmMyMTA2M2Y=" target="blank"><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials