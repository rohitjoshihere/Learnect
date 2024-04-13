import React from 'react'
import Spiral from '../Spiral/Spiral'
import { NavLink } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'

const LoginScreen = () => {

    return (
        <div className='flex flex-row justify-center items-center m-auto w-11/12 h-screen'>
            <div className=''>
                <h1 className='text-amber-600 font-bold text-4xl'>Connect,Learn & Grow!</h1>
                <p className='mt-2 w-2/3 font-semibold'>Connect with inspiring educators. Explore a vast range of courses. Become your best self.</p>
                <NavLink to='/SignIn'>
                    <button className='border border-amber-500 px-4 py-2 rounded-md mt-4 mr-4'>
                        Sign In
                    </button>
                </NavLink>
                <NavLink to='/SignUp'>
                <button className='border px-4 py-2 rounded-md mt-4 bg-amber-600'>Sign Up</button>
                </NavLink>
            </div>
            <div className=''>
                <Spiral />
            </div>
        </div>
    )
}

export default LoginScreen