import axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'


const UpdateUser = () => {
  const navigate=useNavigate();
  const data=useLoaderData();
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    axios.put(`http://localhost:5000/api/employee/${form.id.value}`, {
      id: form.id.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age: form.age.value,
      position: form.position.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      image: form.image.value,
      department: form.department.value,
      joiningDate: form.joiningDate.value,
      salary: form.salary.value,
      skills: form.skills.value,
      education: [{
        degree: form.degree.value,
        university: form.university.value,
        graduationYear: form.graduationYear.value
      }]
    })
      .then((response) => {
        if(response.status==200){
          alert("Employee updated successfully");
          navigate("/");
        }
       else{
        alert("Employee not updated successfully");
       }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className=" bg-slate-600  overflow-hidden flex items-center justify-center pb-16">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
        <form className="p-8 " onSubmit={handleSubmit}>
          <div className=' content-center text-3xl font-bold mb-6 md:mb-8 text-gray-800'>Employee Information Form</div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.id} type="number" name="id" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Id" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.firstName} type="text" name="firstName"   className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="First Name" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.lastName} type="text" name="lastName" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Last Name" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.age} type="number" name="age" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Age" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.position} type="text" name="position" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Position" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.email} type="text" name="email" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.phone} type="text" name="phone" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Phone Number" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.address} type="text" name="address" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Address" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.image} type="text" name="image" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Image URL" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.department} type="text" name="department" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Department" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.joiningDate} type="text" name="joiningDate" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Joining Date" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.salary} type="number" name="salary" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Salary" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.skills} type="text" name="skills" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Skills" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.education[0].degree} type="text" name="degree" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Degree" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.education[0].university} type="text" name="university" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="University" required />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <input defaultValue={data.education[0].graduationYear} type="number" name="graduationYear" className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Graduation Year" required />
          </div>
          <button type="submit" className="border-gray-50 bg-gradient-to-b from-cyan-700 to-cyan-900 font-medium p-2 md:p-4 text-white w-1/5 rounded">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser