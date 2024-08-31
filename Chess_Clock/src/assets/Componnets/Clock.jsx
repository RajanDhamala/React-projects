import React, { useEffect, useState } from "react";

function Clock() {
  const initialTime = 600;
  const increment=2;

  const [player1time, setplayer1time] = useState(initialTime);
  const [player2time, setplayer2time] = useState(initialTime);
  const [currentplayer, setcurrentplayer] = useState(1);
  const [isactive, setisactive] = useState(false);
  const [start, setstart] = useState(false);
  const [issoundon,setissoundon]=useState(true)

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  function handelreload(){
    setstart(false)
    setplayer1time(initialTime)
    setplayer2time(initialTime)
  }

  function handelsound(){
    setissoundon(!issoundon)
  }

  function handelcustomtime(){
    alert('available soon')
  }

  function active(player) {
    if (currentplayer !== player || !start) {
      return;
    }
    setisactive(false);

    if(player==1){
        setplayer1time((prev)=>prev+increment)
    }else{
        setplayer2time((prev)=>prev+increment)
    }

    setcurrentplayer(player === 1 ? 2 : 1); 
    setisactive(true);
  }

  useEffect(() => {
    let handeltime;
    if (start && isactive) {
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

  useEffect(() => {
    if (player1time === 0 || player2time === 0) {
      setisactive(false);
    }
  }, [player1time, player2time]);

  const handleStart = () => {
    setstart((prevStart) => !prevStart);
    if (!start) {
      setisactive(true); 
    } else {
      setisactive(false);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className={`h-80 w-full rounded-t-md flex justify-center items-center ${
            currentplayer === 1 ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => active(1)}
        >
          <span className={`rotate-180 font-bold text-5xl cursor-pointer hover:scale-105 transform ease-in-out delay-75 ${currentplayer ==1 ? 'text-white' :'text-black'}` }>
            {formatTime(player1time)}
          </span>
        </div>
        <div className="bg-purple-500 h-14 w-full flex items-center justify-evenly">
          <span className="text-4xl font-semibold text-white cursor-pointer" onClick={()=>handelreload()}>⟳</span>
          <span className="text-3xl font-semibold text-white cursor-pointer" onClick={()=>handleStart()}>{start?'❚❚':'▶'}</span>
          <span className="text-3xl font-semibold text-white cursor-pointer" onClick={()=>handelcustomtime()}>🕓</span>
          <span className="text-3xl font-semibold cursor-pointer" onClick={()=>handelsound()}>{issoundon ? '🔊' :'🔇'}</span>


          </div>
          <div className="absolute bg-gray-200 opacity-30 h-full w-full flex justify-center items-center hidden">
            <div className="bg--500 h-96 w-96">
            <div className="bg-black rounded-full px-3 border-4 border-red-500">
              <button className=" flex text-white text-lg justify-center items-center gap-1">
                <span className="text-green-500 text-2xl">+</span>
                New Custom time
              </button>
            </div>
            </div>

          </div>

        <div
          className={` h-80 w-full rounded-b-md flex justify-center items-center ${
            currentplayer === 2 ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => active(2)}
        >
          <span className={`font-bold text-5xl cursor-pointer hover:scale-105 transform ease-in-out delay-75 ${currentplayer ==2 ? 'text-white' :'text-black'}`}>
            {formatTime(player2time)}
          </span>
        </div>
      </div>
    </>
  );
}

export default Clock;
