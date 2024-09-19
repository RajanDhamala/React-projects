import React,{useState} from 'react'

function UserPost({userimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s',username='tinku_minku',time='10' }) {
    function convotime(time) {
        if (time < 60) {
          return `${time} sec`;
        } else if (time < 3600) {
          const minutes = Math.floor(time / 60);
          return `${minutes} min${minutes > 1 ? 's' : ''}`;
        } else if (time < 86400) {
          const hours = Math.floor(time / 3600);
          return `${hours} hour${hours > 1 ? 's' : ''}`;
        } else {
          const days = Math.floor(time / 86400);
          return `${days} day${days > 1 ? 's' : ''}`;
        }

        const [contenttype,setcontenttype]=useState('text')
      }
  return (
    <>
    <div className='flex justify-between border-t border-t-gray-500 pt-4'>
    <div className='flex items-center gap-x-1'>
      <div className='h-10 w-10 rounded-full overflow-hidden'>
        <img src={userimg} alt='story' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col'>
      <h1 className='text-sm font-semibold'>{username.toLowerCase()}</h1>
        <p className='text-xs font-semibold text-gray-500'>Orginal audio</p>
      </div>
      <div className='flex relative mb-3.5'>
        <h1 className='text-sm font-bold text-gray-500'>.</h1>
        <p className='text-sm'>{convotime(time) +' ago'}</p>
      </div>
      </div>

      <div>
        <button className='rotate-90 mr-5 font-bold text-[20px]'>⫶</button>
      </div>
      </div>
      <div>
        <video src=""></video>
      </div>
    </>
  )
}

export default UserPost