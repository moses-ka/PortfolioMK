"use client"
import { BtnProps } from "@/typs";
import {motion} from 'framer-motion';
export default function Btn(props:BtnProps) {
    const { text } = props;
    return (
        <>
    <motion.button
        className="relative px-6 py-3 font-semibold text-white bg-black rounded-lg  "
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Background animation */}
        <motion.span
          className="absolute inset-0 w-full h-full bg-white rounded-lg"
          variants={{
            rest: { width: "0%", left: "0%" },
            hover: { width: "100%", left: "0%" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

      
        <motion.span
          className="relative z-10"
          variants={{
            rest: { color: "white" },
            hover: { color: "black" },
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </motion.button>
        </>
    );
    }