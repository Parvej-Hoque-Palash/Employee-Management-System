import React from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate()
    
const handleSubmit=(event) =>{
    event.preventDefault()
    const form = event.target;
    axios.post('https://server-phi-blush.vercel.app/api/admin/register', {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    })
    .then((response)=> {
      swal({
        title: "Good job!",
        text: "Registration successful!",
        icon: "success",
      });
      navigate("/")
      console.log(response);
    })
    .catch((error) =>{
      console.log(error);
      alert("Username or email is already in use! Try another.")
    });
}

  return (
         <div className=" bg-slate-400 h-screen overflow-hidden flex items-center justify-center pb-16">
      <div className="bg-white lg:w-5/12 md:6/12  rounded-xl border-green-900 ">
    
      <form className="p-6" onSubmit={handleSubmit}>
      <div className="flex items-center text-lg mb-4 md:mb-6"> 
        <input type="text" name="username" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Username" />
      </div>
      <div className="flex items-center text-lg mb-4 md:mb-6"> 
        <input type="text" name="email" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Email" />
      </div>
      <div className="flex items-center text-lg mb-4 md:mb-6">
        <input type="password" name="password" className="bg-gray-200 rounded pl-12 py-1 md:py-2 focus:outline-none w-full" placeholder="Password" />
      </div>
      <div className='text-right'>
      <button type ="submit" className="border-gray-50 bg-gradient-to-b from-cyan-700 to-cyan-900 font-medium p-1 md:p-2 text-white w-1/5 rounded">Register</button>
      </div> 
    </form>
  </div>
 </div>
  )
}

export default Register