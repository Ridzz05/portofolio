"use client";
import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Logo from './Logo'
import InstagramIcon, { GithubIcon, LinkedInIcon } from './Icons';
import {motion} from "framer-motion"

const CustomLink = ({href,title,className=""})=>{
    const router = useRouter();
    const pathName = usePathname();
    console.log(router);

    const handleClick = (e) => {
        if (title === "Contact Me") {
            e.preventDefault();
            const emailAddress = 'muhrizkialghipari@gmail.com';
            const subject = 'Hello Rizki!'; // Anda bisa sesuaikan subject default
            const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
            window.location.href = mailtoLink;
            return;
        }
        router.push(href)
    }

    return(
        <Link href={href} className={`${className} relative group`} onClick={handleClick}>
            {title}

            <span className={`
                            h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
                            group-hover:w-full transition-[width] ease duration-300
                            ${pathName == href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomLinkMobile = ({href,title,className="",toggle})=>{
    const router = useRouter();
    const pathName = usePathname();
    
    const handleClick = () => {
        toggle()
        router.push(href)
    }


    return(
        <button className={`${className} text-dark relative group my-2`} onClick={handleClick}>
            {title}

            <span className={`
                            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                            group-hover:w-full transition-[width] ease duration-300
                            ${pathName == href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    )
}

const EmailIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SocialIcon = ({ href, icon: Icon, username }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <motion.div className="relative"
      onHoverStart={() => setShowPopup(true)}
      onHoverEnd={() => setShowPopup(false)}
    >
      <motion.a 
        href={href}
        className='w-6 mx-3 inline-block'
        target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
      >
        <Icon />
      </motion.a>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: showPopup ? 1 : 0,
          y: showPopup ? 0 : 10
        }}
        className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white text-dark px-4 py-2 rounded-md text-sm whitespace-nowrap"
      >
        {username}
      </motion.div>
    </motion.div>
  );
};

export default function NavBar () {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-black text-light sm:px-8'>
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" className='' title={'Home'}></CustomLink>
                    <CustomLink href="/about" className='mx-4' title={'About'}></CustomLink>
                    <CustomLink href="/projects" className='mr-4' title={'Projects'}></CustomLink>
                </nav>

                <nav className='flex items-center justify-between flex-wrap'>
                    <SocialIcon 
                      href="mailto:muhrizkialghipari@gmail.com"
                      icon={EmailIcon}
                      username="muhrizkialghipari@gmail.com"
                    />
                    <SocialIcon 
                      href="https://www.instagram.com/ezpzlemonsquizy/"
                      icon={InstagramIcon}
                      username="@ezpzlemonsquizy"
                    />
                    <SocialIcon 
                      href="https://www.linkedin.com/in/m-rizki-algipari"
                      icon={LinkedInIcon}
                      username="M. Rizki Algipari"
                    />
                    <SocialIcon 
                      href="https://www.github.com/Ridzz05"
                      icon={GithubIcon}
                      username="Ridzz05"
                    />
                </nav>
            </div>

            {isOpen && (
                <motion.div 
                    initial={{scale:0,opacity:0, x:'-50%', y:'-50%'}}
                    animate={{scale:1,opacity:1}}
                    className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                bg-light/90 rounded-lg backdrop-blur-md py-32 sm:py-16 md:z-30'
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLinkMobile toggle={handleClick} href="/" className='' title={'Home'}></CustomLinkMobile>
                        <CustomLinkMobile toggle={handleClick} href="/about" className='' title={'About'}></CustomLinkMobile>
                        <CustomLinkMobile toggle={handleClick} href="/projects" className='' title={'Projects'}></CustomLinkMobile>
                    </nav>

                    <nav className='flex items-center justify-center gap-4 mt-4'>
                        <SocialIcon 
                          href="mailto:muhrizkialghipari@gmail.com"
                          icon={EmailIcon}
                          username="muhrizkialghipari@gmail.com"
                        />
                        <SocialIcon 
                          href="https://www.instagram.com/ezpzlemonsquizy/"
                          icon={InstagramIcon}
                          username="@ezpzlemonsquizy"
                        />
                        <SocialIcon 
                          href="https://www.linkedin.com/in/m-rizki-algipari"
                          icon={LinkedInIcon}
                          username="M. Rizki Algipari"
                        />
                        <SocialIcon 
                          href="https://www.github.com/Ridzz05"
                          icon={GithubIcon}
                          username="Ridzz05"
                        />
                    </nav>
                </motion.div>
            )}

            <div className='absolute left-[50%] top-2 translate-x-[-50%] sm:self-end sm:translate-x-[6.25rem]'>
                <Logo></Logo>
            </div>
        </header>
    </>
    )
}
