import React from 'react'
import frameImage from  '../assets/frame.png'
import Signupform from '../components/Signupform'
import Loginform from '../components/Loginform'
import {FcGoogle} from "react-icons/fc"


export const Template = ({title,desc1,desc2,image,formtype,setisloggedin}) => {
  return (
    <div className="bg-richblack-900  flex justify-center items-center">
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between '>

        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='texxt=[1.125rem leading-[1.625rem] mt-4'>
              <span className='text-richblack-100'>{desc1}</span>
              <br></br>
              <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? (<Signupform setisloggedin={setisloggedin}/>):(<Loginform setisloggedin={setisloggedin}/>)
            }

            <div  className='flex w-full items-center my-4 gap-x-2'>


                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className=' bg-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='h-[1px] bg-richblack-700 w-full'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
              <FcGoogle/>
              <p>Sign Up With Google</p>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
          <img 
          src={frameImage}
          alt='pattern'
          width={558}
          height={504}
          loading='lazy'/>

          <img 
          src={image}
          alt='students'
          width={558}
          height={504}
          loading='lazy'
          className='absolute -top-4 right-4'     
          />  
          
        </div>

        </div>
        </div>
  )
}

export default  Template;
