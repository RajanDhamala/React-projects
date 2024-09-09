import React from 'react';

function Pov({username='Tinky',nickname='heidz',img='https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186104.jpg'}) {
  return (
    <>
    <div className="h-48 w-40 border border-gray-500">
      <div className="flex justify-end mr-3 mt-1">
        <h1 className="text-gray-500 font-semibold cursor-pointer">✕</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-24 w-24 flex justify-center overflow-hidden rounded-full">
          <img
            src={img}
            alt="recomended usr image"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className='font-bold'>{username}</h1>
        <h3 className=' text-gray-500'>{nickname}</h3>
      </div>
    </div>
    <div className='w-40 h-10 border border-gray-500 flex justify-center items-center'>
        <h1 className='text-blue-500 font-semibold cursor-pointer hover:text-gray-600'>Follow</h1>
    </div>
    </>
  );
}

export default Pov;
