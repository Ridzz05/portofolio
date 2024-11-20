'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center mt-2 relative'>
        <MotionLink 
            href="/" 
            className='w-16 h-16 bg-dark text-light flex items-center justify-center
            rounded-full text-2xl font-bold border border-solid border-transparent 
            dark:border-light relative overflow-hidden'
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
                backgroundColor: [
                    "#121212",        // Hitam
                    "#0ea5e9",        // Biru
                    "#22c55e",        // Hijau
                    "#ffffff",        // Putih
                    "#121212"         // Kembali ke hitam
                ],
                color: [
                    "#ffffff",        
                    "#121212",        
                    "#ffffff",        
                    "#121212",        
                    "#ffffff"         
                ],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                initial={{ opacity: 1 }}
                animate={{
                    opacity: [1, 0.8, 1],
                    textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                M.R
            </motion.span>
        </MotionLink>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            className="absolute -bottom-8 whitespace-nowrap bg-white text-dark px-4 py-2 rounded-md text-sm
                      shadow-lg transform -translate-y-2"
        >
            <motion.span
                animate={{
                    color: [
                        "#121212",    // Hitam
                        "#0ea5e9",    // Biru
                        "#22c55e",    // Hijau
                        "#121212"     // Hitam
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="font-medium"
            >
                0_o
            </motion.span>
            {/* Tambahkan panah atas untuk popup */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45" />
        </motion.div>
    </div>
  )
}

export default Logo