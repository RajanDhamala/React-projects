import React,{useState} from 'react'

function UserPost({userimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s',username='tinku_minku',time='10',content='video',likecount='96',commentcount=9 }) {
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
      }
      const [contenttype,setcontenttype]=useState(content)
      const [isclicked,setisclicked]=useState(false)
  return (
    <>
    <div className='flex justify-between  pt-4'>
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
      {contenttype =='video' ?
      <div className='px-1 py-2 h-[660px] overflow-hidden '>
      <video src="vdo.mp4" autoplay loop controls className='h-full w-full'></video>
      </div> : <div className='px-1 py-2 h-[660px] overflow-hidden'>
        <img src="photo.jpeg" alt=""  className='h-full w-full object-cover'/>
      </div>}
      <div className='flex gap-x-3 pl-1'>
      <button className={`text-4xl hover:opacity-70 hover:scale-105 ${isclicked ? 'text-red-500':'text-gray-600'} `} onClick={(e)=>setisclicked(!isclicked)}>{
            isclicked ? '♥':'♡'}</button>
            <button className='text-2xl font-bold hover:opacity-80 hover:scale-105'>🗨️</button>
           <button className='text-2xl  font-bold hover:opacity-50 hover:scale-105'>➤</button>
    <div className='absolute flex justify-end w-full pr-4 mt-1.5 -z-50'>
           <div className='h-5 w-5 overflow-hidden '>
              <img src="save.png" alt="" className='h-full w-full' />
            </div>
            </div>
            </div>


            <div className='px-2 mt-1'>
              <h1>{likecount} likes</h1>
              <p>View all {commentcount} comments</p>
              <div>
              <input type="text" className='bg-white focus:outline-none w-96 ' placeholder='Add . comment..' />
              </div>
            </div>
            
      
      
    </>
  )
}

export default UserPost