'use client';
import React, { useRef } from 'react'
import {motion,useScroll} from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position,company,time,work}) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl'>{position}&nbsp; in <span className='text-blue-700'>{company}</span></h3>
                <span className='capitalize font-small text-white/75 sm:text-md'>
                    {time}
                </span>
                <p className='font-medium w-full sm:text-sm text-justify'>
                    {work}
                </p>
            </motion.div>
        </li>)
}

function Experience() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
  return (
    <>
        <div className='my-52 sm:my-15'>
            <h2 className='font-bold text-6xl mt-20 sm:mt-5 w-full text-center mb-16 sm:text-3xl'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative sm:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-emerald-500 origin-top'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details position={"Self Employed"} company={"Home"} time="November 2019 - Februari 2023" work="Memulai usaha sendiri dengan membuat website dan membuka jasa service barang - barang elektronik." />
                    <Details position={"Web Developer"} company={"PT. Lorem Ipsum Dolor"} time="2023 - Present"  work="Membangun sebuah Aplikasi Sistem Informasi Manajemen Aset dan Penjualan untuk UMKM dengan menggunakan Laravel, Livewire, dan Tailwind CSS." />
                    <Details position={"Mobile Web Developer"} company={"PT. Lorem Ipsum Dolor"} time="2023 - Present"  work="Membangun aplikasi Penjualan untuk UMKM dengan menggunakan Flutter, dan Bantuan AI untuk meningkatkan produktivitas selama pembangunan aplikasi." />
                </ul>
            </div>
        </div>
    </>
  )
}

export default Experience