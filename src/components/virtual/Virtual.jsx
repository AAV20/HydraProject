import React, { useEffect, useState } from 'react'
import './virtual.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {FidgetSpinner} from 'react-loader-spinner'



export default function Virtual() {
    const [image, setImage]= useState([])
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])


    useEffect(()=>{
        fetch('https://retoolapi.dev/Q4Denx/dataimg')
        .then(respons => respons.json())
        .then(data=>setImage(data))
    },[])
  return (
    <section className='mainSection'>
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
        <div className="mainContent" data-aos="fade-up" data-aos-duration="700">
            <div className="textBlock">
                <h2><span className='wordColor1'>Dive</span> Into The Depths <br></br> Of <span className='wordColor2'> Virtual Reality</span></h2>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <div className="buildBlock">
                    <button className="buildWordBtn">BUILD YOUR WORLD</button>
                    <ArrowForwardIcon id='ArrowRight'/>
                </div>
            </div>
            
            {Boolean.length && image.map((itam)=>(
                <div className="girlImageBlock" key={itam.id}> 
                    <img className='girlImage' src={itam.girlimg} alt='img'/>
                </div>
            ))}
        </div>
        }
    </section>
  )
}
