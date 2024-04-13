import React, { useState } from 'react'
import educatorImg from '../../assets/teacher_12116396 1.png'
import studentImg from '../../assets/computer_3749781 1.png'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar'

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (option) => {
    console.log(selectedOption)
    setSelectedOption(option);
  };
  const optionData = [
    { name: "Educator", img: educatorImg, option: 1 },
    { name: "Learner", img: studentImg, option: 2 },
  ]

  const [currentSection, setCurrentSection] = useState(1);

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
      <Navbar />
      <header className='flex gap-5 justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className={`px-3 py-1 ${currentSection===1 ? 'bg-amber-600 text-white ':''} rounded-full border border-black`}>1</span>
          <p>Account Type</p>
        </div>
        <div className='w-32 p-0  border-black border-t-2'></div>
        <div className='flex flex-col justify-center items-center'>
          <span className= {`${currentSection===2 ? 'bg-amber-600 text-white ':''} px-3 py-1 rounded-full border border-black`}>2</span>
          <p>Fill Details</p>
        </div>
        <div></div>
        <div className='w-32 p-0  border-black border-t-2'></div>
        <div className='flex flex-col justify-center items-center'>
        <span className= {`${currentSection===3 ? 'bg-amber-600 text-white ':''} px-3 py-1 rounded-full border border-black`}>3</span>
          <p>Submit</p>
        </div>
      </header>
      <div>
        {currentSection === 1 && (
          <FirstSection onNext={handleNextSection} handleOptionSelect={handleOptionSelect} optionData={optionData} selectedOption={selectedOption} />
        )}
        {currentSection === 2 && (
          <SecondSection onNext={handleNextSection} />
        )}
        {currentSection === 3 && (
          <ThirdSection />
        )}
      </div>
    </div>
  )
}
const FirstSection = ({ onNext, handleOptionSelect, optionData, selectedOption }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl font-semibold'>Welcome to Learnect</h1>
        <p className='w-96 text-center font-medium'>Are you signing up as an Educator or a Learner? Choose account type.</p>
      </div>
      <div className='flex justify-center gap-20 items-center mt-10'>
        {optionData.map((elem, key) => (
          <div key={elem.option}>
            <div className={`border-2 ${selectedOption === elem.option ? 'bg-[#FFE3BA]' : 'bg-zinc-100'} hover:bg-[#FFE3BA] border-black rounded-xl p-8`} onClick={() => handleOptionSelect(elem.option)}>
              <img src={elem.img} alt="" />
            </div>
            <p className='text-[#DD8300] font-bold text-center pt-2'>{elem.name}</p>
          </div>
        ))}
      </div>
      {/* <button onClick={() => onNext} className='bg-amber-600 mt-10 px-52 py-2 rounded shadow'>Next</button> */}

      <button className='bg-amber-600 mt-10 px-52 py-2 rounded shadow' onClick={onNext}>Next</button>
    </div>
  );
};
const SecondSection = ({ onNext }) => {

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-semibold">Fill your Details</h1>
        <p className="w-96 text-center font-medium">
          Fill your details to move towards next step.
        </p>
      </div>
      <div className="w-[130%]">
        <form
          className="mt-3 flex flex-col justify-center"
        >
          <div className="flex justify-between">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="firstName" className="font-medium text-sm">
                First Name
              </label>
              <input
                type="text"
                className="p-2 mt-1"
                name="firstName"
              />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="firstName" className="font-medium text-sm">
                Last Name
              </label>
              <input type="text" className="p-2 mt-1" />
            </div>
          </div>
          <label htmlFor="email" className="mt-3 font-medium text-sm">
            Email
          </label>
          <input type="email" className="p-2 mt-1" />
          <div className="flex justify-between mt-3">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="password" className="font-medium text-sm">
                Password
              </label>
              <input type="password" className="p-2 mt-1" />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="password" className="font-medium text-sm">
                Confirm Password
              </label>
              <input type="password" className="p-2 mt-1" />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex flex-col w-[48%]">
              <label htmlFor="qualification" className="font-medium text-sm">
                Highest Qualification
              </label>
              <input
                type="text"
                name="qualification"
                id=""
                className="p-2 mt-1"
              />
            </div>
            <div className="flex flex-col w-[48%]">
              <label htmlFor="yoe" className="font-medium text-sm">
                No. of years of teaching experience
              </label>
              <input type="text" name="yoe" id="" className="p-2 mt-1" />
            </div>
          </div>
          <label htmlFor="certificate" className="font-medium text-sm mt-3">
            Upload experience Certificate
          </label>
          <input
            type="file"
            name=""
            id=""
            accept="image/*"
            className="p-2 mt-1"
          />

          <label htmlFor="checkbox">
            <input
              type="checkbox"
              required
              name="checkbox"
              id=""
              className="self-start p-20 mt-4"
            />{" "}
            I accept the{" "}
            <NavLink className="text-amber-600">Terms of Service</NavLink> and{" "}
            <NavLink className="text-amber-600">Privacy Policy</NavLink>
          </label>
        </form>
      </div>
      <button className='bg-amber-600 mt-2 mb-5 px-52 py-2 rounded shadow' onClick={onNext}>Next</button>
    </div>
  );
};
const ThirdSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl font-semibold'>Fill your Details</h1>
        <p className='w-96 text-center font-medium'>Fill your details to move towards next step.</p>
      </div>
      <div>
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
      <button className='bg-amber-600 mt-10 px-52 py-2 rounded shadow'>Submit</button>
    </div>
  );
};
export default SignUp