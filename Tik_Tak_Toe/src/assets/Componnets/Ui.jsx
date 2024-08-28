import React from 'react';

function Ui(){

    function handelClick(position){
        console.log('button clicked at',position)
    }

    const position=[
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ]
    return(
        <>
        <div className=' h-[100vh] flex flex-col justify-center items-center'>
        {position.map((row, rowIndex) => (
                <div 
                    key={rowIndex}
                    className={`flex`}
                >
                    {row.map(position => (
                        <button
                            key={position}
                            className='h-20 w-20 border border-black'
                            onClick={() => handelClick(position)}
                        >
                        </button>
                    ))}
                </div>
            ))}
        </div>
        </>
    )
}

export default Ui;
