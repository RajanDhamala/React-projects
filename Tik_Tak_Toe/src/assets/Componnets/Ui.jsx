import React, { useRef, useState, useEffect } from 'react';

function Ui() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true); 
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);
    const [gameMode, setGameMode] = useState('playerVsai');
    const [aiDifficulty, setAiDifficulty] = useState('normal');

    const gif = useRef(null);

    useEffect(() => {
        if (gameMode === 'playerVsai' && !isNext && !winner && !isDraw) {
            const timer = setTimeout(() => makeAiMove(board), 500);
            return () => clearTimeout(timer);
        }
    }, [isNext, board, gameMode, aiDifficulty, winner, isDraw]);

    function showGif() {
        const mp3 = document.querySelector('.audiio');
        mp3.classList.toggle('hidden');
    }

    function handleReload() {
        window.location.reload();
    }

    function winnerCheck(newBoard) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                return newBoard[a];
            }
        }

        return null;
    }

    function handleClick(position) {
        if (winner || board[position]) {
            return;
        }

        const newBoard = board.slice();
        newBoard[position] = isNext ? 'X' : 'O';
        setBoard(newBoard);

        const newWinner = winnerCheck(newBoard);
        if (newWinner) {
            setWinner(newWinner);
            showGif();
            handleSound();
        } else if (isBoardFull(newBoard)) {
            setIsDraw(true);
        } else {
            setIsNext(!isNext);
        }
    }

    const findWinningMove = (board, player) => {
        const newBoard = board.slice();
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of winningCombinations) {
            if (newBoard[a] === player && newBoard[b] === player && newBoard[c] === null) {
                return c;
            } else if (newBoard[a] === player && newBoard[c] === player && newBoard[b] === null) {
                return b;
            } else if (newBoard[b] === player && newBoard[c] === player && newBoard[a] === null) {
                return a;
            }
        }

        return null;
    }

    const makeAiMove = (board) => {
        const newBoard = board.slice();
    
        let move;
    
        
        if (aiDifficulty !== 'easy') {
            move = findWinningMove(newBoard, 'O');
            if (move !== null) {
                newBoard[move] = 'O';
                setBoard(newBoard);
                const newWinner = winnerCheck(newBoard);
                if (newWinner) {
                    setWinner(newWinner);
                    showGif();
                    handleSound();
                } else {
                    setIsNext(true);
                }
                return;
            }
        }
    
      
        if (aiDifficulty !== 'easy') {
            move = findWinningMove(newBoard, 'X');
            if (move !== null) {
                newBoard[move] = 'O';
                setBoard(newBoard);
                const newWinner = winnerCheck(newBoard);
                if (newWinner) {
                    setWinner(newWinner);
                    showGif();
                    handleSound();
                } else {
                    setIsNext(true);
                }
                return;
            }
        }
    
       
        if (aiDifficulty === 'easy') {
            const availablePositions = newBoard.map((val, index) => val === null ? index : null).filter(val => val !== null);
            const randomPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    
            if (randomPosition !== undefined) {
                newBoard[randomPosition] = 'O';
                setBoard(newBoard);
                const newWinner = winnerCheck(newBoard);
                if (newWinner) {
                    setWinner(newWinner);
                    showGif();
                    handleSound();
                } else {
                    setIsNext(true); 
                }
            }
        }
      
        else if (aiDifficulty === 'normal') {
            const availablePositions = newBoard.map((val, index) => val === null ? index : null).filter(val => val !== null);
            const randomPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    
            if (randomPosition !== undefined) {
                newBoard[randomPosition] = 'O'; 
                setBoard(newBoard);
                const newWinner = winnerCheck(newBoard);
                if (newWinner) {
                    setWinner(newWinner);
                    showGif();
                    handleSound();
                } else {
                    setIsNext(true); 
                }
            }
        }
    }

    function handleModeChange(mode) {
        if (mode === gameMode) {
            alert('Currently at same mode');
        } else {
            setGameMode(mode);
            console.log('Mode changed to:', mode);
        }
    }

    function handleDifficultyChange(difficulty) {
        if (difficulty === aiDifficulty) {
            alert('Currently at same difficulty level');
        } else {
            setAiDifficulty(difficulty);
            console.log('Difficulty changed to:', difficulty);
        }
    }

    const grid = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function isBoardFull(board) {
        return board.every(square => square !== null);
    }

    function handleSound() {
        var audio = new Audio('./sound.mp3');
        audio.play();
    }

    return (
        <>
            <div className='flex justify-center gap-3 mt-40'>
                <label
                    className={`cursor-pointer rounded-md px-4 py-2 transition-all duration-300 ease-in-out ${gameMode === 'playerVsplayer' ? 'bg-blue-500 text-white shadow-md transform scale-105' : 'bg-gray-300 text-black hover:bg-gray-200'}`}
                    onClick={() => handleModeChange('playerVsplayer')}
                >
                    Player1 vs Player2
                </label>
                <label
                    className={`cursor-pointer rounded-md px-4 py-2 transition-all duration-300 ease-in-out ${gameMode === 'playerVsai' ? 'bg-blue-500 text-white shadow-md transform scale-105' : 'bg-gray-300 text-black hover:bg-gray-200'}`}
                    onClick={() => handleModeChange('playerVsai')}
                >
                    Player vs AI
                </label>
            </div>
            {gameMode === 'playerVsai' && (
                <div className='flex justify-center gap-3 mt-3'>
                    <label
                        className={`cursor-pointer rounded-md px-4 py-2 transition-all duration-300 ease-in-out ${aiDifficulty === 'easy' ? 'bg-green-500 text-white shadow-md transform scale-105' : 'bg-gray-300 text-black hover:bg-gray-200'}`}
                        onClick={() => handleDifficultyChange('easy')}
                    >
                        Easy
                    </label>
                    <label
                        className={`cursor-pointer rounded-md px-4 py-2 transition-all duration-300 ease-in-out ${aiDifficulty === 'normal' ? 'bg-yellow-500 text-white shadow-md transform scale-105' : 'bg-gray-300 text-black hover:bg-gray-200'}`}
                        onClick={() => handleDifficultyChange('normal')}
                    >
                        Normal
                    </label>
                </div>
            )}
            <div className='h-[100vh] flex flex-col mt-5 items-center'>
                {grid.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex z-40`}
                    >
                        {row.map(position => (
                            <button
                                key={position}
                                className="h-20 text-4xl w-20 border font-bold border-black"
                                onClick={() => handleClick(position)}
                            >
                                <span className={board[position] === 'X' ? 'text-red-500' : board[position] === 'O' ? 'text-orange-500' : ''}>
                                    {board[position] || ''}
                                </span>
                            </button>
                        ))}
                    </div>
                ))}

                <div className='mx-auto container flex justify-center items-center'>
                    <div className='text-white hover:bg-red-600 mt-2 text-lg bg-red-500 rounded-md w-1/2 sm:1/3 md:1/3 cursor-pointer'>
                        {isDraw
                            ? 'Game has been Drawn'
                            : (winner
                                ? `Winner: ${winner}`
                                : `Next Player: ${isNext ? 'X' : 'O'}`)}
                    </div>
                </div>
                <div>
                    <button
                        className={`${isDraw ? 'bg-orange-500' : 'bg-red-600'} text-lg rounded-md flex justify-center items-center text-white py-1 px-3 mt-2`}
                        onClick={handleReload}
                    >
                        Reload!
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
