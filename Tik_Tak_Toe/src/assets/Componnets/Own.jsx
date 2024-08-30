import React,{useState} from 'react'

function Own() {
    const [board,Setboard]=useState(Array(9).fill(null))
    const [turn,Setturn]=useState(true)
   const grid=[
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ]

    function handelClick(position){
        if (board[position]){
            alert('position already occupied')
        }
    const newboard=board.slice()
    newboard[position]=turn ? 'X' :'0'
    Setboard(newboard)
    Setturn(!turn)
    CheckWinner(newboard)
    }

    function handelReload(){
        Setboard(Array(9).fill(null))
        Setturn(true)
    }

    function CheckWinner(newBoard){
        const WiningPossib=[
            [0, 1, 2],[3, 4, 5],[6, 7, 8],
            [0, 3, 6],[1, 4, 7],[2, 5, 8],
            [0, 4, 8],[2, 4, 6]
        ]
        for(let i=0;i<WiningPossib.length;i++){
            const [a,b,c]=WiningPossib[i]
            if(newBoard[a] && newBoard[a] ===newBoard[b] && newBoard[a]=== newBoard[c]){
                alert(`Player ${newBoard[a]} Won`)
                return newBoard[a]
            }
        }
    }

  return (
   <>
   <div className='h-[100vh] flex flex-col justify-items-center items-center justify-center'>
    {
        grid.map((item,itemindex)=>(
            <div className='flex border-x border-black '
            key={itemindex}>
                {
                    item.map((items)=>(
                        <button 
                        value={items}
                        onClick={()=>handelClick(items)}
                        key={items}
                        className='h-20 w-20 bg-red-700 border border-black focus:bg-red-600 text-white text-4xl font-semibold'>
                            {
                               board[items] || ''
                            }

                        </button>
                    ))
                }
            </div>
        ))
    }
 <div>
    <div className='mt-2 text-lg font-semibold'>Next Turn: {turn ?'1' :'2'}</div>
    <button className='border px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-1 text-lg' onClick={()=>handelReload()}>Reload</button>
 </div>
   </div>
   
  
   </>
  )
}

export default Own