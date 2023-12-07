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



function Container( {children ,className}) {
  
  return (
    <div className={`w-full h-full inline-block z-0  p-32 mt-40 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
      {children}
    </div>
  )
}


export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between  bg-blue relative">

      <nav className="flex w-full z-10 absolute top-0 left-0  justify-between items-center px-10 py-6 ">
        <CoinCounter />
        <RabbitArrowButtons/>
       
        <div className="flex flex-row items-center gap-4">
          <TimeCounter />

          <div className="w-12 h-12 bg-purple/60 rounded-xl border-0 border-solid border-b-2 border-purple active:border-0 text-light flex items-center justify-center text-3xl"><IoIosHelpCircleOutline /></div>
          <div className="w-12 h-12 bg-purple/60 rounded-xl border-0 border-solid border-b-2 border-purple active:border-0 text-light flex items-center justify-center text-3xl"><CiTrophy /></div>
          <div className="w-12 h-12 bg-[lightgrey] rounded-xl border-0 border-solid border-b border-[grey] active:border-0 text-light flex items-center justify-center text-xl"><FaClockRotateLeft /></div>

        </div>

      </nav>

      <Container className={`flex flex-row  items-center gap-5 overflow-x-scroll`}>
        <ExpiredCard />
        <ExpiredCard />
        <LiveCard />
        <NextCard />
        <LaterCard />

      </Container>
    </main>
  )
}
