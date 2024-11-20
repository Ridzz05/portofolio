'use client';
import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({jurusan,institution,time,description}) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl'>{institution}</h3>
                <p className='font-semibold w-full capitalize'>
                    {jurusan}
                </p>
                <span className='capitalize font-medium text-white/80 sm:text-md'>
                    {time}
                </span>
                <p className='font-medium w-full sm:text-sm sm:text-justify'>
                    {description}
                </p>
            </motion.div>
        </li>)
}

function Education() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <>
        <div className='my-52'>
            <h2 className='font-bold text-6xl mt-20 w-full text-center mb-16 sm:text-3xl'>Education</h2>
            <div ref={ref} className='w-[75%] mx-auto relative sm:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-emerald-500 origin-top'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details jurusan={"Ilmu Pengetahuan Sosial(IPS)"} institution={"SMA Negeri 1 Tulung Selapan"} time="2021 - 2023" 
                            description="Mempelajari konsep-konsep dasar dalam pengembangan perangkat lunak dan memperoleh pemahaman yang tentang siklus hidup pengembangan perangkat lunak serta dasar pemrograman" />
                    <Details jurusan={"Sistem Informasi"} institution={"Universitas Multi Data Palembang"} time="2024 - Present" 
                    description="Mempelajari dasar pemrograman serta mendalami konsep-konsep yang ada pada teknologi informasi dan pengembangan perangkat lunak seperti Laravel,Flutter, dan lainnya. 
                    Begitu pula dengan memahami teknologi terbaru seperti Machine Learning, AI , data warehouse dan sebagainya" />
                </ul>
            </div>
        </div>
    </>
  )
}

export default Education