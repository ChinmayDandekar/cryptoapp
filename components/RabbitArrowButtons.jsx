import React from 'react'
import RabbitCardImage from "@/public/rabbitcards.png"
import Image from 'next/image'

const RabbitArrowButtons = () => {
  return (
      <div>
          <div className='flex flex-row relative text-cyan font-bold'>
          <div className='bg-light py-1 pl-2 pr-10 rounded-l-full'> {"<-"} </div>
          <div className='bg-light py-1 pr-2 pl-10 rounded-r-full'> {"->"} </div>
          <Image className='w-20 aspect-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={RabbitCardImage} />

    </div>
    </div>
  )
}

export default RabbitArrowButtons