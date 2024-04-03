import React from 'react'
import svg from "./img/icon.png"

const Reverse = () => {
  return (
    <div>
        <div className="flex justify-center gap-14 items-center px-20 py-5 hover:bg-purple-600 hover:text-white transition-all bg-white duration-300">
                <div className='bg-purple-600 rounded-full hidden xl:flex p-5 border border-purple-600 hover:border-white transition-all duration-300'>
                    <img src={svg} alt="" className='w-10'/>
                </div>
                <div className='flex flex-col gap-2 justify-end items-end'>
                    <h1 className='text-2xl font-bold'>Super Tezkor Server</h1>
                    <p className='text-xl items-end'>This is a wider card with supporting <br /> text below as a natural lead-in to <br />additional content. This content is a <br /> little bit longer.</p>
                </div>
            </div>
    </div>
  )
}

export default Reverse