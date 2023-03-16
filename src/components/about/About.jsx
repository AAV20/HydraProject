import React, { useEffect, useState } from 'react'
import './about.css'
import arrowimg from './imgpng/Component 1.png'
import 'swiper/swiper-bundle.min.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import {FidgetSpinner} from 'react-loader-spinner'




export default function About() {

    const [manImage, setManImage] = useState([])
    const [techno,setTechno]= useState([])
    const [width, setWidth] = useState(0);
    const [loading, setLoading]=useState(false)

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        fetch('https://retoolapi.dev/BUtVIx/data')
        .then(respons => respons.json())
        .then(data => setTechno(data))
    },[])

    useEffect(()=>{
        fetch('https://retoolapi.dev/nFk5Vq/dataman')
        .then(respons => respons.json())
        .then(data => setManImage(data))
    },[])

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

  return (
    <section className='aboutSection'>
         {
            loading?
            <FidgetSpinner
            className='loader'
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
        <div className="aboutContent" data-aos="fade-up" data-aos-duration="700">
            {Boolean.length && manImage.map((itam)=>(
                <div className="manImageBlock" key={itam.id}>
                    <img className='manImage' src={itam.manimg} alt='img'/>
                </div>
            ))}
            <div className="aboutTextBlock" id='about'>
                <h2>ABOUT</h2>
                <h3>HYDRA VR</h3>
                <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                    urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                    dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                    Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                    sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                    cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                    retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                    n tempor.
                </p>
                <button className='letsBtn'>LET’S GET IN TOUCH</button>
            </div>
        </div>
        }
        <div className="descrTextBlock" data-aos="fade-up" data-aos-duration="700">
                <div className="descrFlexBlock">
                    <h2>WHY BUILD</h2>
                    <div className="arrowFlexBlock">
                        <h3>WITH HYDRA?</h3>
                        <div className="arrowBlock">
                            <img src={arrowimg} alt='img'/>   
                        </div>
                    </div>
                </div>
                <div className="with-Hydra-TextBlock">
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>

                {/* Services */}
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
            <div className="technoBlock" id='services' data-aos="fade-up" data-aos-duration="700">
                <Swiper
                     className='swiperParent'
                     slidesPerView={width <= 375? 1 : 4 && width  <= 768 ? 2  : 4 }
                     spaceBetween={50}
                >
                    
                        { Boolean.length && techno.map((itam)=>(
                        <SwiperSlide style={{display:'flex'}} key={itam.id}>
                            <div className="imagesTechnoBlocks" >
                                <div className="children-Blocks">
                                    <img src={itam.img} alt="img"/>
                                    <div className="simulate">
                                        <h2>{itam.title}</h2>
                                    </div>
                                    <p>Vitae sapien pellentesque habitant morbi
                                        nunc. Viverra aliquet  porttitor rhoncus 
                                        libero justo laoreet sit amet vitae.
                                    </p>
                                    <button className='tryBtn'>TRY IT NOW</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))} 
                </Swiper> 
            </div>
            }
    </section>
  )
}
