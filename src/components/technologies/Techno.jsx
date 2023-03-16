import React, { useEffect, useState } from 'react'
import './techno.css'
import 'swiper/swiper-bundle.min.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import rightimg from './technoimg/Component 1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Swiper, SwiperSlide} from 'swiper/react'
import {FidgetSpinner} from 'react-loader-spinner'


export default function Techno() {
    const [techno,setTechno]=useState([])
    const [logo,setLogo]=useState([])
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
 
    const [width, setWidth] = useState(0);
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    useEffect(()=>{
        fetch('https://retoolapi.dev/0aBIot/datalogo')
        .then(respons => respons.json())
        .then(data => setLogo(data))
    })

    useEffect(()=>{
        fetch('https://retoolapi.dev/HkJirT/datatechno')
        .then(respons => respons.json())
        .then(data => setTechno(data))
    },[])
  return (
    <section className='technoSection'>
        {
            loading?
            <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
            />
              :
        <div className="technoContent" id='technologies' data-aos="fade-up" data-aos-duration="700">
            {Boolean.length && techno.map((itam)=>(
                <div className="bckg-Image" key={itam.id}>
                    <img src={itam.img} alt="img"/>
                    <div className="title">
                        <h2>{itam.title}</h2>
                        <h3>USED BY HYDRA VR.</h3>
                    </div>
                    <div className="downUp">
                        <button className="downBtn"><KeyboardArrowDownIcon id='downArrow'/></button>
                    </div>
                </div>
            ))}
            <div className="logoBlock">
                <Swiper 
                    className='swiperParent'
                    slidesPerView={width <= 375? 1 : 4}
                    spaceBetween={50}
                >
                    {Boolean.length && logo.map((itam)=>(
                        <SwiperSlide className='swiperImageParent' style={{display:'flex'}} key={itam.id}>
                            <img className='swiperImage' src={itam.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
               
             </div>
        </div>
        }
        <div className="technoBuild" id='How to' data-aos="fade-up" data-aos-duration="700">
        <div className="childrenBlock">
                <h2>HOW WE BUILD</h2>
                <div className="longLineRight">
                    <h3>WITH HYDRA VR?</h3>
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
        <div className="circleBlocks" data-aos="fade-up" data-aos-duration="700">
        <Swiper
        className='swiperParent'
        slidesPerView={width <= 375? 1 : 4}
        spaceBetween={50}
        >
            <div className="circle"> 
            <SwiperSlide>
                <div className="circle-flex-block">
                    <div className='number'>01</div>
                    <div className="design">
                        <h3>3D Conception<br></br>& Design</h3>
                        <ArrowForwardIcon id='designArrow'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="circle-flex-block">
                    <div className='number'>02</div>
                        <div className="design">
                            <h3>3D Conception<br></br>& Design</h3>
                            <ArrowForwardIcon id='designArrow'/>
                    </div>
                </div>  
            </SwiperSlide>
            <SwiperSlide>
                <div className="circle-flex-block">
                    <div className='number'>03</div>
                        <div className="design">
                        <h3>Interaction<br></br>Design</h3>
                        <ArrowForwardIcon id='designArrow'/>
                    </div>
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="circle-flex-block">
                    <div className='number'>04</div>
                    <div className="design">
                        <h3>VR World<br></br>User Testing</h3>
                        <ArrowForwardIcon id='designArrow'/>
                    </div>
                </div> 
            </SwiperSlide>
            </div>          
        </Swiper>    
        </div>           
    </section>
  )
}
