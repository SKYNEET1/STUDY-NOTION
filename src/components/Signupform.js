import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signupform = ({ setisloggedin }) => {
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const [showpassword, setshowpassword] = useState(false);
    const [showpassword1, setshowpassword1] = useState(false);
    const [acctype, setacctype] = useState("student");

    function changehandler(event) {
        setformdata(prevdata => ({
            ...prevdata,
            [event.target.name]: event.target.value
        }));
    }

    function submithandler(e) {
        e.preventDefault();
        if (formdata.password !== formdata.confirmpassword) {
            toast.error("Passwords do not match");
            return;
        }
        setisloggedin(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-1 my-6 rounded-full max-w-max'>
                <button 
                    className={`${acctype === "student" ? "bg-richblack-900  text-richblack-200 " : "bg-transparent text-richblack-200 "}py-2 px-5 rounded-full transition-all duration-200`} 
                    onClick={() => setacctype("student")}
                >
                    Student
                </button>
                
                <button 
                    className={`${acctype === "instructor" ? "bg-richblack-900  text-richblack-200 " : "bg-transparent  text-richblack-200 "}py-2 px-5 rounded-full transition-all duration-200`} 
                    onClick={() => setacctype("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submithandler}>
                <div className='flex justify-between mt-4'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-red-600'>*</sup></p>
                        <input 
                            required
                            type='text'
                            name='firstname'
                            onChange={changehandler}
                            placeholder='Enter First Name'
                            value={formdata.firstname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-red-600'>*</sup></p>
                        <input 
                            required
                            type='text'
                            name='lastname'
                            onChange={changehandler}
                            placeholder='Enter Last Name'
                            value={formdata.lastname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-600'>*</sup></p>
                    <input 
                        required
                        type='email'
                        name='email'
                        onChange={changehandler}
                        placeholder='Enter Email Address'
                        value={formdata.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <div className='flex justify-between'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-red-600'>*</sup></p>
                        <input 
                            required
                            type={showpassword ? "text" : "password"}
                            name='password'
                            onChange={changehandler}
                            placeholder='Enter Password'
                            value={formdata.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[38px]' onClick={() => setshowpassword(prev => !prev)}>
                            {showpassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-red-600'>*</sup></p>
                        <input 
                            required
                            type={showpassword ? "text" : "password"}
                            name='confirmpassword'
                            onChange={changehandler}
                            placeholder='Confirm Password'
                            value={formdata.confirmpassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[40px]' onClick={() => setshowpassword1(prev => !prev)}>
                            {showpassword1 ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 p-2 mt-6'>
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Signupform;
