import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar flex justify-between items-center px-8 md:px-10 lg:px-[110px] shadow-md pb-5">
            <div className='items-center mt-5'>
                <h1 className='text-xl font-bold'>CoHost</h1>
            </div>
            <div className='flex gap-10 items-center justify-center uppercase mt-5'>
                <ul className='lg:flex hidden gap-10 items-center justify-center'>
                    <li className='text-[15px]'>Home</li>
                    <li className='text-[15px]'>About</li>
                    <li className='text-[15px]'>Domain</li>
                    <li className='text-[15px]'>Hosting</li>
                    <li className='text-[15px]'>blog</li>
                    <li className='text-[15px]'>Contact</li>
                </ul>
                <button className="search border border-blue-500 px-12 py-3 rounded-3xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300">Search</button>
                <button className='lg:hidden visible  border border-blue-500 px-12 py-3 rounded-3xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300'>Sign Up</button>
            </div>
        </div>
    </>
  )
}

export default Navbar