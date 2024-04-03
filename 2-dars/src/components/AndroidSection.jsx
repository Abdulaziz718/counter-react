import React from 'react'
import java from "./img/partner-3.png.webp"
import android from "./img/partner-2.png.webp"
import microsoft from "./img/partner-1.png.webp"
import google from "./img/partner-4.png.webp"
import adobe from "./img/partner-5.png.webp"


const AndroidSection = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-5 px-8 md:px-10 lg:px-[110px] gap-10 my-10">
            <div>
                <img src={java} alt="" className='opacity-30 hover:opacity-100 transition-all duration-300'/>
            </div>
            <div>
                <img src={android} alt="" className='opacity-30 hover:opacity-100 transition-all duration-300'/>
            </div>
            <div>
                <img src={microsoft} alt="" className='opacity-30 hover:opacity-100 transition-all duration-300'/>
            </div>
            <div>
                <img src={google} alt="" className='opacity-30 hover:opacity-100 transition-all duration-300'/>
            </div>
            <div>
                <img src={adobe} alt="" className='opacity-30 hover:opacity-100 transition-all duration-300'/>
            </div>
        </div>
    </>
  )
}

export default AndroidSection