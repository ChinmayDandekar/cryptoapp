"use client"

import LiveCard from "@/components/LiveCard";
import ExpiredCard from "@/components/ExpiredCard";
import CoinCounter from "@/components/CoinCounter";
import RabbitArrowButtons from "@/components/RabbitArrowButtons";
import TimeCounter from "@/components/TimeCounter";
import NextCard from "@/components/NextCard";
import LaterCard from "@/components/LaterCard";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";



function Container({ children, className }) {



  // const handleOnLoad = () => {
  //   const element = document.getElementById("container")
  //   console.log(element.clientWidth)
  //   // element.scrollLeft -= element.scrollWidth / 2
  //   // element.scrollBy(element.clientWidth-(275), 0)
  // }

  return (
    <div  id="container" className={`w-full  h-full flex flex-row z-0 mx-10 py-32 mt-40 xl:p-24 lg:p-16 md:p-12 sm:p-8 overflow-auto ${className}`}>
      {children}
    </div>
  )
}


export default function Home() {

  const [val, setVal] = useState(0);
  const cardData = [
    {
      id: "1",
      data: {
        state: "expired",
      },
    },
    {
      id: "2",
      data: {
        state: "expired",
      },
    },
    {
      id: "3",
      data: {
        state: "live",
      },
    },
    {
      id: "4",
      data: {
        state: "next",
      },
    },
    {
      id: "5",
      data: {
        state: "later",
      },
    },

  ]




  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between  bg-blue relative overflow-y-hidden overflow-x-hidden">

      <nav className="flex w-full z-10 absolute top-0 left-0  justify-between items-center px-10 py-6 lg:px-4 ">
        <CoinCounter />
        <RabbitArrowButtons />

        <div className="flex flex-row items-center gap-4">
          <TimeCounter />
          <div className="flex flex-row items-center gap-4 lg:absolute lg:top-20 lg:left-[50%] lg:translate-x-[-50%] ">
            <div className="w-12 h-12 bg-purple/60 rounded-xl border-0 border-solid border-b-2 border-purple active:border-0 text-light flex items-center justify-center text-3xl"><IoIosHelpCircleOutline /></div>
            <div className="w-12 h-12 bg-purple/60 rounded-xl border-0 border-solid border-b-2 border-purple active:border-0 text-light flex items-center justify-center text-3xl"><CiTrophy /></div>
            <div className="w-12 h-12 bg-[lightgrey] rounded-xl border-0 border-solid border-b border-[grey] active:border-0 text-light flex items-center justify-center text-xl"><FaClockRotateLeft /></div>

          </div>

        </div>

      </nav>

      <Container   className={`flex flex-row justify-center items-center  gap-4`}>
      {cardData.map((val, index) => {
          return (
            <>
            {val.data.state === "expired" && <ExpiredCard Key={val.id} className="" />}
            {val.data.state === "live" && <LiveCard Key={val.id} className=""/>}
            {val.data.state === "next" && <NextCard Key={val.id} className=""/>}
            {val.data.state === "later" && <LaterCard Key={val.id} className=""/>}
            </>
          )
        })}

      </Container>

      {/* <Container className={`grid grid-cols-5 col justify-center items-center overflow-x-hidden`}>
        {cardData.map((val, index) => {
          return (
            <>
            {val.data.state === "expired" && <ExpiredCard Key={val.id} className="col-span-1" />}
            {val.data.state === "live" && <LiveCard Key={val.id} className="col-span-1"/>}
            {val.data.state === "next" && <NextCard Key={val.id} className="col-span-1"/>}
            {val.data.state === "later" && <LaterCard Key={val.id} className="col-span-1"/>}
            </>
          )
        })}

      </Container> */}
    </main>
  )
}
