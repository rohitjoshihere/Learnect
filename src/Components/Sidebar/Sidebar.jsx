import React from 'react'
import logo from '../../assets/logo 1.png'
import bottomDesign from '../../assets/Rectangle 4164.png'
const Sidebar = () => {
    return (
        <>
        <div className='bg-white h-[95vh] w-[15vw] p-4 m-5 rounded-3xl'>
            <img src={logo} className='h-[4rem]' alt="" />
            <ul className='p-3'>
                <li><i class="ri-home-3-line"></i> Home</li>
                <li><i class="ri-mail-line"></i> Inbox</li>
                <li><i class="ri-group-line"></i> Class</li>
                <li><i class="ri-file-user-line"></i> Students</li>
                <li><i class="ri-survey-line"></i> Tests</li>
                <li><i class="ri-group-3-line"></i> Batches</li>
                <li><i class="ri-file-text-line"></i> Files</li>
                <li><i class="ri-settings-5-line"></i> Settings</li>
                <hr className='my-2' />
                <li>Add Class</li>
                <li><i class="ri-add-circle-line"></i> Add Subject</li>
                <li><i class="ri-add-circle-line"></i> Add Session</li>
                <li><i class="ri-add-circle-line"></i> Create Exams</li>
                <li><i class="ri-add-circle-line"></i> Create Package</li>
                <li><i class="ri-store-3-line"></i> Market Place</li>
            </ul>
            <img src={bottomDesign} className='mt-3' alt="" />
        </div>
        </>
    )
}

export default Sidebar