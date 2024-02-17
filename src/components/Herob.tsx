"use client"

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  }
}

function Herob() {

  return (
    <section className='flex flex-col w-full'>
      <div className='w-full grid place-content-center text-center'>
        <div className=' relative h-fit w-full flex flex-col justify-center items-center'>
          <svg width="20ch" height="4rem" viewBox="0 0 270 77" xmlns="http://www.w3.org/2000/svg" className="bottom-0 z-[99] left-[30%]">
            {/*<path d="M10 10 V67" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="left" style={{ strokeDasharray: 57, strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 300ms ease-in-out 0s' }}></path>
            <path d="M10 67 H260" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="bottom" style={{ strokeDasharray: 250, strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 300ms ease-in-out 0s' }}></path>
            <path d="M260 67 V10" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="right" style={{ strokeDasharray: 57, strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 300ms ease-in-out 0s' }}></path>
            <path d="M10 10 H198" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="top-left" style={{ strokeDasharray: 200, strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 300ms ease-in-out 0s' }}></path>
            <path d="M230 10 H260" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="top-right" style={{ strokeDasharray: 30, strokeDashoffset: dashOffset, transition: 'stroke-dashoffset 300ms ease-in-out 0s' }}></path>*/}
            <motion.path d="M230 10 H260 M260 67 V10 M10 67 H260 M10 10 V67 M10 10 H198"
              stroke="#FFA726" fill='transparent' strokeWidth="2"
              variants={icon}
              initial="hidden"
              animate="visible"
              style={{ transition: 'all 500ms' }}
            ></motion.path>
          </svg>

          <motion.div
            className='absolute top-[.35rem] right-9'
            initial={{ opacity: 0, rotate: 360, }}
            whileInView={{ opacity: 1, rotate: 0, }}
            transition={{
              delay: .5
            }}
          >
            <Image src="/icon/plus.png" alt=''
              width={10} height={10} />
          </motion.div>


          <motion.div
            className='absolute top-4 grid place-content-center bg-[#FFA726] h-8 w-[16ch] mx-4 text-white font-semibold capitalize'
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{
              delay: .4
            }}
          >
            preregister
          </motion.div>
          <motion.div
            className=' text-white w-full flex flex-col gap-1'
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
          >
            <p className=' text-xs font-semibold text-slate-300 text-center'>xxxxxxxxxxxx</p>
            <motion.div
              className=' bg-white h-[.25px] w-full relative double-point'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: .5 }}
              transition={{
                delay: .6,
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      <div className=' flex justify-between px-16 pt-24 pb-8'>
        <motion.div
          initial={{ scale: 0, rotate: 180, }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 500
          }}
        >
          <Link target='_blank' href="https://www.youtube.com/watch?v=q85B5viSzdE&t=3s" className=' relative w-12 h-12 grid place-content-center'>
            <Image src="/icon/spin.png" alt='' width={100} height={100} className=' absolute top-0 object-cover hover:animate-spin' />
            <Play className=' text-white' />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: .5
          }}
        >
          <Image src="/icon/down-arrow.png" alt='' width={50} height={50} className=' animate-bounce w-6 mt-8' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: .5
          }}
        >
          <Image src="/icon/hero-b-deco.png" alt='' width={100} height={100} />
        </motion.div>
      </div>
      <div className=' px-16'>
        <span data-v-06af5382="" className=' text-slate-500 text-xs'>
          Copyright&nbsp;©&nbsp;miHoYo.&nbsp;All&nbsp;Rights&nbsp;Reserved.
        </span>
      </div>
    </section>
  )
}

export default Herob