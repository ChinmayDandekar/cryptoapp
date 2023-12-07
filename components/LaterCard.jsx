import Image from 'next/image'
import React from 'react'
import RedDownArrow from '@/public/reddownarrow.svg'
import GrayDownArrow from '@/public/graydownarrow.svg'
import GrayUpArrow from '@/public/grayuparrow.svg'
import { AiOutlineClockCircle } from "react-icons/ai";

const LaterCard = ({ State = "live", id }) => {

    id = "#218286"
    return (
        <div className=" min-w-[300px] h-[300px] bg-light rounded-3xl relative z-10" >



            <div className='absolute top-0 w-full z-10 flex flex-col items-center justify-between overflow-hidden  text-[grey]'>
                <div className='flex flex-row w-full text-sm justify-between py-2 px-5 bg-[lightgrey] rounded-t-3xl  text-textcol'>

                    <h2 className='font-bold flex text-m'>
                        <AiOutlineClockCircle className='text-xl mr-1'/>
                        Later
                    </h2>
                    <h3>{id}</h3>
                </div>
                <div className='w-full h-auto flex flex-col mt-8 px-2'>
                    <div className='w-full h-auto mx-auto relative'>
                        <div className='absolute top-6 text-xl left-[50%] translate-x-[-50%] text-[grey] font-black  '>UP</div>

                        <Image className='w-full h-16 z-9 ' src={GrayUpArrow} />

                    </div>
                    <div className=" w-[95%] flex flex-col  h-20 mx-auto p-[2px] border-2 border-solid border-[lightgrey] rounded-2xl relative z-10">

                        <div className='w-full h-full p-4 flex flex-col justify-center items-center rounded-2xl bg-light text-textcol'>
                            <div className='w-full text-center font-bold text-sm'>Entry starts</div>
                            <div className='w-full text-center font-black text-xl'>~00:38</div>
                        </div>
                    </div>
                    <div className={`w-full h-auto mx-auto relative`} >
                        <div className='absolute top-3 text-xl left-[50%] translate-x-[-50%] text-[grey] font-black  '>DOWN</div>

                        <Image src={GrayDownArrow} className='w-full h-16 z-9' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LaterCard