import React, { useContext } from 'react'
import CardContext from '../Context/CardContext'

const { count }=useContext(CardContext)

function Buy() {
  return (
    <>
    <div>
        <h1 className='text-2xl font-semibold'>You ordered placed no of mouse,keyboard{count}</h1>
    </div>
    </>
  )
}

export default Buy