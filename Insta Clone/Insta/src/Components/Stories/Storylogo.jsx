import React from 'react';

function Storylogo({ imgsrc='https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186104.jpg',username='tinku_bahdur' }) {
  return (
    <>
    <div  className='px-2'>
    <div className="flex justify-center items-center">
      <div className='h-20 w-20 rounded-full border-2 border-gray-200 flex justify-center items-center'>
        <div className='h-16 w-16 rounded-full overflow-hidden'>
          <img src={imgsrc} alt="story" className='w-full h-full object-cover' />
        </div>
      </div>
    </div> 
    <h2 className='text-sm text-gray-700 cursor-pointer'>{username}</h2>
    </div>
    </>
  );
}

export default Storylogo;
