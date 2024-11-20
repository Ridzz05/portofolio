'use client';
import BaseLayout from '../components/BaseLayout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import portoHoly from '../../public/images/porto_holycats.png'
import portoResto from '../../public/images/porto_resto.png'
import portoTravel from '../../public/images/porto_travel.png'
import portoMeows from '../../public/images/porto_meows.png'
import portoCalm from '../../public/images/porto_calm.png'
import { GithubIcon } from '../components/Icons'
import { motion } from 'framer-motion'

const cardVariants = {
    initial: { 
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    animate: { 
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
    hover: {
        y: -10,
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
}

const FeaturedProjects = ({type,title,summary,img})=>{

    return (
            <motion.article 
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className='w-full flex items-center justify-between rounded-3xl border
                border-solid border-dark bg-light shadow-2xl shadow-white p-12 md:flex-col md:p-6 md:my-4'>
                <Link href='/' className='w-1/2 md:w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} className="w-full h-auto"/>
                </Link>

                <div className='w-1/2 md:w-full flex flex-col items-start justify-between pl-6 md:pl-0'>
                    <span className='text-blue-700 font-medium text-xl'>{type}</span>
                    <h2 className='my-2 w-full text-left text-4xl font-bold md:text-xl text-black'>{title}</h2>
                    <p className='my-2 font-medium text-dark md:text-md text-justify'>{summary}</p>
                </div>
            </motion.article>
    )
}

const Project = ({type,title,img,summary})=>{

    return (
            <motion.article 
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className='w-full flex flex-col items-start justify-center rounded-2xl border
                border-solid border-dark bg-light shadow-2xl shadow-white p-6 md:my-4'>
                <Link href='/' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} className="w-full h-64 object-cover md:object-fill"/>
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-blue-700 font-medium text-xl'>{type}</span>
                    <h2 className='my-2 w-full text-left text-xl font-bold text-black md:text-md'>{title}</h2>
                    <p className='w-full text-black md:text-justify'>{summary}</p>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href='/' className='text-lg font-semibold underline text-dark'>
                            Visit
                        </Link>
                        <Link href='/' target='_blank' className='w-8 bg-dark rounded-md'>
                        {" "}
                        <GithubIcon></GithubIcon>
                        </Link>
                    </div>
                </div>
            </motion.article>
    )
}

// Tambahkan stagger effect pada container
const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

export default function Projects() {
    return (
        <>
        <BaseLayout className='pt-12'>
          <AnimatedText text={"Programming is the closest thing we have to magic."} 
          className='!text-6xl !text-center mb-14 md:!text-2xl'></AnimatedText>
          
            <motion.div 
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className='grid grid-cols-12 gap-24 md:grid-cols-6 md:gap-0'
            >
                <div className='col-span-12 md:col-span-6'>
                    <FeaturedProjects title={'SMART RESTAURANT SYSTEM'} img={portoResto} type='Featured Project' summary={`Aplikasi ini menawarkan sistem pemesanan inovatif melalui QR Code, memungkinkan pelanggan untuk dengan cepat melihat menu, memesan, dan membayar secara aman melalui Payment Gateway Tripay. 
                    Dengan integrasi Pusher, notifikasi realtime disediakan kepada koki, kasir, dan pemilik restoran, memastikan operasional yang efisien. 
                    Selain itu, aplikasi ini mendukung multi-user roles, seperti koki untuk mengelola pesanan, kasir untuk mengelola pembayaran, dan pemilik restoran untuk memantau kinerja keseluruhan dan mengelola menu.`} >

                    </FeaturedProjects>
                </div>

                <div className='col-span-6'>
                    <Project title={'TRAVEL ORDERING WEBSITE'} img={portoTravel} type='Project' summary='Aplikasi pemesanan tiket travel berbasis website dibuat dengan codeigniter 4 dan terintegrasi payment gateway tripay.'></Project>
                </div>

                <div className='col-span-6'>
                    <Project title={'COMPANY PROFILE WEBSITE'} img={portoHoly} type='Project' summary='Website company profile dengan cms untuk perusahaan bernama holycatlabs dengan menggunakan laravel'></Project>
                </div>

                <div className='col-span-6'>
                    <Project title={'MEOWS APP'} img={portoMeows} type='Project' summary='Aplikasi meows merupakan aplikasi forum dan blog untuk para pecinta kucing berdiskusi yang dibuat menggunakan flutter serta backendnya adalah laravel. Aplikasi ini dibuat dengan metodologi scrum dan menggunakan design sprint'></Project>
                </div>

                <div className='col-span-6'>
                    <Project title={'MENTAL HEALTH APP'} img={portoCalm} type='Project' summary='Aplikasi mental health dengan fitur utama mendeteksi tingkat stres yang dihubungkan dengan mdartband xiaomi untuk melakukan pendetekan tingkat stres. Dibuat menggunakan flutter dan firebase sebagai backend as a service'></Project>
                </div>
            </motion.div>
        </BaseLayout>
        </>
    );
}