import React,{useState} from 'react'
import Storylogo from '../Stories/Storylogo'

function Feed() {
    const[isclicked,setisclicked]=useState()
  return (
    <>
    <div>
        <div className='flex justify-between items-center'>
            <h1 className=''>Instagram</h1>
            <div className='flex items-center justify-end gap-x-12 mr-5'>
            <div>
                <button className='bg-gray-200 px-0.5 py-1'>🔍</button>
                <input type="search" placeholder='Search' className='bg-gray-200 focus:outline-none py-1 px-1' />
            </div>
            <button className='text-4xl text-black' onClick={()=>setisclicked(!isclicked)}>{
            isclicked ? '♥':'♡'}</button>
            </div>
        </div>
    </div>
    <div className='flex'>
                <Storylogo/>
                <Storylogo/>
                <Storylogo/>
                <Storylogo/>
                
    </div>
    </>
  )
}

export default Feed