import React from 'react'
import Show from './Show'
import MyContext from '../Context/MyContext'


function ShoppingCard() {
    const [show,setsshow]=React.useState('show')
    const [password,setpassword]=React.useState()
    const [username,setusername]=React.useState()
    const [child,setchild]=React.useState('data not available')

    function handelChildData(newPass){
        setchild(newPass)
        console.log('data from child',newPass)
    }
 
  return (
    <>
    <MyContext.Provider value={{username,password}}>
    <div className=' flex-col gap-3 flex items-center mt-10'>
        <input type="text" className='bg-gray-200 w-72 px-2 h-8 focus:outline-none' value={username} onChange={(e)=>setusername(e.target.value)} />
        <div className='w-72 flex'>
        <input type="password" className='bg-gray-200 w-96 px-2 h-8 focus:outline-none data1' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <h1 className='bg-gray-200 px-3 cursor-pointer ' value={password} onChange={(e)=>setpassword(e.target.value)} onClick={(e)=>{
            if (document.querySelector('.data1').getAttribute('type')=='password'){
                document.querySelector('.data1').setAttribute('type','text')
                setsshow('hide')
            }else{
                document.querySelector('.data1').setAttribute('type','password')
                setsshow('show')
            }
            
        }}>{show}</h1></div>
        <button className='w-72 bg-blue-400 text-white text-lg rounded-sm hover:bg-blue-500'>login</button>
        <div >
                <h2>passed from child:{child}</h2>
            </div>
        <div className=''>
            <Show handelChildData={handelChildData}/>
        </div>
        <div>
           
        </div>
    </div>
    </MyContext.Provider>
    </>
  )
}

export default ShoppingCard