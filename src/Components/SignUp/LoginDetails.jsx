import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const LoginDetails = () => {
    return (
        <div className='mt-20 flex flex-col justify-center items-center'>
            <Navbar/>
            <header className='flex gap-5 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='px-3 py-1 rounded-full border border-black'>1</span>
                    <p>Account Type</p>
                </div>
                <div className='w-32 p-0  border-black border-t-2'></div>
                <div className='flex flex-col justify-center items-center'>
                    <span className='px-3 py-1 rounded-full border border-black'>2</span>
                    <p>Fill Details</p>
                </div>
                <div></div>
                <div className='w-32 p-0  border-black border-t-2'></div>
                <div className='flex flex-col justify-center items-center'>
                    <span className='px-3 py-1 bg-amber-600 text-white rounded-full border border-black'>3</span>
                    <p>Submit</p>
                </div>
            </header>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='text-3xl font-semibold'>Fill your Details</h1>
                <p className='w-96 text-center font-medium'>Fill your details to move towards next step.</p>
            </div>
            <div className='w-[40%]'>
                <form action="" className='mt-10 flex flex-col justify-center'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor="firstName" className='font-medium text-sm'>First Name</label>
                            <input type="text" className='p-2 mt-1' />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor="firstName" className='font-medium text-sm'>Last Name</label>
                            <input type="text" className='p-2 mt-1' />
                        </div>
                    </div>
                </form>
            </div>
            <NavLink to='/LoginDetails'>
                <button className='bg-amber-600 mt-10 px-52 py-2 rounded shadow' >
                    Submit
                </button>
            </NavLink>
        </div>
    )
}

export default LoginDetails