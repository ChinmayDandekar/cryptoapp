import Image from 'next/image'
import React from 'react'
import RedDownArrow from '@/public/reddownarrow.svg'
import GrayDownArrow from '@/public/graydownarrow.svg'
import GrayUpArrow from '@/public/grayuparrow.svg'
import { MdBlockFlipped } from "react-icons/md";

const ExpiredCard = ({ State = "live", id }) => {

  id = "#218286"
  return (
    <div className=" min-w-[300px] min-h-[350px] bg-light rounded-3xl relative z-10 col-span-1 select-none " >
    
    <div className='absolute top-0 w-full h-full bg-[grey] bg-opacity-30 rounded-3xl z-20 '></div>

       
      <div className='absolute top-0 w-full z-10 flex flex-col items-center justify-between overflow-hidden  text-purple'>
        <div className='flex flex-row w-full text-sm justify-between py-2 px-5 bg-[lightgrey] rounded-t-3xl  text-[grey]'>

                  <h2 className='font-bold flex text-m'>
<MdBlockFlipped className='text-xl mr-1' />
                      
            Expired
          </h2>
          <h3>{id}</h3>
        </div>
        <div className='w-full h-auto flex flex-col mt-8 px-2'>
          <div className='w-full h-auto mx-auto relative'>
            <div className='absolute top-10 left-[50%] translate-x-[-50%] text-[gray] font-bold  text-xs ' >1.87x <span className='font-medium'>Payout</span></div>
            <div className='absolute top-4 left-[50%] translate-x-[-50%] text-cyan font-black  '>UP</div>

            <Image className='w-full h-16 z-9 ' src={GrayUpArrow} alt="arrow image"/>

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
     
                <Image src={RedDownArrow} className='w-full h-16 z-9' alt="arrow image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ExpiredCard