import React from 'react'
import './contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import rightimg from './png/Component 1.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import  { useEffect, useState } from 'react'
import 'swiper/css';


export default function Contact() {

    const [width, setWidth] = useState(0);
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <section className='contactSection'>
        <div className="contactContent" data-aos="fade-up" data-aos-duration="700">
            <div className="contactBlock" id='contact'>
            <Swiper
            className='swiperParent'
            slidesPerView={width <= 375? 1 : 4}
            spaceBetween={50}
            >
                <SwiperSlide>
                <div className="location">
                    <LocationOnIcon id='locationIcon'/>
                    <div className="locationInfo">
                        <h3>Pay Us a Visit</h3>
                        <span>import LocationOnIcon from '@mui/icons-material/LocationOn';</span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="callBlock">
                    <CallIcon id='locationIcon'/>
                    <div className="locationInfo">
                        <h3>Give Us a Call</h3>
                        <span>(110) 1111-1010</span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="messageBlock">
                    <EmailIcon id='locationIcon'/>
                    <div className="locationInfo">
                        <h3>Send Us a Message</h3>
                        <span>Contact@HydraVTech.com</span>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>   
            </div>
        </div>
        <div className="introductionBlock" data-aos="fade-up" data-aos-duration="700">
            <div className="childrenBlock">
                <h2>INTRODUCTION</h2>
                <div className="longLineRight">
                    <h3>TO HYDRA VR</h3>
                    <div className="childBlock">
                        <img src={rightimg} alt="img"/>
                    </div>
                </div>  
            </div>
            <div className="vr">
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
        </div>
    </section>
  )
}
