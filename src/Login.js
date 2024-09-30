import React from 'react'
import { useNavigate } from 'react-router'

function Login() {
  const nav = useNavigate()
  return (
  <div className='App '>
     <div className='h-screen  mx-auto max-w-[350px] flex flex-col justify-center'>
       <img src="../images/cta-logo-one.svg" />
       <button className='text-2xl  p-3 rounded-lg capitalize bg-[rgba(0,0,255,0.8)] text-white font-bold  text-bold' onClick={()=>nav('/home')}>Get all there</button>
       <p className='text-[rgba(255,255,255,0.5)] font-bold leading-5 text-xs capitalize my-3' >Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase $1. </p>
       <img src="../images/cta-logo-two.png" />

     </div>
    </div>
  )
}

export default Login