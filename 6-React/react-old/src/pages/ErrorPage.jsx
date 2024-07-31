import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
   <section className='w-full h-screen flex justify-center items-center'>
    <div className="text-center">
        <h1 className=' text-5xl font-bold mb-3'>404 Not Found</h1>
        <p className='w-96 mb-5 text-gray-500 '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas nihil modi odit blanditiis animi voluptate eligendi ea id unde?
        </p>
        <Link to={"/"} className='border border-black px-4 py-1'>Return to Home</Link>
    </div>
   </section>
  )
}

export default ErrorPage