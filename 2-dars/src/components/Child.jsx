import React from 'react'

const Child = ({setName}) => {
  return (
    <> 
        <center>
            <button className='px-5 py-2 bg-green-600 text-white mt-5 rounded after1 hover:bg-transparent hover:text-black transition-all duration-300 border border-green-500' onClick={()=>setName("Bob")}>click me</button>
        </center>
    </>
  )
}

export default Child