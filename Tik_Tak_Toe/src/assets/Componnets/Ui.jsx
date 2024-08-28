import React, { useState } from 'react';

function Ui() {
    function handelreload() {
        window.location.reload();
    }
    const [board, Setboard] = useState(Array(9).fill(null));
    const [isNext, SetisNext] = useState(true);
    const [winner, Setwinner] = useState(null);

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
        } else {
            SetisNext(!isNext); 
        }
    }

    const grid = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];

    return (
        <>
            <div className='h-[100vh] flex flex-col justify-center items-center'>
                {grid.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex`}
                    >
                        {row.map(position => (
                            <button
                                key={position}
                                className='h-20 text-4xl w-20 border text-white bg-red-700 focus:bg-red-600 font-bold border-black'
                                onClick={() => handelClick(position)}
                            >
                                {board[position] || ''}
                            </button>
                        ))}
                    </div>
                ))}
                <div className='mt-5 text-lg'>
                    {winner ? `Winner: ${winner}` : `Next Player: ${isNext ? '1' : '2'}`}
                </div>
                <button className='border rounded px-2 mt-4' onClick={handelreload}>
                    Reload
                </button>
            </div>
        </>
    );
}

export default Ui;
