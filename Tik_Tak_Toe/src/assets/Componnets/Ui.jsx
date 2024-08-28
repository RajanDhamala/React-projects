import React,{useState} from 'react';

function Ui(){

    function handelreload(){
        window.location.reload()
    }


    const [board,Setboard]=useState(Array(9).fill(null))
    const [isNext,SetisNext]=useState(true)


    function handelClick(position){

        const newBoard=board.slice()

        if(newBoard[position]){
            alert('place is already occupied')
        }
        newBoard[position]=isNext ? 'X' :'0'
        Setboard(newBoard)
        SetisNext(!isNext)
        
    }

    const grid=[
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ]
    return(
        <>
        <div className=' h-[100vh] flex flex-col justify-center items-center'>
        {grid.map((row, rowIndex) => (
                <div 
                    key={rowIndex}
                    className={`flex`}
                >
                    {row.map(position => (
                        <button
                            key={position}
                            className='h-20 w-20 border text-2xl font-bold border-black'
                            onClick={() => handelClick(position)}
                        >{board[position]}
                        </button>
                    ))}
                </div>
            ))}
              <div className='mt-5 text-lg'>
                        NextPlayer:{isNext ? '1' : '2'}

                    </div>
                    <button className='border rounded px-2' onClick={()=>{
                        handelreload()
                    }}>Reload</button>
        </div>
        
        </>
    )
}

export default Ui;
