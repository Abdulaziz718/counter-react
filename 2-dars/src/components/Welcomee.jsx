import React, { useState } from 'react'

const Welcomee = () => {  
    const [number, setNumber] = useState(0);
    const clickIncrease = () =>{
      setNumber(number +1)
    };
    const clickDecrease = () =>{
      setNumber(number -1)
    };
    const resetFunc = () => {
      setNumber(0)
    };
    
  return (
    <>
        <div className="min-h-screen flex flex-col justify-center text-center items-center gap-16">
          <h1 className={` text-8xl ${number>0 ? "text-green-500 " : number<0 ?  "text-red-500" : "text-black"}`}>{number}</h1>
          <div className="flex gap-5">
            <button className='px-5 py-2 border border-red-500 rounded cursor-pointer bg-red-700 text-white hover:bg-transparent hover:text-black transition-all duration-300 after1' onClick={clickDecrease}>Decrease</button>
            <button className='px-5 py-2 border border-black rounded cursor-pointer after1 transition-all duration-300' onClick={resetFunc}>Reset</button>
            <button className='px-5 py-2 border border-green-500 rounded cursor-pointer bg-green-500 hover:bg-transparent hover:text-black text-white transition-all duration-300 after1' onClick={clickIncrease}>Increase</button>
          </div>
        </div>
    </>
  )
}

export default Welcomee