import React from 'react'
import './footer.css'
import logo from './footerlogo/Vector (2).png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-scroll';


export default function Footer() {
  return (
    <section className='footerSection'>
        <div className="footerContent" data-aos="fade-up" data-aos-duration="700">
            <img src={logo} alt="logo"/>
            <div className="lineBlock"></div>
            <div className="linkBlock">
                <Link className='footerLinks' spy={true} smooth={true} offset={-120} duration={500} to='about'>ABOUT</Link>
                <Link className='footerLinks' spy={true} smooth={true} offset={-20} duration={500} to='services'>SERVICES</Link>
                <Link className='footerLinks' spy={true} smooth={true} offset={-120} duration={500} to='technologies'>TECHNOLOGIES</Link>
                <Link className='footerLinks' spy={true} smooth={true} offset={-120} duration={500} to='How to'>HOW TO</Link>
                <Link className='footerLinks' spy={true} smooth={true} offset={-10} duration={500} to='join'>JOIN HYDRA</Link>
            </div>
            <div className="lineBlock"></div>
            <div className="linkBlockTwo">
                <ul>
                    <li>F.A.Q</li>
                    <li>SITEMAP</li>
                    <li>CONDITIONS</li>
                    <li>LICENSES</li>
                </ul>
            </div>
            <div className="lineBlock"></div>
            <div className="socialBlock">
                <h3>SOCIALIZE WITH HYDRA</h3>
                <div className="socialIcons">
                    <FacebookIcon id='icons'/>
                    <TwitterIcon id='icons'/>
                    <InstagramIcon id='icons'/>
                    <LinkedInIcon id='icons'/>
                    <YouTubeIcon id='icons'/>
                    <PinterestIcon id='icons'/>
                </div>
                <button className="socialBtn">BUILD YOUR WORLD</button>
            </div>
            
        </div>
        <div className="endBlock" data-aos="fade-up" data-aos-duration="700">
            <small>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </small>
        </div>
    </section>
  )
}
