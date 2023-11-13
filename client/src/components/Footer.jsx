import React from 'react'

const Footer = () => {
  return (
    
<footer className="bg-white lg shadow dark:bg-gray-900 fixed bottom-0 left-0 right-0">
    <div className="w-full max-w-screen-xl mx-auto p-0 md:py-2">
        <div className="sm:flex sm:items-center sm:justify-between px-2">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Employee Management System Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Employee Management System</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 pr-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Employee Management System™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer