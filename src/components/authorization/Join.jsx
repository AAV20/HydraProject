import React, { useState } from 'react'
import './join.css'

export default function Join() {

    const [name,setName]= useState('')
    const [lastName, setLatName]= useState('')
    const [number, setNumber]=useState('')
    const [email,setEmail]= useState('')
    const [subject,setSubject]= useState('')
    const [message, setMessage]=useState('')

    const send = {
        "name": `${name}`,
        "lastName": `${lastName}`,
        "number": `${number}`,
        "subject":   `${subject}`,
        "email": `${email}`,
        "message": `${message}`,
       
    }


    const sendMessage = (e)=>{
        e.preventDefault()
        fetch('https://retoolapi.dev/Etj8dG/datajoin',{
            method:'POST',
            body:JSON.stringify(send),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }

  return (
    <section className='logInSection'>
        <div className="logInBlock" id='join'  data-aos="zoom-in-up" data-aos-duration="700">
           <div className="joinTitle">
                <h2>JOIN HYDRA</h2>
                <h3>Let’s Build Your VR Experience</h3>
           </div>
           <div className="registrForm">
           <form onSubmit={sendMessage}>
                <div className="inpBlock1">
                    <input onBlur={(e)=>setName(e.target.value)} className='inp1' type="text" placeholder='First Name'/>
                    <input onBlur={(e)=>setLatName(e.target.value)} className='inp2' type="text" placeholder='Last Name'/>
                </div>
                <div className="inpBlock2">
                    <input onBlur={(e)=>setEmail(e.target.value)} className='inp3' type="email" placeholder='Email'/>
                    <input onBlur={(e)=>setNumber(e.target.value)} className='inp4' type="number" placeholder='Phone Number'/>
                </div>
                <div className="inpBlock3">
                    <input onBlur={(e)=>setSubject(e.target.value)} className='inp5' type="text" placeholder='Subject'/>
                    <input onBlur={(e)=>setMessage(e.target.value)} className='inp6' type="text" placeholder='Tell Us Something...'/>
                </div>
                <div className="sendBtnBlock">
                    <button type='submit' className="sendBtn">SEND TO HYDRA</button>
                </div>
            </form>
           </div>
        </div>
    </section>
  )
}
