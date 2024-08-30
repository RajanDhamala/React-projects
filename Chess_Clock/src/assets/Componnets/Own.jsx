import React, { useEffect, useState } from 'react';

function Own() {
    let initialtime = 600;
    let increment = 2;

    const [player1time, setplayer1time] = useState(initialtime);
    const [player2time, setplayer2time] = useState(initialtime);
    const [isactive, setisactive] = useState(false); // for background color
    const [currentplayer, setcurrentplayer] = useState(1); // for player turn
    const [start, setstart] = useState(false); // to pause and play clock

    function formatTime(seconds) { // to change seconds to min:sec format
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }

    function handelclick(player) {
        if (!start || currentplayer !== player) {
            return;
        }

        if (player === 1) {
            setplayer1time((prev) => prev + increment);
        } else {
            setplayer2time((prev) => prev + increment);
        }

        // Toggle isactive and switch current player
        setisactive((prev) => !prev);
        setcurrentplayer((prev) => (prev === 1 ? 2 : 1));
    }

    useEffect(() => {
        let handeltime;
        if (start || isactive) {
          handeltime = setInterval(() => {
            if (currentplayer === 1) {
              setplayer1time((prev) => Math.max(prev - 1, 0));
            } else {
              setplayer2time((prev) => Math.max(prev - 1, 0));
            }
          }, 1000);
        }
    
        return () => {
          clearInterval(handeltime);
        };
      }, [isactive, currentplayer, start]);


      useEffect(()=>{
        if(player1time===0 || player2time===0){
            setisactive(false)
        }
      },[player1time,player2time])

          const handelstart=()=>{
            setstart((prev)=>!prev)
        if(!start){
            setisactive(true)
        }else{
            setisactive(false)
        }
          }

    return (
        <>
            <div className='flex p-4 flex-col gap-2'>
                <div 
                    onClick={() => handelclick(1)} 
                    className={`h-80 w-full rounded-md flex justify-center items-center transition-colors ease-in-out delay-75 ${isactive ? 'bg-green-700' : 'bg-green-500'}`}
                >
                    <span className='text-white text-4xl font-bold hover:scale-105 transition delay-100 ease-in-out cursor-pointer'>
                        {formatTime(player1time)}
                    </span>
                </div>
                <div 
                    onClick={() => handelclick(2)} 
                    className={`h-80 w-full rounded-md flex justify-center items-center transition-colors ease-in-out delay-75 ${isactive ? 'bg-green-500' : 'bg-green-700'}`}
                >
                    <span className='text-white text-4xl font-bold hover:scale-105 transition delay-100 ease-in-out cursor-pointer'>
                        {formatTime(player2time)}
                    </span>
                </div>
                <div className='flex justify-center mt-2'>
                    <button className='bg-red-500 text-white font-semibold text-4xl px-5 rounded-md flex items-center justify-center' onClick={()=>handelstart()}>start</button>
                </div>
            </div>
        </>
    );
}

export default Own;
