import React from 'react'
import Pov from '../Suggestions/Pov'

function Profile({ username = 'niamhhendx', img = 'https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186104.jpg',followers='aroha.pooletofa10' }) {
  return (
    <>
      <div>
        <div className='w-full border-y border-gray-300 md:hidden flex flex-row justify-between items-center'>
          <div className='flex ml-5 items-center'>
            <button className='text-3xl h-10'>{'<'}</button>
          </div>
          <div className='flex justify-start w-[60%] items-center'>
            <h1 className='py-1.5 text-center font-semibold'>{username}</h1>
          </div>
        </div>
      </div>

      <section className='border-b-2'>
        <div className='flex flex-row items-center md:justify-center md:items-center  gap-x-5  border-gray-400'>
          <div className='md:w-full md:flex md:justify-end ml-3 md:ml-0'>
          <div className="h-24 w-24  md:h-40 md:w-40 flex justify-start overflow-hidden rounded-full">
            <img
              src={img}
              alt="user image"
              className="object-cover w-full h-full"
            />
          </div>
          </div>

          <div className='flex ml-5 w-full justify-start'>
            <div className='flex pl-2 pb-2 md:flex-row flex-col gap-2 md:gap-4'>
              <div className='flex md:gap-4'>
              <h1 className='text-2xl mr-2'>{username}</h1>  
              <button className='font-bold text-2xl md:order-last flex justify-start' onClick={() => alert('soon available')}>...</button>
              </div>
          
              <button className='text-white font-semibold cursor-pointer order-last hover:bg-blue-600 bg-blue-500 rounded-md h-7 w-40 md:w-20'>Follow</button>
            </div>
          </div>
        </div>
        <div className='ml-3 mb-4 '>
          <h1 className='mt-4 font-semibold mb-2'>{username}</h1>
          <div className='flex items-center gap-1 font-semibold'>
          <p className='text-sm text-gray-700 opacity-80'>Followed by</p>
          <p className='text-sm '>{followers}</p>
          </div>
        </div>
        <div className='border-t border-gray-300 '>
          <div className='flex justify-evenly items-center py-3'>
            <div className='text-center'>
              <p>0</p>
              <p className='text-gray-500'>posts</p>
            </div>
            <div className='text-center'>
              <p>17</p>
              <p className='text-gray-500'>followers</p>
            </div>
            <div className='text-center'>
              <p>23</p>
              <p className='text-gray-500'>following</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className='flex justify-center'>
          <img src="https://media.istockphoto.com/id/936681148/vector/lock-icon.jpg?s=612x612&w=0&k=20&c=_0AmWrBagdcee-KDhBUfLawC7Gh8CNPLWls73lKaNVA=" alt="" className='w-16 h-16' />
          <div>
          <span>This account is private</span>
          <p>Follow to see their photos and videos.</p>
          </div>
          </div>
          <div className='px-10 flex justify-center'>
          <button className='text-white font-semibold cursor-pointer order-last hover:bg-blue-600 bg-blue-500 rounded-md h-8 w-full items-center md:w-20'>Follow</button></div>
      </div>
      <div className='mt-3'>
        <div className='flex justify-between px-5'>
          <span className=''>Suggested for you</span>
          <span className='text-blue-500'>See all</span>
        </div>
        <div className='flex ml-2 gap-1 mt-2'>
      <Pov/>
      <Pov username='Hazel woods' nickname='hailey ups' img='https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg' />
      <Pov username='Nicolas robin' nickname='tesla_coil' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s'/>
        </div>
      </div>
    </>
  )
}

export default Profile
