import React from 'react'
import Container from './Container';

const Footer = () => {
  const date = new Date();
  return (
    
    
     <footer className="mx-5 text-white py-2 text-center bg-black mt-auto ">
      &copy; {date.getFullYear()}
      <a href="http:///mms-it.com" className=' underline text-gray-300'>
      MMS IT
      </a>
      .All rights reserved.
    </footer>
    
    
  )
}

export default Footer