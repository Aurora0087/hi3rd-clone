"use client"

import Image from 'next/image'
import React from 'react'
import LangDropDown from './LangDropDown'
import Link from 'next/link'
import Herob from './Herob'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <div className=' relative min-h-screen w-full overflow-hidden snap-start'>
            <div className=' absolute z-10 grid place-content-center w-full'>
                <video poster='/videos/hero-v.mp4' src="/videos/hero-v.mp4" autoPlay muted loop className='object-cover w-full h-screen pointer-events-none'></video>
            </div>
            <div className=' absolute z-20 top-0 w-full h-screen'>
                <Image src="/image/hero-mask.png" alt='' width={500} height={500} className='object-cover w-full h-screen pointer-events-none'/>
            </div>

            <div className=' absolute z-[999] w-full flex justify-between px-[10vw] mt-[8vh] items-center'>
                <Link target="_blank" href="https://honkaiimpact3.hoyoverse.com/global/en-us/fab">
                    <Image src="/icon/hi3rd-icon.png" alt='HI3rd' width={150} height={150} className=' h-12 sm:h-full w-fit' />
                </Link>

                <div className=' flex gap-2 sm:gap-4'>
                    <div className=' flex justify-center items-center'>
                        <Image src="/icon/l-corn.png" alt='' width={30} height={30} className='hidden sm:flex h-[2rem]' />
                        <div className=' relative  place-content-center overflow-hidden hidden sm:grid'>
                            <Image src="/icon/wit.png" alt='' width={50} height={50} className=' absolute left-0 h-[2rem] w-full' />
                            <span className='px-5 z-10 font-semibold text-slate-600 h-[2rem] text-center'>dbdfv@gmail.com</span>
                        </div>
                        <div>
                            <Image src="/icon/log-out.png" alt='' width={30} height={30} className=' h-[2rem]' />
                        </div>
                    </div>
                    <div>
                        <LangDropDown />
                    </div>
                    {
                        //audio button
                        //v.1 link
                    }
                </div>
            </div>

            <motion.div
                className='z-[999] absolute top-[20vh] w-full flex justify-center sm:justify-end md:pr-[10vw]'
                initial={{ opacity: 0,y:30,}}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 500,
                    duration:500
                }}
            >
                <Image src="/image/hero-title.png" alt='' width={500} height={500} className=' h-full'/>
            </motion.div>
            <div className=' absolute bottom-4 z-[9999] w-full '>
                <Herob/>
            </div>
        </div>
    )
}

export default Hero