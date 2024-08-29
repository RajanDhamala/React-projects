import React, { useRef, useState } from 'react';

function Ui() {

    const gif=useRef(null)
    function showgif(){
        const mp3=document.querySelector('.audiio')
        mp3.classList.toggle('hidden')
    }

    function handelreload() {
        window.location.reload();
    }
    const [board, Setboard] = useState(Array(9).fill(null));
    const [isNext, SetisNext] = useState(Math.random()<0.5);
    const [winner, Setwinner] = useState(null);
    const [isDraw,setisDraw]=useState(false)
    const [Gamemode, setGamemode] = useState('playerVsplayer');

    function WinnerCheck(newBoard) {
        const winningCombinations = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8],
            [0, 3, 6], [1, 4, 7],[2, 5, 8],
            [0, 4, 8],[2, 4, 6] 
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                return newBoard[a];
            }
        }

        return null; 
    }

    function handelClick(position) {
        if (winner || board[position]) {
            return; 
        }

        const newBoard = board.slice();
        newBoard[position] = isNext ? 'X' : 'O'; 
        Setboard(newBoard);

        const newWinner = WinnerCheck(newBoard);
        if (newWinner) {
            Setwinner(newWinner);
            showgif()
            handelsound()
        }
        else if(isBoardFull(newBoard)){
                setisDraw(true)}
        
         else {
            SetisNext(!isNext); 
            if(Gamemode ==='playerVsai' && !isNext){
                makeAiMove(newBoard);
                console.log('ai will make move')

            }
        }
    }

    const makeAiMove=(board)=>{
        const availablePosition=board.map((val,index)=>val===null ? index:null).filter(val=>val !==null);
        const RandomPosition=availablePosition[Math.floor(Math.random()*availablePosition.length)]
        const newBoard=board.slice()
        newBoard[RandomPosition]
        Setboard[newBoard]

        const newWinner = WinnerCheck(newBoard);
        if (newWinner) {
            setWinner(newWinner);
        } else if (isBoardFull(newBoard)) {
            setIsDraw(true);
        } else {
            setIsNext(true); // Switch back to player
        }
    }

    const grid = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function isBoardFull(board){
        return board.every(square=>square !==null)
    }

    function handelsound(){
        var audio=new Audio('./sound.mp3')
        audio.play();
    }

    function handelModeChange(mode){
        if(mode==Gamemode){
            alert('Currently at same mode')

        }
        else{setGamemode(mode)
        console.log('mode changed to:',mode)}
    }

    return (
        <>
 <div className='flex justify-center gap-3'>
            <label 
                className={`cursor-pointer rounded-md px-4 py-2 transition-all duration-300 ease-in-out ${Gamemode === 'playerVsplayer' ? 'bg-blue-500 text-white shadow-md transform scale-105' : 'bg-gray-300 text-black hover:bg-gray-200'}`} 
                onClick={() => handelModeChange('playerVsplayer')}
            >
                Player1 vs Player2
            </label>
            <label 
                className={`cursor-pointer rounded-md px-4 py-2 transition-all duration-300 ease-in-out ${Gamemode === 'playerVsai' ? 'bg-blue-500 text-white shadow-md transform scale-105' : 'bg-gray-300 text-black hover:bg-gray-200'}`} 
                onClick={() => handelModeChange('playerVsai')}
            >
                Player vs AI
            </label>
        </div>
            <div className='h-[100vh] flex flex-col mt-5 items-center'>
                {grid.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex z-40`}
                    >
                        {row.map(position => (
                            <button
                                key={position}
                                className="h-20 text-4xl w-20 border font-bold border-black "
                                onClick={() => handelClick(position)}
                            >
                                <span className={board[position] === 'X' ? 'text-red-500' : board[position] === 'O' ? 'text-orange-500' : ''}>
                                    {board[position] || ''}
                                </span>
                            </button>
                        ))}
                    </div>
                ))}
             
<div className='mx-auto container flex justify-center items-center '>
    <div className='text-white hover:bg-red-600 mt-2 text-lg bg-red-500 rounded-md w-1/2 sm:1/3 md:1/3 cursor-pointer'>
    {isDraw 
        ? 'Game has been Drawn' 
        : (winner 
            ? `Winner: ${winner}` 
            : `Next Player: ${isNext ? 'X' : '0'}`)}
</div>
</div>
<div>
<button
        className={`${isDraw ? 'bg-orange-500' : 'bg-red-600'} text-lg rounded-md flex justify-center items-center text-white py-1 px-3 mt-2`} 
        onClick={handelreload}
    >
        play again!
    </button>
</div>
                <div className='h-60 w-60 transition delay:50 ease-in-out overflow-hidden absolute mb-[90px] hidden audiio' ref={gif}>
                    <img src="https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif" alt="" className='h-full w-full' />
                </div>
            </div>
        </>
    );
}

export default Ui;
