'use client';
import FadeIn from './components/FadeIn';
import Image from 'next/image'
import NavBar from './components/NavBar'
import BaseLayout from './components/BaseLayout'
import pp from '../public/images/sigma.jpeg'
import AnimatedText from './components/AnimatedText'
import { LinkArrow } from './components/Icons'
import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <BaseLayout>
      <FadeIn>
        <div className='flex md:flex-col items-center justify-between w-full'>
          <FadeIn delay={0.2} className='w-1/2 md:w-2/5 sm:w-2/3 md:my-3'>
            <Image 
              src={pp} 
              alt='poto propil' 
              className='md:w-full w-3/5 h-auto rounded-full'
              sizes='(max-width: 760px) 100vw, (max-width: 200px) 75vw, 50vw'
            />
          </FadeIn>

          <div className='w-1/2 md:w-full flex flex-col items-center self-center'>
            <FadeIn delay={0.3}>
              <AnimatedText 
                text={"Menjelajahi dunia teknologi, dengan menggunakan kode sebagai kunci"} 
                className='!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-4xl sm:!text-3xl md:!text-center'
              />
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className='my-4 text-base font-medium'>
                Halo, Selamat datang!! Saya adalah seorang fullstack developer yang selalu haus akan ilmu pengetahuan khususnya teknologi. <br />
                Silahkan mengeksplorasi karya-karya yang telah saya buat dan hubungi saya jika anda perlu seorang developer. 
              </p>
            </FadeIn>

            <FadeIn delay={0.5} className='flex items-center self-start mt-2'>
              <Link 
                href="/RIZKI_RESUME.pdf" 
                target={"_blank"} 
                className='flex items-center text-black p-2.5 px-6 rounded-lg border-2 border-solid text-lg font-semibold 
                bg-white hover:bg-transparent hover:border-light hover:border-solid hover:text-light'
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhrizkialghipari@gmail.com&su=Hallo%20Rizki!" 
                target="_blank"
                rel="noopener noreferrer"
                className='ml-4 text-lg font-medium capitalize underline'
              >
                Contact Me
              </Link>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </BaseLayout>
  )
}
