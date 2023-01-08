import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'


import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const app = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        
        <Contact/>
        <Footer/>
    </>
  )
}

export default app