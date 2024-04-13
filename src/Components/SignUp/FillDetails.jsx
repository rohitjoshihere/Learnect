import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const FillDetails = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(errors);
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <Navbar />
      <header className="flex gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="px-3 py-1 rounded-full border border-black">1</span>
          <p>Account Type</p>
        </div>
        <div className="w-32 p-0  border-black border-t-2"></div>
        <div className="flex flex-col justify-center items-center">
          <span className="px-3 py-1 bg-amber-600 rounded-full text-white border border-black">
            2
          </span>
          <p>Fill Details</p>
        </div>
        <div></div>
        <div className="w-32 p-0  border-black border-t-2"></div>
        <div className="flex flex-col justify-center items-center">
          <span className="px-3 py-1 rounded-full border border-black">3</span>
          <p>Submit</p>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-semibold">Fill your Details</h1>
        <p className="w-96 text-center font-medium">
          Fill your details to move towards next step.
        </p>
      </div>
      <div className="w-[40%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col justify-center"
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
                {...register("firstName", { required: true })}
              />
              {/* {errors?.firstName && <span>This field is required</span>} */}
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
      <NavLink to="/LoginDetails">
        <button className="bg-amber-600 mt-10 px-52 py-2 rounded shadow">
          Next
        </button>
      </NavLink>
    </div>
  );
};

export default FillDetails;
