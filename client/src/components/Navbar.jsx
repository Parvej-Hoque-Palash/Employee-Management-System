import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [token,setToken]=useState(null);
  useEffect(()=>{
    setToken(localStorage.getItem("set-token-for-user"))
  },[token]);

  const handleLogOut=(e)=>{
    e.preventDefault();
      localStorage.removeItem("set-token-for-user");
      setToken(null);
      alert('Logout Successfully!');
  }
  return (
    <div className="flex justify-between items-center px-4 bg-white border-b dark:bg-blue-800 dark:border-blue-700 text-white font-bold h-16">
        <div>
        <a href="/" className="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Employee Management System Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EMS</span>
            </a>
        </div>
        <div className='flex justify-center items-center gap-x-4'>
        <Link to={"/"}> Home</Link>
        <Link to={"/addEmployee"}> Add Employee</Link>
        <Link to={"/dashboard"}> Dashboard</Link>
        </div>
        <div>
        {
          token?<Link onClick={handleLogOut}> Logout</Link>:<Link to={"/login"}> Login</Link>
        }
        </div>
    </div>
  )
}

export default Navbar