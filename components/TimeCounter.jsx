import React from 'react'
import Image from 'next/image'
import ClockImage from '@/public/ClockImage.png'

const TimeCounter = () => {
  return (
    <div className='flex flex-row w-auto overflow-visible items-center relative'>
            <div className='flex flex-row bg-light w-auto h-10 mr-10 pr-10 pl-4 lg:pr-5 lg:pl-2 lg:h-8 items-center rounded-full ' >
                <div className=' font-black text-purple lg:text-xs '>00:33</div>
                <div className='text-[12px] px-2 font-medium text-textcol lg:text-[10px]'>5m</div>

            </div>
            <Image src={ClockImage} className='w-20 aspect-square absolute -top-4 right-0  lg:w-16' />
        </div>
  )
}

export default TimeCounter