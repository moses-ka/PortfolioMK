"use client"
import { BtnProps } from "@/typs";
import {motion} from 'framer-motion';
import { useStore} from '../store'
export default function Btn(props:BtnProps) {
  const localTheme = useStore(state => state.theme);
  
    const { text } = props;
    return (
        <>
    <motion.button
        className="relative px-6 py-3 font-semibold  rounded-2xl  "
        style={{ backgroundColor: localTheme.background  , color: localTheme.foreground }}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Background animation */}
        <motion.span
          className="absolute inset-0 w-full h-full  rounded-2xl"
          style={ { backgroundColor: localTheme.foreground }}
          variants={{
            rest: { width: "0%", left: "0%" },
            hover: { width: "100%", left: "0%" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

      
        <motion.span
          className="relative z-10"
          style={{ color: localTheme.foreground }}
          variants={{
            rest: { color: localTheme.foreground },
            hover: { color: localTheme.background },
          }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </motion.button>
        </>
    );
    }