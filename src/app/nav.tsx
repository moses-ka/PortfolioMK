import Link from "next/link";
import Image from 'next/image';

import Btn from "./components/Btn";
import { LuSunMoon } from "react-icons/lu";
import logoBlack from "../assets/logoBlack.png" 
import logoWhite from "../assets/logoWhite.png"

export default function Nav() {
    return (
      <>
      <nav>
       <div className="flex justify-between items-center w-full">

        
            <div id="logo" className="w-28 h-full p-4 ">
                <Image 
                priority
                src={logoWhite} alt="logo" width={120} height={48} />
            </div>
            <div id="mood" className="flex justify-normal items-center gap-2 md:gap-4">
                <div className="bg-white rounded-full h-4 w-4"></div>
                <LuSunMoon size={26} className="text-white hover:scale-125"/>
                <Btn text={'Mood'}/>

            </div>
            <div id="navagators">
                <ul className="flex justify-between items-center gap-4 w-full p-4">
                    <li>
                        <Btn text={'Contact'}/>
                   
                    </li>
                    
                </ul>
            </div>

       </div>
      </nav>
      </>
    );
  }
