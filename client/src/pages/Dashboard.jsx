import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Dashboard = () => {
    const data=useLoaderData();
    const ageSum = data.reduce((total, currentObject) => total + currentObject.age, 0);
    console.log(ageSum);
  return (
    <div className='text-center m-12 text-white pb-16'>
      <h1 className="text-3xl mb-6">User Dashboard</h1>
      <div className="flex justify-center items-center text-xl">
      <div className="mr-12">
        <h2 className="text-xl font-bold mb-2"> Total Users: </h2>
        <p>{data.length}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Average age:</h2>
        <p>{(ageSum/data.length).toFixed(2)}</p>
      </div>
      </div>
    </div>
  )
}

export default Dashboard