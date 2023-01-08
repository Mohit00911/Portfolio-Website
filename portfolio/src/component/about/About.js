import React from 'react'
import './About.css'
import ME from '../../Assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About me</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='d'/>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>2  Worldwide</small>
          </article>
          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        
        </div>
        <p>I’m a nice fun and friendly person, I’m honest and punctual, I work well in a team but also on my own as I like to set myself goals which I will achieve, I have good listening and communication skills. I have a creative mind and am always up for new challenges. I am well organized and always plan ahead to make sure I manage my time well.</p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About