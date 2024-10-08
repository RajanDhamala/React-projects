import React,{useState} from 'react'
import Storylogo from '../Stories/Storylogo'
import UserPost from './UserPost'

function Feed() {
    const[isclicked,setisclicked]=useState()
  return (
    <>
    <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <h1 className='italic font-[cursive] text-2xl font-semibold'>Instagram</h1>
            <button className='rotate-180 text-[20px] ml-1 text-gray-500'>^</button>
            </div>
            <div className='flex items-center justify-end gap-x-12 mr-5'>
            <div>
                <button className='bg-gray-200 py-1 absolute search'>🔍</button>
                <i class="fal fa-search"></i>
                <input type="search" placeholder='Search' className='bg-gray-200 focus:outline-none py-1 pl-6' onClick={(e)=>document.querySelector('.search').classList.toggle('hidden')} />
            </div>
            <button className='text-3xl text-black ml-1' onClick={()=>setisclicked(!isclicked)}>{
            isclicked ? '♥':'♡'}</button>
            </div>
            
        </div>
        <div className='w-full border-t-2 mb-4 mt-2 bg-gray-200'>

            </div>
    </div>
    <div className='flex overflow-x-hidden'>
                <Storylogo/>
                <Storylogo imgsrc='https://r2.starryai.com/results/240758348/61b45728-2ff1-4197-aef8-b1d372e453b4.webp' username='Starr_yai' visiblty={true} />
                <Storylogo imgsrc='https://r2.starryai.com/results/1010278294/420e067f-8eaf-4229-af2d-fd6630cda10a.webp' username='Barry_hales' visiblty={true}/>
                <Storylogo imgsrc='https://xsgames.co/randomusers/assets/avatars/male/46.jpg' username='Richard_haster' visiblty={false}/>
                <Storylogo/>
                <Storylogo imgsrc='https://r2.starryai.com/results/240758348/61b45728-2ff1-4197-aef8-b1d372e453b4.webp' username='Starr_yai' visiblty={true}/>
                <Storylogo imgsrc='https://r2.starryai.com/results/1010278294/420e067f-8eaf-4229-af2d-fd6630cda10a.webp' username='Barry_hales' visiblty={true}/>
                <Storylogo imgsrc='https://xsgames.co/randomusers/assets/avatars/male/46.jpg' username='Richard_haster' visiblty={false}/>
                
    </div>
    <div className='px-2'>
    <UserPost content='photo' likecount='600' commentcount='140' status="Morning views that never get old! 🌄" username='Ramesh bahadur' />
    <UserPost likecount='46' commentcount='12' status="Feeling productive today! 💻" />
    <UserPost likecount='400' commentcount='23' status="Big things coming soon! 🚀" />
    <UserPost content='photo' likecount='122' commentcount='94' status="Adventure vibes all weekend! 🌍" />


    </div>
    </>
  )
}

export default Feed