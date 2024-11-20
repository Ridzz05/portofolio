'use client';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import BaseLayout from '../components/BaseLayout'
import AnimatedText from '../components/AnimatedText'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import { LinkArrow } from '../components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import pp from '../../public/images/pp.jpeg'
import Education from '../components/Education'

const textVariants = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const paragraphVariants = {
    initial: {
        opacity: 0,
        x: -50
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export default function About() {
    return (
        <>
        <BaseLayout className='pt-12'>
          <FadeIn>
            <AnimatedText text={"About Rizki Algipari"} 
              className='!text-6xl !text-center mb-8 lg:!text-5xl md:!text-4xl sm:!text-3xl' 
            />
          </FadeIn>
          
          <div className='grid w-full grid-cols-6 gap-16 lg:gap-8 md:flex md:flex-col md:gap-12'>
            
            <FadeIn delay={0.3} className='col-span-3 md:w-full flex justify-center items-center md:order-1'>
              <div className='relative w-[350px] h-[350px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] 
                group cursor-pointer'>
                
                <div className='absolute -inset-2 rounded-xl bg-white/20 blur-2xl
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                  group-hover:scale-110'></div>
                
                <div className='relative w-full h-full rounded-xl bg-light overflow-hidden
                  border-2 border-dark shadow-xl
                  transition-all duration-500 ease-out
                  hover:translate-y-[-8px] hover:scale-[1.02]
                  after:content-[""] after:absolute after:inset-0 
                  after:bg-gradient-to-t after:from-black/20 after:to-transparent 
                  after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-500'>
                  
                  <Image 
                    src={pp} 
                    alt="profile"
                    priority
                    className='w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-[1.15] group-hover:rotate-2'
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className='col-span-3 md:w-full flex flex-col items-start justify-start md:order-2'>
              <h2 className='mb-4 text-lg font-bold uppercase text-white/90 sm:mb-2'>
                Tentang Saya
              </h2>
              <div className='font-medium'>
                <p className='font-medium'>
                 Saya seorang mahasiswa yang sedang menempuh pendidikan perguruan tinggi di Universitas Multi Data Palembang dengan jurusan Sistem Informasi.
                </p>

                <p className='font-medium my-3'>
                  Selama kuliah, saya telah mengikuti beberapa kegiatan dan organisasi yang berkaitan dengan pemrograman dan pengembangan web, terutama Unit Kegiatan Mahasiswa (UKM) PROCOM Yang diselenggarakan oleh Universitas Multi Data Palembang.
                </p>

                <p className='font-medium my-3'>
                  Sebelum saya memulai karir sebagai web developer, Saya membuka usaha sendiri yang bergerak di bidang jasa pembuatan website dan Service barang elektronik.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <Skills />
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <Experience />
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <Education />
          </FadeIn>
        </BaseLayout>
        </>
    );
}