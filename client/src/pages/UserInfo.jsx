import axios from 'axios';
import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const UserInfo = () => {
  const data=useLoaderData();
  const handleDelete=(id)=>{
    swal({
      title: "Good job!",
      text: "Successfully deleted!",
      icon: "success",
    });
   axios.delete(`https://server-phi-blush.vercel.app/api/employee/${id}`)
   .then(res=>console.log(res.data));
  }
  console.log(data);
  return (
    <div className='flex align-center justify-center'>
    <div className='flex flex-col text-center align-center justify-center bg-slate-300 ml-auto mr-auto mt-16 mb-16 pr-6 pl-6 pb-6 rounded-md'>
      <div>
        <h1 className='p-10 text-3xl'>Employee Profile</h1>
      </div>
      <div className='flex ml-auto mr-auto'>
        <div>
        <div className='w-80 pt-6'><img src={data.image} alt='Image' className='w-full'></img></div>
        </div>
        <div className='text-left p-6 rounded-lg'>
          <div><span className='text-lg font-semibold'>ID : </span><span>{data.id}</span></div>
          <div><span className='text-lg font-semibold'>Full Name : </span>{data.firstName} {data.lastName}</div>
          <div><span className='text-lg font-semibold'>First Name : </span>{data.firstName}</div>
          <div><span className='text-lg font-semibold'>Last Name : </span>{data.lastName}</div>
          <div><span className='text-lg font-semibold'>Age : </span>{data.age}</div>
          <div><span className='text-lg font-semibold'>Position : </span>{data.position}</div>
          <div><span className='text-lg font-semibold'>Email : </span>{data.email}</div>
          <div><span className='text-lg font-semibold'>Phone : </span>{data.phone}</div>
          <div><span className='text-lg font-semibold'>Address : </span>{data.address}</div>
          <div><span className='text-lg font-semibold'>Department : </span>{data.department}</div>
          <div><span className='text-lg font-semibold'>Joining Date : </span>{data.joiningDate}</div>
          <div><span className='text-lg font-semibold'>Salary : </span>{data.salary}</div>
          <div><span className='text-lg font-semibold'>Skills : </span>{data.skills}</div>
          <div><span className='text-lg font-semibold'>Degree : </span>{data.education[0].degree}</div>
          <div><span className='text-lg font-semibold'>University : </span>{data.education[0].university}</div>
          <div><span className='text-lg font-semibold'>Graduation Year : </span>{data.education[0].graduationYear}</div>

          <div className='flex justify-around mt-5'>
            <div className='bg-red-600 text-white px-6 py-1 rounded-md'><button onClick={()=>handleDelete(data.id)}>Delete</button></div>
            <div className='bg-blue-600 text-white px-6 py-1 rounded-md'><Link to={`/update/${data.id}`} >Update</Link></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserInfo