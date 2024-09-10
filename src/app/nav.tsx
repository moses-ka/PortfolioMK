'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import  useStore from "./store";
export default function Nav() {
    const {theme, setTheme} = useStore();
    const [moodIndex, setMoodIndex] = useState(0);

    
    const handleMoodChange = () => {
        const colorThemes = [
         
            { foreground: '#F5F5F5', background: '#1C1B1B' ,dark:true  }, // black
            { foreground: '#FFFFBF', background: '#1D1D00' ,dark:true  }, // Yellow
            { foreground: '#BFFFD5', background: '#001819' ,dark:true  }, // Green
            { foreground: '#FAC3FF', background: '#11010E' ,dark:true }, // Red
            { foreground: '#CCCCFF', background: '#030B25' ,dark:true }, // Blue
            { foreground: '#1C1B1B', background: '#F5F5F5',dark:false }, // white
            { foreground: '#1D1D00', background: '#FFFFBF', dark:false }, // YellowDark
            { foreground: '#001819', background: '#BFFFD5', dark:false}, // GreenDark
            { foreground: '#11010E', background: '#FAC3FF', dark:false }, // RedDark
            { foreground: '#030B25', background: '#CCCCFF', dark:false }, // BlueDark
          // Add more themes as needed
        ];
      
        // Calculate the new mood index first
        const newMoodIndex = (moodIndex + 1) % colorThemes.length;
      
        // Then use the new index to get the theme
        const { foreground, background ,dark } = colorThemes[newMoodIndex];
      
        // Update the theme in state and localStorage
        const currentTheme = { foreground, background,dark };
        setTheme(currentTheme);

      
        // Update the state with the new mood index
        setMoodIndex(newMoodIndex);
      };
     
    return (
        <>
        

            <nav className={`w-full overflow-hidden sticky top-0  left-0  z-50  h-20   bg-opacity-50`}
                style={{ backgroundColor: theme.background , color: theme.foreground }}
            >
                <div className="flex justify-between items-center w-full  ">


                    <div id="logo" className={`w-28 h-full p-4 ${!theme.dark? ' invert':'invert-0'}`}>
                        <svg className="" width="120" height="60" viewBox="0 0 416 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.40649 1C1.87982 1 0.910717 2.63992 1.64603 3.97783C6.03127 11.9569 17.8115 33.7051 20 41C22.1687 48.2289 34.4016 137.391 39.1323 172.204C39.4436 174.495 42.7492 174.471 43.0961 172.185L62.972 41.1845C62.9906 41.0618 63.0206 40.941 63.0617 40.8238L76.0688 3.6607C76.5239 2.36035 75.5587 1 74.181 1H3.40649Z"
                                fill="#FFFFFF" />
                            <path d="M138.406 1C136.88 1 135.911 2.63992 136.646 3.97783C141.031 11.9569 152.812 33.7051 155 41C157.169 48.2289 169.402 137.391 174.132 172.204C174.444 174.495 177.749 174.471 178.096 172.185L197.972 41.1845C197.991 41.0618 198.021 40.941 198.062 40.8238L211.069 3.6607C211.524 2.36035 210.559 1 209.181 1H138.406Z"
                                fill="#FFFFFF" />
                            <path d="M84.4229 41C82.8926 41 81.9225 42.6478 82.6617 43.9878C86.2594 50.5094 94.6359 65.9952 97 73C99.1639 79.4117 105.826 113.738 109.479 132.951C109.907 135.206 113.306 135.098 113.612 132.823C115.626 117.866 119.327 92.9565 124 73C126.254 63.3737 131.563 49.59 133.882 43.7657C134.41 42.4417 133.433 41 132.007 41H84.4229Z"
                                fill="#FFFFFF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.40648 1.5C2.26042 1.5 1.53186 2.73199 2.08421 3.73701C4.27774 7.72818 8.32175 15.1648 12.0917 22.5174C15.852 29.8509 19.3688 37.1559 20.4789 40.8563C20.7606 41.7952 21.1939 44.0127 21.7434 47.2004C22.2955 50.4026 22.9702 54.6179 23.7333 59.5788C25.2594 69.5011 27.14 82.4142 29.1004 96.1877C33.0213 123.735 37.2624 154.73 39.6277 172.137C39.7443 172.994 40.3991 173.415 41.0979 173.411C41.7994 173.407 42.4708 172.973 42.6017 172.11L62.4777 41.1095C62.5009 40.9561 62.5385 40.8051 62.5897 40.6587L75.5968 3.49552C75.9382 2.52026 75.2143 1.5 74.181 1.5H3.40648ZM1.20784 4.21866C0.289571 2.54784 1.49922 0.5 3.40648 0.5H74.181C75.9032 0.5 77.1096 2.20044 76.5407 3.82587L63.5336 40.989C63.5028 41.0769 63.4803 41.1675 63.4663 41.2595L43.5904 172.26C43.3746 173.683 42.2197 174.404 41.1039 174.411C39.9852 174.418 38.8316 173.705 38.6368 172.271C36.2715 154.865 32.0308 123.873 28.1104 96.3286C26.1501 82.5563 24.2702 69.6475 22.7449 59.7308C21.9822 54.7722 21.3085 50.5637 20.758 47.3702C20.2049 44.1621 19.7816 42.012 19.5211 41.1437C18.4428 37.5492 14.9752 30.3326 11.2019 22.9736C7.43831 15.6336 3.39956 8.20653 1.20784 4.21866ZM138.406 1.5C137.26 1.5 136.532 2.73199 137.084 3.73701C139.278 7.72818 143.322 15.1648 147.092 22.5174C150.852 29.8509 154.369 37.1559 155.479 40.8563C155.761 41.7952 156.194 44.0127 156.743 47.2004C157.295 50.4026 157.97 54.6179 158.733 59.5788C160.259 69.5011 162.14 82.4142 164.1 96.1877C168.021 123.735 172.262 154.73 174.628 172.137C174.744 172.994 175.399 173.415 176.098 173.411C176.799 173.407 177.471 172.973 177.602 172.11L197.478 41.1095C197.501 40.9561 197.538 40.8051 197.59 40.6587L210.597 3.49552C210.938 2.52026 210.214 1.5 209.181 1.5H138.406ZM136.208 4.21866C135.29 2.54784 136.499 0.5 138.406 0.5H209.181C210.903 0.5 212.11 2.20044 211.541 3.82587L198.534 40.989C198.503 41.0769 198.48 41.1675 198.466 41.2595L178.59 172.26C178.375 173.683 177.22 174.404 176.104 174.411C174.985 174.418 173.832 173.705 173.637 172.271C171.272 154.865 167.031 123.873 163.11 96.3286C161.15 82.5563 159.27 69.6475 157.745 59.7308C156.982 54.7722 156.309 50.5637 155.758 47.3702C155.205 44.1621 154.782 42.012 154.521 41.1437C153.443 37.5492 149.975 30.3326 146.202 22.9736C142.438 15.6336 138.4 8.20653 136.208 4.21866ZM84.4229 41.5C83.2743 41.5 82.5436 42.7385 83.0995 43.7463C84.8995 47.0093 87.896 52.5163 90.7388 58.0854C93.5763 63.6441 96.2782 69.2979 97.4737 72.8401C98.5685 76.0837 100.782 86.3086 103.171 98.0753C105.564 109.863 108.143 123.25 109.97 132.857C110.129 133.693 110.826 134.109 111.576 134.086C112.326 134.062 113.003 133.602 113.117 132.756C115.131 117.797 118.834 92.8673 123.513 72.886C125.777 63.2181 131.1 49.4013 133.418 43.5807C133.814 42.5848 133.079 41.5 132.007 41.5H84.4229ZM82.2239 44.2293C81.3015 42.5571 82.5108 40.5 84.4229 40.5H132.007C133.786 40.5 135.005 42.2986 134.347 43.9507C132.026 49.7787 126.731 63.5293 124.487 73.114C119.82 93.0458 116.121 117.935 114.108 132.89C113.915 134.319 112.739 135.05 111.607 135.085C110.474 135.121 109.257 134.463 108.987 133.044C107.161 123.438 104.583 110.056 102.191 98.2743C99.7948 86.4719 97.5955 76.328 96.5263 73.1599C95.3576 69.6973 92.6892 64.1058 89.8481 58.54C87.0122 52.9846 84.0216 47.488 82.2239 44.2293Z" fill="#FFFFFF" />
                            <path d="M250.406 1C248.88 1 247.911 2.63992 248.646 3.97783C253.031 11.9569 264.812 33.7051 267 41C269.169 48.2289 281.402 137.391 286.132 172.204C286.444 174.495 289.749 174.471 290.096 172.185L309.972 41.1845C309.991 41.0618 310.021 40.941 310.062 40.8238L323.069 3.6607C323.524 2.36035 322.559 1 321.181 1H250.406Z"
                                fill="#FFFFFF" />
                            <path d="M336.039 88.9946C336.555 90.4355 338.433 90.7937 339.446 89.6463C344.374 84.0618 356.133 70.9579 361.931 66.3721C367.239 62.1745 397.314 44.3378 414.173 34.4256C416.152 33.2622 414.906 30.0988 412.66 30.5768C397.9 33.7195 373.199 38.627 352.835 40.9504C343.012 42.0712 328.246 41.7167 321.981 41.4948C320.556 41.4443 319.528 42.8499 320.008 44.1918L336.039 88.9946Z"
                                fill="#FFFFFF" />
                            <path d="M313.642 140.381C312.908 141.724 313.888 143.366 315.419 143.36C322.867 143.33 340.473 143.407 347.753 144.691C354.417 145.868 387.733 156.484 406.344 162.493C408.529 163.198 410.064 160.164 408.215 158.804C396.056 149.864 375.973 134.67 360.702 120.999C353.336 114.404 343.787 103.136 339.788 98.3072C338.879 97.2094 337.146 97.3753 336.462 98.6259L313.642 140.381Z"
                                fill="#FFFFFF" />
                        </svg>


                    </div>
                    <div id="mood" className="flex justify-center items-center gap-2 md:gap-4 mr-4">
                        <button
                        
                         className=" rounded-full h-4 w-4 "
                            style={{  background: theme.foreground }}	
                         ></button>
                       
                        <motion.button
                            className="relative px-6 py-3 font-semibold   rounded-2xl  "
                            style={{ backgroundColor: theme.background , color: theme.foreground }}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            onClick={handleMoodChange}
                        >
                            {/* Background animation */}
                            <motion.span
                                className="absolute inset-0 w-full h-full rounded-2xl"
                                style={{ backgroundColor: theme.foreground , color: theme.background }}
                                variants={{
                                    rest: { width: "0%", left: "0%" },
                                    hover: { width: "100%", left: "0%" },
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />


                            <motion.span
                                className="relative z-10"
                                style={{ color: theme.foreground  }}
                                variants={{
                                    rest: { color: theme.foreground  },
                                    hover: { color: theme.background }
                                }}
                                transition={{ duration: 0.15, ease: "easeInOut" }}
                            >
                                Mood
                            </motion.span>
                            
                        </motion.button>

                    </div>
                    <div id="navagators" className="hidden md:block">
                        <ul className="flex justify-between items-center gap-4 w-full p-4">
                            <li>
                                <a className=" cursor-pointer" href="https://www.linkedin.com/in/moses-ka-mohs/">
                                   
                                <motion.button
                            className="relative px-6 py-3 font-semibold   rounded-2xl  "
                            style={{ backgroundColor: theme.background , color: theme.foreground }}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            onClick={handleMoodChange}
                        >
                            {/* Background animation */}
                            <motion.span
                                className="absolute inset-0 w-full h-full rounded-2xl"
                                style={{ backgroundColor: theme.foreground , color: theme.background }}
                                variants={{
                                    rest: { width: "0%", left: "0%" },
                                    hover: { width: "100%", left: "0%" },
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />


                            <motion.span
                                className="relative z-10"
                                style={{ color: theme.foreground  }}
                                variants={{
                                    rest: { color: theme.foreground  },
                                    hover: { color: theme.background }
                                }}
                                transition={{ duration: 0.15, ease: "easeInOut" }}
                            >
                                Contact
                            </motion.span>
                            
                        </motion.button>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}
