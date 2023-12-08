import React from 'react'
import RabbitCardImage from "@/public/rabbitcards.png"
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const RabbitArrowButtons = ({ className }) => {
  return (
    <div className={`absolute left-[50%] translate-x-[-50%] lg:top-40 ${className}`} >
      <div className='flex flex-row relative text-cyan font-bold'>
        <div className='bg-light py-2 pl-2 pr-10 rounded-l-full active:bg-[lightgrey]' >
          <FaArrowLeft />
        </div>
        <div className='bg-light py-2 pr-2 pl-10 rounded-r-full active:bg-[lightgrey]'>
          <FaArrowRight />
        </div>
        <Image className='w-20 aspect-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] select-none' src={RabbitCardImage} alt="rabbit card image" />

      </div>
    </div>
  )
}

export default RabbitArrowButtons