import Image from 'next/image'
import React from 'react'
import RedDownArrow from '@/public/reddownarrow.svg'
import GrayDownArrow from '@/public/graydownarrow.svg'
import GrayUpArrow from '@/public/grayuparrow.svg'
import { GoPlay } from "react-icons/go";


const NextCard = ({ State = "live", id }) => {

    id = "#218286"
    return (
        <div className=" min-w-[300px] min-h-[350px] bg-light rounded-3xl relative z-10" >



            <div className='absolute top-0 w-full z-10 flex flex-col items-center justify-between overflow-hidden  text-purple'>
                <div className='flex flex-row w-full text-sm justify-between py-2 px-5 bg-purple rounded-t-3xl  text-light  select-none '>

                    <h2 className='font-bold flex text-m'>
                     <span><GoPlay className='text-xl mr-1' /></span>

                        Next
                    </h2>
                    <h3>{id}</h3>
                </div>
                <div className='w-full h-auto flex flex-col mt-6 px-2'>
                    <div className='w-full h-auto mx-auto relative'>
                        <div className='absolute top-10 left-[50%] translate-x-[-50%] text-[gray] font-bold  text-xs ' >1.87x <span className='font-medium'>Payout</span></div>
                        <div className='absolute top-4 left-[50%] translate-x-[-50%] text-cyan font-black  '>UP</div>

                        <Image className='w-full h-16 z-9  select-none ' src={GrayUpArrow} alt="" />

                    </div>
                    <div className=" w-[95%] flex flex-col mx-auto p-[2px] bg-gradient-to-b from-cyan to-purple rounded-2xl relative z-10">

                        <div className='w-full h-full p-4 flex flex-col gap-1 rounded-2xl bg-light'>
                            
                            <div className='w-full h-auto flex flex-row  justify-between items-center text-textcol text-xs font-black capitalize ' >
                                <div>prize pool:</div>
                                <div> 8.5143 BNB</div>
                            </div>
                            <div className='w-full py-3 bg-cyan text-center text-xs text-light font-bold rounded-2xl border-[1px] border-solid border-b-[grey] '>Enter UP</div>
                            <div className='w-full py-3 bg-red text-center text-xs text-light font-bold rounded-2xl border-[1px] border-solid border-b-[grey] '>Enter DOWN</div>
                        </div>
                    </div>
                    <div className={`w-full h-auto mx-auto relative`} >
                        <div className='absolute top-2 left-[50%] translate-x-[-50%] text-[grey] font-bold  text-xs ' >1.87x <span className='font-medium'>Payout</span></div>
                        <div className='absolute top-6 left-[50%] translate-x-[-50%] text-red font-black  '>DOWN</div>

                        <Image src={GrayDownArrow} className='w-full h-16 z-9  select-none ' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NextCard