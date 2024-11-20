'use client';
import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name,x,y})=>{
    return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-white text-dark
    py-3 px-6 shadow-dark cursor-pointer absolute sm:py-1 sm:bg-transparent sm:text-white'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.5}}
    >
        {name}
    </motion.div>);
}

function Skills() {
    return (
        <>
            <h2 className='font-bold text-6xl mt-20 w-full text-center sm:text-3xl'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full 
                            bg-circularDark sm:h-[50vh] sm:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-white text-dark
                py-3 px-6 shadow-dark cursor-pointer absolute sm:bg-transparent sm:text-white'
                whileHover={{scale:1.05}}
                >
                    Web
                </motion.div>
                <Skill name='HTML' x="-12vw" y='-4vw'></Skill>
                <Skill name='CSS' x="10vw" y='-7vw'></Skill>
                <Skill name='Javascript' x="0" y='8vw'></Skill>
                <Skill name='PHP' x="-20vw" y='5vw'></Skill>
                <Skill name='Laravel' x="23vw" y='0'></Skill>
                <Skill name='MySQL' x="-4vw" y='-13vw'></Skill>
                <Skill name='Node JS' x="-30vw" y='-12vw'></Skill>
                <Skill name='React JS' x="30vw" y='-12vw'></Skill>
                <Skill name='Flutter' x="20vw" y='12vw'></Skill>
                <Skill name='Express JS' x="-20vw" y='18vw'></Skill>
            </div>
        </>
    );
}

export default Skills;