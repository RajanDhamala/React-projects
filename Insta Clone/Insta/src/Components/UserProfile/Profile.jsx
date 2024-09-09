import React from 'react'

function Profile({username='niamhhendx',}) {
  return (
    <>
    <div>
        <div className='w-full border-y border-gray-300 md:hidden flex flex-row justify-between items-center'>
        <div className='flex ml-5 items-center'>
        <button className='font-semibold text-3xl'>{'<'}</button>
        </div>
        <div className='flex justify-start w-72 items-center'>
            <h1 className='py-1.5 text-center font-semibold'>{username}</h1>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Profile