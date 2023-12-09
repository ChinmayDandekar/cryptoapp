import Image from 'next/image'
import React from 'react'
import RedDownArrow from '@/public/reddownarrow.svg'
import GrayDownArrow from '@/public/graydownarrow.svg'
import GrayUpArrow from '@/public/grayuparrow.svg'
import { GoPlay } from "react-icons/go";


const LiveCard = ({ Key, className }) => {

  const id = "#218286"
  return (
    <div  key={Key} className={`min-w-[275px] aspect-[6/7] bg-light rounded-3xl relative z-10  select-none hover:scale-105 transition ease-in-out ${className}`} >

     
          <div className='w-full h-2 absolute top-8 left-0 bg-purple '></div>


      <div className='absolute top-0 w-full z-10 flex flex-col items-center justify-between  text-purple'>
        <div className='flex flex-row w-full text-sm justify-between select-none py-2 px-5  '>
         
          <h2 className='font-bold flex  text-m '>
          <span><GoPlay className='text-xl mr-1' /></span>
           LIVE
          </h2>
          <h3>{id}</h3>
        </div>
        <div className='w-full h-auto flex flex-col mt-4 px-2'>
          <div className='w-full h-auto mx-auto relative'>
            <div className='absolute top-10 left-[50%] translate-x-[-50%] text-[gray] font-bold  text-xs ' >1.87x <span className='font-medium'>Payout</span></div>
            <div className='absolute top-4 left-[50%] translate-x-[-50%] text-cyan font-black  '>UP</div>

            <Image className='w-full h-16 z-9  select-none ' src={GrayUpArrow} alt="" />

          </div>
          <div className=" w-[95%] flex flex-col p-4 h-32 mx-auto border-2 border-solid border-red rounded-2xl relative z-10">
            <div className=' uppercase font-bold text-[gray] text-xs   '>Last Price</div>
            <div className='w-full h-auto flex flex-row justify-between items-center my-2 '>
              <div className='text-red font-black underline underline-offset-2 decoration-dotted decoration-[grey]' >$228.5332</div>
              <div className='bg-red text-light px-2 py-1 rounded-sm text-xs'> <span>↓</span> $-0.4141</div>
            </div>
            <div className='w-full h-auto flex flex-row justify-between items-center text-textcol text-xs font-semibold capitalize' >
              <div>locked price:</div>
              <div> $228.9473</div>
            </div>
            <div className='w-full h-auto flex flex-row justify-between items-center text-textcol text-xs font-black capitalize mt-1' >
              <div>prize pool:</div>
              <div> 8.5143 BNB</div>
            </div>

          </div>
          <div className={`w-full h-auto mx-auto relative`} >
            <div className='absolute top-2 left-[50%] translate-x-[-50%] text-light font-bold  text-xs ' >1.87x <span className='font-medium'>Payout</span></div>
            <div className='absolute top-6 left-[50%] translate-x-[-50%] text-light font-black  '>DOWN</div>
         
                <Image src={RedDownArrow} className='w-full h-16 z-9  select-none ' alt="" />
          
          </div>
        </div>

      </div>
    </div>
  )
}

export default LiveCard