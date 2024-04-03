import React from 'react'
import svg from "./img/icon.png"

const Share = () => {
  return (
    <>
        <div className="flex flex-row lg:flex-col mt-10 gap-5">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <img src={svg} alt="" className='w-20'/>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Bulutli VPN</h1>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </>
  )
}

export default Share