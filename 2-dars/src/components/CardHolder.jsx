import React from 'react'
import Card from './Card'
import Reverse from './Reverse'

const CardHolder = () => {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card/>
            <Reverse/>
            <Card/>
            <Reverse/>
            <Card/>
            <Reverse/>
        </div>
    </>
  )
}

export default CardHolder