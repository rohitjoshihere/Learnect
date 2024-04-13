import React, { useEffect, useRef } from 'react'
import Spiral from '../Spiral/Spiral'
import './SignIn.css'
import { NavLink } from 'react-router-dom'
import spiral from '../../assets/Spiral 1.png'

const Image = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 1,
      x: 1000,
      duration: 1,
      scale:1
    });
    gsap.to(elementRef.current, {
      opacity: 1,
      x: 50,
      duration: 1,
      scale:0.7
    });
  }, []);

  return (
    <div>
      <img src={spiral} alt="" className='spiral'  ref={elementRef}/>
    </div>
  )
}

const Form = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 1,
      x: 1000,
      duration: 1,
    });  
    gsap.to(elementRef.current, {
      opacity: 1,
      x: -250,
      duration: 1,
    });  
  }, []);  

  const handleClick = (event) => {
    event.preventDefault();
  };  
  return (
    <div className=''>
      <div className='mt-20 grey-box rounded-xl' ref={elementRef}>
        <div className="form">
          <form action="" className='rounded-xl' onClick={handleClick} >
            <h1 className='font-semibold text-lg'>Welcome to Learnect</h1>
            <label htmlFor="username">Username
              <input type="text" />
            </label>  
            <label htmlFor="password">Password
              <input type="password" />
            </label>  
            <button className='rounded w-10/12 p-1'>Sign In</button>
            <p className='text-xs font-semibold'>Don't have an account?
              <NavLink to={'/SignUp'} className={"p-1"}>
                Register Now
              </NavLink>  
            </p>  
          </form>  
        </div>  
      </div>  
    </div>    
  )
}  

const SignIn = () => {
  return (
    <div className='flex container'>
      <Image/>
      <Form />
    </div>
  )
}

export default SignIn