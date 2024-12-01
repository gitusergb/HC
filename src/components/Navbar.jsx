import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-white drop-shadow-lg mb-3 z-50">
    <div className="container mx-auto flex justify-around items-center py-2 px-2 ">
        <div className="flex items-center">
            <img src="https://www.jobringer.com/images/logonew.svg" alt="JobRinger Logo" className="h-12 w-180"/>
            <span className='text-lg uppercase decoration-solid ml-20'> Bringing you<span className="ml-2 text-lg font-bold uppercase text-blue-600">the Perfect Job</span></span>
        </div>
        <nav className="flex space-x-4 font-semibold text-center align-middle justify-between">
            <a href="#" className="text-gray-900 mx-3">Jobs</a>
            <a href="#" className="text-gray-900 mx-3">Active Employers</a>
            <a href="#" className="text-gray-900 mx-3">Pricing</a>
            <a href="#" className="text-gray-900 bg-slate-50 px-2 py-1 rounded" type='button'> Jobseeker Login</a>
            <a href="#" className="bg-yellow-400 text-gray-900 px-4 py-1  rounded" type='button'>Employer Login</a>
        </nav>
    </div>
</header>
<div className="mx-4 flex justify-around items-center px-3 bg-gradient-to-r from-cyan-400 to-blue-900 text-white text-center py-3 rounded">
   <span className="uppercase text-3xl font-medium">Employers</span>
    <span className=' text-lg font-bold'>WELCOME OFFER - FREE JOB Postings and Much More.</span>
    <div className='text-sm font-semibold'>
    <button className="bg-yellow-400 text-black px-4 py-2 ml-4 rounded">Register for FREE</button>
    <button className="bg-white text-gray-900 px-4 py-2 ml-2 rounded">Post A Job</button>
    <a href="#" className="text-white underline ml-4">Sales Enquiry</a>
    </div>
    
</div>
</>
  )
}

export default Navbar