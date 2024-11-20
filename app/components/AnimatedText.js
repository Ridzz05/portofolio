'use client';
import React from 'react'
import {motion} from "framer-motion"

const quote = {
    initial:{
        opacity:1
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08
        }
    }
}

const letter = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}


function AnimatedText({text, className=""}) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden sm:py-0'>
        <motion.h1 className={`inline-block w-full text-white font-bold capitalize text-8xl ${className}`}
                    variants={quote}
                    initial="initial"
                    animate="animate"
        >
            {text.split(" ").map((e,index)=>
                <motion.span key={e+'-'+index} className='inline-block'
                            variants={letter}
                >
                    {e}&nbsp;
                </motion.span>
            )}
        </motion.h1>
    </div>
  )
}

export default AnimatedText