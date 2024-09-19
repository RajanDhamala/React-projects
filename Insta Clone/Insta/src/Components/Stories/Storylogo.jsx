import React, { useState,useEffect } from 'react';

function Storylogo({
  imgsrc = 'https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186104.jpg',
  username = 'tinku_bahdur',
  visiblty=false,
}) {
  const [wasseen, setwasseen] = useState(visiblty);

useEffect(()=>{
  setwasseen(visiblty)
},[visiblty])

  return (
    <>
      <div className='px-2'>
        <div className='flex justify-center items-center'>
          <div
            className={`px-0.5 py-0.5 
               rounded-full border-[3px] flex justify-center items-center ${
              wasseen ? 'bg-gradient-to-bl from-pink-500  to-yellow-400 border-0' : ''
            }`}
          >
            <div className='h-16 w-16 rounded-full overflow-hidden'>
              <img src={imgsrc} alt='story' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
        <h2 className='text-sm text-gray-700 cursor-pointer'>{username}</h2>
      </div>
    </>
  );
}

export default Storylogo;
