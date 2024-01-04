import React from 'react'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <div className='flex flex-col bg-white'>
        <div className='flex flex-1 p-3 justify-around gap-x-4'>
            <div className='flex flex-col flex-1 items-center p-6 mt-auto mb-auto'>
                <h1 className='font-bold text-xl mb-3'>Employee Management System</h1>
                Introducing our Employee Management System, a user-friendly solution empowering administrators to seamlessly add, update, and delete employee records. The intuitive interface facilitates efficient HR processes, ensuring that the workforce data remains current and well-organized. Admins benefit from a comprehensive dashboard offering quick insights into key metrics, facilitating informed decision-making. Meanwhile, regular users, with restricted access, can view an employee list, prioritizing data confidentiality. The system prioritizes security, guaranteeing that only authorized personnel can modify sensitive information. Overall, our Employee Management System optimizes administrative tasks, providing a centralized hub for streamlined HR operations and enhancing the overall management of your organization's workforce.
            </div>
            <div className='flex flex-col flex-1 items-center p-6 mt-6'>
            <img className='w-full' src={'https://i.ibb.co/pZdhQwG/image-0.jpg'} alt="Image from ImageBB" />
            </div>
        </div>
        <div className='flex flex-1 p-3 justify-around gap-x-4'>
            <div className='flex flex-col flex-1 items-center p-6 mt-6'>
            <img className='w-full' src={'https://i.ibb.co/KLjT3dv/image-0-2.jpg'} alt="Image from ImageBB" />
            </div>
            <div className='flex flex-col flex-1 items-center p-6 mt-auto mb-auto'>
                <h1 className='font-bold text-xl mb-3'>About Us</h1>
                Welcome to our Employee Management System, where efficiency meets excellence in workforce management. At our core, we are dedicated to providing a seamless and intuitive platform for businesses to oversee their human resources. Our system is meticulously crafted to empower administrators with tools for adding, updating, and deleting employee records effortlessly. We understand the importance of data security and confidentiality, ensuring that our platform prioritizes these aspects while maintaining a user-friendly interface. As a team, we are committed to streamlining HR processes, offering administrators a comprehensive dashboard for informed decision-making. Regular users experience a simplified view, preserving the integrity of sensitive information. Our Employee Management System represents a commitment to innovation, efficiency, and the overall success of your organization. Join us in revolutionizing the way you manage your workforce.
                
            </div>
        </div>
        <div className='flex flex-1 p-3 justify-around gap-x-4'>
            <div className='flex flex-col flex-1 items-center p-6 mt-auto mb-auto'>
                <h1 className='font-bold text-xl'>Contact Us</h1>
                <div>
                <ContactForm />
                </div>
            </div>
            <div className='flex flex-col flex-1 items-center p-6 mt-6'>
            <img className='w-full' src={'https://i.ibb.co/yB2Ysm8/image-0-1.jpg'} alt="Image from ImageBB" />
            </div>
        </div>
    </div>
  )
}

export default Home