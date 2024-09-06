import React, { useEffect, useState } from 'react';
import Buy from './Buy';
import CardContext from '../Context/CardContext';

function Card() {
  const [count, setCount] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(0);
  const [mode, setMode] = useState('light');

  function handleMode() {
    const newMode = mode === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newMode);
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('mode') || 'light';
    setMode(savedMode);
    document.documentElement.classList.add(savedMode);
  }, []);

  return (
    <>
      <CardContext.Provider value={{orderPlaced}}>
        <div className='h-full w-full flex justify-center'>
          <div className='bg-gray-300 w-96 mt-5 flex items-center flex-col rounded-md pb-3 dark:bg-black'>
            <div className='flex w-full justify-end mt-2 mr-2'>
              <button onClick={handleMode} className='dark:text-white dark:bg-blue-500 dark:px-2 dark:rounded-md'>Change mode</button>
            </div>
            <div className='size-72'>
              <img src="https://img.lazcdn.com/3rd/q/aHR0cHM6Ly9zdGF0aWMtMDEuZGFyYXouY29tLm5wL3AvNTQyMDg3YmY2YTA4MzA5ZDFhMjUwODFhMjNkNDI5MGEuanBn_400x400q75.png_.webp" alt="" className='w-full h-full' />
            </div>
            <div className='mx-5 flex flex-col'>
              <h1 className='text-center text-1xl font-semibold dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sit?</h1>
              <h1 className='dark:text-white'>Rs. 885</h1>
              <p className='dark:text-white'>41% off</p>
              <div className='flex justify-center gap-2'>
                <button className='bg-blue-400 text-white font-semibold px-3 rounded-md' onClick={() => setCount(prev => prev >= 0 ? 0 : prev - 1)}>-</button>
                <h1 className='text-1xl dark:text-white'>count: {count}</h1>
                <button className='bg-blue-400 text-white font-semibold px-3 rounded-md' onClick={() => setCount(prev => prev + 1)}>+</button>
              </div>
              <div className='flex justify-center mt-3'>
                <button onClick={() => setOrderPlaced(count)} className='bg-red-400 px-2 text-white rounded-sm'>place order</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <Buy />
        </div>
      </CardContext.Provider>
    </>
  );
}

export default Card;
