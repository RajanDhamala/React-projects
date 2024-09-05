import React,{useState,useContext} from 'react'
import MyContext from '../Context/MyContext'

function Show({handelChildData}) {
  const {password,username}=useContext(MyContext);
  const [pass,setpass]=useState('')

  function handelchange(e){
        setpass(e.target.value)
        handelChildData(e.target.value)
  }

  return (
    <>
    <div className='w-72 h-72 flex-col flex  justify-center px-5 border-2 border-gray-300'>
    <h1 className='text-2xl'>username:{username}</h1>
    <h1 className='text-2xl'>password:{password}</h1>
    </div>
    <div className='flex justify-center mt-5'>
    <input type="text" value={pass} onChange={(e)=>{handelchange(e)
    }}  className='bg-gray-200 focus:outline-none focus:ring-2 px-2' placeholder='pass to parent'/>
    </div>
    </>
  )
}

export default Show