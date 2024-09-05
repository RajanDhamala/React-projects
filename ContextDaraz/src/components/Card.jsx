import React,{useState} from 'react'

function Card() {
  const [count,setcount]=useState('')
  return (
    <div className='h-full w-full flex justify-center '>
        <div className='bg-gray-300 w-96 h-96 mt-5 flex items-center flex-col'>
            <div className='size-72'>
            <img src="https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLm5wL3AvNTQyMDg3YmY2YTA4MzA5ZDFhMjUwODFhMjNkNDI5MGEuanBn_400x400q75.png_.webp" alt="" className='w-full h-full' /></div>
            <div className='mx-5 flex flex-col'><h1 className='text-center text-1xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sit?</h1>
            <h1>Rs. 885</h1>
            <p>41% off</p>
            <div>
              <button onClick={(e)=>setcount((prev)=>prev+1)}>-</button>
              <h1>count:{count}</h1>
              <button>+</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card