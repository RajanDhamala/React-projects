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

  function customtime(){
    alert('soon available')
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
          <div className="absolute bg-gray-200 h-full w-full opacity-20 inset-0 flex flex-col justify-center items-center">
  <div className="h-96 w-1/2 bg-white flex flex-col items-center overflow-y-auto">
    <div className="bg-black rounded-full px-3 border-4 border-red-500 mt-2 w-60 h-10 flex justify-center items-center">
      <button
        className="text-white text-lg font-semibold flex items-center justify-center w-full h-full space-x-2"
        onClick={() => customtime()}
      >
        <h1 className="text-green-500">➕</h1>
        <span>New Custom Time</span>
      </button>
    </div>
    <div className="w-full ml-5 mt-1">
      <h1 className="text-start text-lg font-semibold cursor-pointer">Presents</h1>
    </div>
    
    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio1" name="time-option" className="size-5" />
      <label htmlFor="radio1" className="text-lg cursor-pointer">20 min 20 sec</label>
    </div>
    
    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio2" name="time-option" className="size-5" />
      <label htmlFor="radio2" className="text-lg cursor-pointer">10 min | 5 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio3" name="time-option" className="size-5" />
      <label htmlFor="radio3" className="text-lg cursor-pointer">1 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio4" name="time-option" className="size-5" />
      <label htmlFor="radio4" className="text-lg cursor-pointer">1 min | 1 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio5" name="time-option" className="size-5" />
      <label htmlFor="radio5" className="text-lg cursor-pointer">3 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio6" name="time-option" className="size-5" />
      <label htmlFor="radio6" className="text-lg cursor-pointer">3 min | 2 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio7" name="time-option" className="size-5" />
      <label htmlFor="radio7" className="text-lg cursor-pointer">5 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio8" name="time-option" className="size-5" />
      <label htmlFor="radio8" className="text-lg cursor-pointer">5 min | 5 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio9" name="time-option" className="size-5" />
      <label htmlFor="radio9" className="text-lg cursor-pointer">10 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio10" name="time-option" className="size-5" />
      <label htmlFor="radio10" className="text-lg cursor-pointer">15 min | 10 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio11" name="time-option" className="size-5" />
      <label htmlFor="radio11" className="text-lg cursor-pointer">20 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio12" name="time-option" className="size-5" />
      <label htmlFor="radio12" className="text-lg cursor-pointer">30 min</label>
    </div>
    
  </div>
  <div className="w-full flex justify-center position sticky mt-2">
      <button className="bg-green-500 text-white font-semibold text-3xl rounded-md w-1/2 hover:bg-green-700">Start</button>
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
