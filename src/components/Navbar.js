import React from "react";
import logo from  '../assets/Logo.svg';
import {Link} from  'react-router-dom';
import {toast} from "react-hot-toast";



const Navbar = (props) => {
    let isloggedin = props.isloggedin;
    let setisloggedin = props.setisloggedin;
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

        <Link to="/">
        <img src={logo} width={160} height={32} loading="lazy"></img>
        </Link>

        <nav>
            <ul className="text-richblack-100 flex gap-6">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/">ABOUT</Link>
                </li>
                <li>
                    <Link to="/">CONTACT</Link>
                </li>
            </ul>
        </nav>

        <div className="flex items-center  gap-x-4 ">
            {!isloggedin &&
            // it means this button will work if it is not loggedin.
                <Link to="/Login">
                    <button className="bg-richblack-800 text-richblack-100 p-2 py-[8px] pc-[12px] rounded-[8px] border border-richblack-700" >
                        Login
                        </button >
                </Link>
}{!isloggedin &&
                <Link to="/Signup">
                    <button className="bg-richblack-800 text-richblack-100 p-2 py-[8px] pc-[12px] rounded-[8px] border border-richblack-700">
                        SignUp</button>
                </Link>
}{isloggedin &&
                <Link to="/">
                    <button className="bg-richblack-800 text-richblack-100 p-2 py-[8px] pc-[12px] rounded-[8px] border border-richblack-700"
                     onClick={() => {
                        setisloggedin(false);
                        toast.success("Logged Out");
                    }}>LogOut</button>
                </Link>
}{isloggedin &&
                <Link to="/Dashboard">
                    <button className="bg-richblack-800 text-richblack-100 p-2 py-[8px] pc-[12px] rounded-[8px] border border-richblack-700">
                        Dashboard</button>
                </Link>
}
        </div>

        </div>
    )
}
export default Navbar;