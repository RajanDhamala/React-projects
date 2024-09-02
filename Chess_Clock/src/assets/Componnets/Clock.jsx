import React, { useEffect, useRef, useState } from "react";

function Clock() {
  const [initialTime,setinitialTime] =useState(600);
  const [increment,setincrement]=useState(2);
  const [whoclicked,setwhoclicked]=useState(null)

  const [player1time, setplayer1time] = useState(initialTime);
  const [player2time, setplayer2time] = useState(initialTime);
  const [currentplayer, setcurrentplayer] = useState(1);
  const [isactive, setisactive] = useState(false);
  const [start, setstart] = useState(false);
  const [issoundon,setissoundon]=useState(true)
  const custompopup=useRef(null)
  const [customtime1,setcustomtime1]=useState(null)
  const [customincremnt1,setcustomincrement1]=useState(null)
  const [player1count,setplayer1count]=useState(0)
  const [player2count,setplayer2count]=useState(0)
  const [placehour,setplacehour]=useState()
  const [placemin,setplacemin]=useState()
  const [placesec,setplacesec]=useState()
  const timehala=useRef(null)

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    const formattedMinutes = remainingMinutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    if (hours > 0) {
        return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}

  function handelreload(){
    setstart(false)
    setplayer1time(initialTime)
    setplayer2time(initialTime)
    setplayer1count(0)
    setplayer2count(0)
  }

  function handelsound(){
    if(issoundon){
    const audio=new Audio('audio.mp3')
    audio.play()}
  }

  function customtime(){
    setstart(false)
    custompopup.current.classList.toggle('hidden');
  }

  function handeltimeselection(e){
    const data=JSON.parse(e.target.value)
    setcustomtime1(Number(data.time)*60)
    setcustomincrement1(Number(data.increment))
    console.log(data.time,data.increment)
  }

  function toggelsavetime(who){
    if (who==1){
      setstart(false)
      timehala.current.classList.toggle('hidden')
      timehala.current.classList.add('rotate-180')
    }else if(who==2){
      setstart(false)
      timehala.current.classList.remove('rotate-180')
      timehala.current.classList.toggle('hidden')
    }else{
      return;
    }
    
  }

  function handeltimechange(){
    setinitialTime(customtime1)
    setincrement(customincremnt1)
    setplayer1time(customtime1)
    setplayer2time(customtime1)
    customtime()
  }

  function converttosecond(hours = 0, minutes = 0, seconds = 0) {
    hours = hours ?? 0;
    minutes = minutes ?? 0;
    seconds = seconds ?? 0;
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    return totalSeconds;
}
  function closeafterset(){
    timehala.current.classList.add('hidden')
  }

  function handelusersettime(){
    console.log(timehala)
    closeafterset()
    if (whoclicked ==1){
      console.log(placehour,placemin,placesec)
      let temp=converttosecond(placehour,placemin,placesec)
      console.log(temp)
      setplayer1time((prev)=>(temp== null && temp==undefined) ? temp :prev)
      
    }else if (whoclicked ==2){
      console.log(placehour,placemin,placesec)
      let temp2=converttosecond(placehour,placemin,placesec)
      console.log(temp2)
      setplayer2time((prev)=>(temp2 !==null && temp2!==undefined) ? temp2: prev)

    }else{
      return;
    }
  }

  function active(player) {
    if (currentplayer !== player || !start) {
      return;
    }
    setisactive(false);

    if(player==1){
        setplayer1time((prev)=>prev+increment)
        setplayer1count((count)=>count+1)
    }else{
        setplayer2time((prev)=>prev+increment)
        setplayer2count((count)=>count+1)
    }
    handelsound()
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
          className={`h-80 w-full rounded-t-md  ${
            currentplayer === 1 ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => active(1)}
          
        >
          <span className="text-md font-semibold opacity-60 ml-5">Moves:{player1count}</span>
          <div className="flex justify-center w-full"><button className="text-black text-2xl opacity-60" onClick={(e)=>{
           e.stopPropagation();
           setwhoclicked(1)
           toggelsavetime(1)
            }}>☰</button></div>
          <div className="flex justify-center items-center h-full">
          <span className={`rotate-180 font-bold text-5xl cursor-pointer hover:scale-105 transform ease-in-out delay-75 ${currentplayer ==1 ? 'text-white' :'text-black'}` }>
            {formatTime(player1time)}
          </span>
          </div>
        </div>
        <div className="bg-purple-500 h-14 w-full flex items-center justify-evenly">
          <span className="text-4xl font-semibold text-white cursor-pointer" onClick={()=>handelreload()}>⟳</span>
          <span className="text-3xl font-semibold text-white cursor-pointer" onClick={()=>handleStart()}>{start?'❚❚':'▶'}</span>
          <span className="text-3xl font-semibold text-white cursor-pointer" onClick={()=>customtime()}>🕓</span>
          <span className="text-3xl font-semibold cursor-pointer" onClick={()=>setissoundon(!issoundon)}>{issoundon ? '🔊' :'🔇'}</span>

          </div>
<div
  className="fixed inset-0 bg-gray-200 h-full w-full bg-opacity-30 flex flex-col justify-center items-center z-40 hidden"
  ref={custompopup}
>
  <div className="h-[70vh] w-11/12 md:h-[80vh] md:w-1/2 bg-white flex flex-col items-center overflow-y-auto rounded-sm">
    <div className="flex justify-end w-full sticky top-0">
      <button className="text-lg" onClick={() => customtime()}>❎</button>
    </div>
    <div className="bg-black rounded-full px-3 border-2 border-red-500 mt-2 w-60 h-10 flex justify-center items-center" onClick={()=>toggelsavetime()}>
      <button
        className="text-white text-lg font-semibold flex items-center justify-center w-full h-full space-x-2"
      >
        <h1 className="text-green-500">➕</h1>
        <span>New Custom Time</span>
      </button>
    </div>
    <div className="w-full ml-5 mt-1">
      <h1 className="text-start text-lg font-semibold cursor-pointer">Presents</h1>
    </div>
    
    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio1" name="time-option" className="size-5" value={JSON.stringify({time:'20',increment:'20'})} onChange={handeltimeselection} />
      <label htmlFor="radio1" className="text-lg cursor-pointer">20 min 20 sec</label>
    </div>
    
    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio2" name="time-option" className="size-5" value={JSON.stringify({time:'10',increment:'5'})} onChange={handeltimeselection} />
      <label htmlFor="radio2" className="text-lg cursor-pointer">10 min | 5 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio3" name="time-option" className="size-5" value={JSON.stringify({time:'1',increment:'0'})} onChange={handeltimeselection} />
      <label htmlFor="radio3" className="text-lg cursor-pointer">1 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio4" name="time-option" className="size-5" value={JSON.stringify({time:'1',increment:'1'})} onChange={handeltimeselection}  />
      <label htmlFor="radio4" className="text-lg cursor-pointer">1 min | 1 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio5" name="time-option" className="size-5" value={JSON.stringify({time:'3',increment:'0'})} onChange={handeltimeselection} />
      <label htmlFor="radio5" className="text-lg cursor-pointer">3 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio6" name="time-option" className="size-5" value={JSON.stringify({time:'3',increment:'2'})} onChange={handeltimeselection} />
      <label htmlFor="radio6" className="text-lg cursor-pointer">3 min | 2 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio7" name="time-option" className="size-5" value={JSON.stringify({time:'5',increment:'0'})} onChange={handeltimeselection} />
      <label htmlFor="radio7" className="text-lg cursor-pointer">5 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio8" name="time-option" className="size-5" value={JSON.stringify({time:'5',increment:'5'})} onChange={handeltimeselection} />
      <label htmlFor="radio8" className="text-lg cursor-pointer">5 min | 5 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio9" name="time-option" className="size-5" value={JSON.stringify({time:'10',increment:'0'})} onChange={handeltimeselection} />
      <label htmlFor="radio9" className="text-lg cursor-pointer">10 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio10" name="time-option" className="size-5" value={JSON.stringify({time:'15',increment:'10'})} onChange={handeltimeselection}  />
      <label htmlFor="radio10" className="text-lg cursor-pointer">15 min | 10 sec</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio11" name="time-option" className="size-5" value={JSON.stringify({time:'20',increment:'0'})} onChange={handeltimeselection} />
      <label htmlFor="radio11" className="text-lg cursor-pointer">20 min</label>
    </div>

    <div className="w-full mt-2 flex flex-row-reverse justify-between px-3">
      <input type="radio" id="radio12" name="time-option" className="size-5" value={JSON.stringify({time:'30',increment:'0'})} onChange={handeltimeselection} />
      <label htmlFor="radio12" className="text-lg cursor-pointer">30 min</label>
    </div>
    
  </div>
  <div className="w-full flex justify-center sticky">
    <button className="bg-blue-500 text-white font-semibold text-3xl rounded-md w-11/12 md:w-1/2 hover:bg-blue-700" onClick={()=>handeltimechange()}>
      Start
    </button>
  </div>
</div>
        <div
          className={` h-80 w-full rounded-b-md ${
            currentplayer === 2 ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => active(2)}
        >
          <span className="text-md font-semibold opacity-60 ml-5">Moves:{player2count}</span>
          <div className="flex justify-evenly items-center h-full flex-col">

          <span className={`z-10 font-bold text-5xl cursor-pointer hover:scale-105 mt-10 transform ease-in-out delay-75 ${currentplayer ==2 ? 'text-white' :'text-black'}`}>
            {formatTime(player2time)}
          </span>          
           <div className="flex justify-center w-full h-10">
        <button className="text-black text-2xl opacity-60 mt-5" onClick={(e)=>{
          e.stopPropagation()
          setwhoclicked(2)
          toggelsavetime(2)}}>☰</button>
        </div>
          </div>
        </div>
        <div className="absolute h-full w-full bg-gray-300 z-50 bg-opacity-20 flex justify-center items-center hidden" ref={timehala}>
          <div className="bg-black h-48 rounded-md w-80">
            <div className="mx-3 my-3">
              <h1 className="text-white text-center font-mono">🕒 ADJUST TIME</h1>
            </div>
            <div className="flex justify-center flex-cols gap-1">
         <div className="flex flex-col"> <input type="number" className="h-10 w-14 font-semibold text-2xl text-center pl-2 focus:outline-none" value={placehour} placeholder="00" onChange={(e)=>setplacehour(Number(e.target.value))} max={99} min={0}/>
         <h1 className="text-white">hour</h1>
         </div>
          <h1 className="text-white font-bold text-2xl">:</h1>
          <div><input type="number" className="h-10 w-14 font-semibold text-2xl text-center pl-2 focus:outline-none" placeholder="00"
          max={60} value={placemin} onChange={(e)=>setplacemin(Number(e.target.value))} min={0} />
          <h1 className="text-white">min</h1>
          </div>
          <h1 className="text-white font-bold text-2xl">:</h1>
          <div>
          <input type="number" className="h-10 w-14 font-semibold text-2xl text-center pl-2 focus:outline-none" value={placesec} max={60} onChange={(e)=>setplacesec(Number(e.target.value))} min={0} placeholder="00"/>
          <h1 className="text-white">sec</h1>
          </div>
        
          </div>
          <div className="w-full flex justify-evenly mt-4">
            <div></div>
            <div className="flex gap-2">
            <button className="text-white text-sm active:bg-red-500 rounded-md px-2 py-2 font-semibold hover:scale-105" onClick={()=>closeafterset}>CANCEL</button>
            <button className="text-white text-sm active:bg-green-500 rounded-md px-2 py-2 font-semibold hover:scale-105" onClick={()=>
              handelusersettime()
            }>SAVE TIME</button>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Clock;
