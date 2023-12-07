import Image from 'next/image'
import CoinImage from '@/public/CoinsImage.png'
import React from 'react'

const CoinCounter = () => {
    return (
        <div className='flex flex-row w-auto overflow-visible items-center relative'>
            <Image src={CoinImage} className='w-20 aspect-square absolute' />
            <div className='flex flex-row bg-light w-auto h-10 ml-12 pl-10 pr-4 items-center rounded-full ' >
                <div className='font-extrabold text-textcol '>BNBUSD</div>
                <div className='font-medium text-textcol pl-2 text-[12px]' >$228.5332</div>

            </div>
        </div>
    )
}

export default CoinCounter