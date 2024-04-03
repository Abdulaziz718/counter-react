import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [name, setName] = useState("")
  console.log(`Hello ${name}`);
  return (
    <>
        <Child setName = {setName}/>
    </>
  )
}

export default Parent