import React, { useState } from 'react'
import logo from './images/Vector (2).png'
import text from './images/Group.png'
import './header.css'
import { Fade as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'


export default function Header() {

  const [open, setOpen] = useState(false)



  return (
    <section className='headerSection'>
        <div className="headerContent" data-aos="fade-left">
            <div className="imgBlock">
              <img className='headerLogo' src={logo} alt='logo'/>
              <img className='hydraText' src={text} alt='text'/>
            </div>
            <div className="navBlock">
            <nav className={`${open ? 'navList' : 'navBar'}`}>
                <Link className='navLink'spy={true} smooth={true} offset={-120} duration={500} to='about'>ABOUT</Link>
                <Link className='navLink' spy={true} smooth={true} offset={-20} duration={500} to='services'>SERVICES</Link>
                <Link className='navLink' spy={true} smooth={true} offset={-120} duration={500} to='technologies'>TECHNOLOGIES</Link>
                <Link className='navLink' spy={true} smooth={true} offset={-120} duration={500} to='How to'>HOW TO</Link>
            </nav>
            </div>
            <div className="contactBtn">
              <Link className="contact" spy={true} smooth={true} offset={-150} duration={500} to='contact'>CONTACT US</Link>
              <Link className="joinBtn" spy={true} smooth={true} offset={-10} duration={500} to='join'>JOIN HYDRA</Link>
            </div>
            <div className= 'burgerBlock' onClick={()=>{
              setOpen(!open)
            }}>
              <Hamburger id='burgerMenu'/>
            </div>
        </div>
    </section>
  )
}
