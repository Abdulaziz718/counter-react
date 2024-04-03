import React from 'react'
import img from "./img/image.png"

const MainSection = () => {
  return (
    <>
        <div className='grid grid-cols-2 items-center px-8 md:px-10 lg:px-[110px] mb-10'>
            <div className='lg:mt-0 mt-10'>
                <h1 className='text-purple-700 font-bold'>IZOMETRIK XOSTING</h1>
                <h1 className='text-7xl font-bold line'>Dizayn, Rivojlanish, Xosting </h1>
                <p className='text-lg mt-1 text-slate-400 w-[370px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <button className='touch border border-purple-600 bg-purple-600 px-12 py-4 rounded-md text-white mt-5 hover:bg-white hover:text-purple-600 transition-all duration-300'>Get in touch</button>
            </div>
            <div className='hidden md:flex'>
                <img src={img} alt="" />
            </div>
        </div>
    </>
  )
}

export default MainSection