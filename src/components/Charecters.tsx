"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import StarField from './StarFiled'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const characteres = [
    {
        cId: 0,
        bgUrl: "/image/role-0-img.png",
        cIcon: "/image/role0-icon.png",
        cName: "Senadina",
        cDes: "An enigmatic young girl with an enshrouded past, radiating a healthy and upbeat demeanor. Senadina originates from the Sea of Data and stands as Dreamseeker's first and most important companion. (She appears to be related to a certain quasi-deity?)",
    },
    {
        cId: 1,
        bgUrl: "/image/role-1-img.png",
        cIcon: "/image/role1-icon.png",
        cName: "Erdős Helia",
        cDes: "An Earthling, the leader of the Mars exploration team, and a Schicksal A-rank Valkyrie. Helia serves as a professional astronaut of Schicksal, and once fought as a foot soldier against Honkai. Her idol as a Valkyrie is none other than Durandal.",
    },
    {
        cId: 2,
        bgUrl: "/image/role-2-img.png",
        cIcon: "/image/role2-icon.png",
        cName: "Coralie 6626 Planck",
        cDes: "An Earthling, a member of the Mars exploration team. Owing to the Honkai's influence, Coralie was born with animal ears and a tail, and her physical development halted prematurely. Her surname Planck was given by Dr. Einstein, her adoptive parent, and she achieved a doctoral degree at 17, just like Einstein.",
    },
]

function Charecters() {
    const [charNum, setCharNam] = useState(0)

    function clickCharButton(value: number) {
        setCharNam((charNum) => (((charNum + value + characteres.length) % characteres.length)))
    }
    return (
        <div className=' relative min-h-screen w-full overflow-hidden snap-start'>
            <div className=' absolute w-full h-full top-0'>
                <Image src="/image/role-bg.jpg" alt='' width={10000} height={10000} className=' object-cover w-full h-full' />
            </div>
            <div className=' absolute w-full h-full top-0 z-10'>
                <StarField />
            </div>
            <div key={charNum} className=' absolute w-full h-full overflow-hidden top-0 z-10'>
                <motion.div
                    className=' relative w-screen h-screen'
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <Image src={characteres[charNum].bgUrl} alt='' width={10000} height={10000} className=' object-cover w-full h-full' />
                </motion.div>
            </div>
            <div className=' absolute w-full h-full top-0 z-20 flex flex-col gap-[10vh]'>
                <div className='mt-[8vh] h-4'>
                    <Image src="/icon/battle-title.png" alt='' width={10000} height={10000} className=' object-cover w-full' />
                </div>
                <div className=' relative flex flex-col justify-start pl-16 text-white'>
                    <div key={charNum} className=' overflow-hidden'>
                        <motion.div
                            className=' bg-blue-500 h-[.125rem] w-28 rounded-sm mb-2'
                            initial={{ x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{
                                duration: .5,
                            }} />
                        <motion.h2
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: .5,
                                duration: 1,
                            }}
                            className=' font-semibold text-4xl'>
                            {characteres[charNum].cName}
                        </motion.h2>
                        <div className=' w-[30vw]'>
                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: .5,
                                    duration: .5,
                                }}
                                className=' text-xs text-slate-300 mt-16'>
                                {characteres[charNum].cDes}
                            </motion.p>
                            <div className=' flex gap-2 items-center mt-4'>
                                <Image src="/icon/plus.png" alt='' width={10} height={10} />
                                <motion.div
                                    initial={{ width: 0, }}
                                    whileInView={{ width: '30vw', }}
                                    transition={{
                                        delay: .5,
                                        duration: 1,
                                    }}
                                    style={{
                                    }}
                                    className=' bg-slate-500/80 h-[.125rem] w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute z-30 bottom-20 right-0 flex items-center text-white gap-4'>
                <div className=' relative flex items-center text-white gap-4 w-fit h-fit'>
                    <div className=' absolute h-full w-full pointer-events-none'>
                        <Image src="/icon/char-slide.png" alt='' width={1000} height={1000} className=' object-cover w-full h-full'/>
                    </div>
                    <div onClick={() => { clickCharButton(-1) }} className=' hover:cursor-pointer hover:text-white/80'>
                        <ChevronLeft />
                    </div>
                    <div className=' flex gap-2'>
                        {characteres.map((character) => (
                            <div key={character.cId} onClick={()=>setCharNam(character.cId)} className={` w-12 overflow-hidden border-2 ${charNum === character.cId ? ' border-blue-500' : ' border-transparent hover:cursor-pointer'}`}>
                                <Image src={character.cIcon} alt='' width={1000} height={1000} className=' object-cover w-full h-full' />
                            </div>
                        ))}
                    </div>
                    <div onClick={() => { clickCharButton(1) }} className=' hover:cursor-pointer hover:text-white/80 mr-[10vw]'>
                        <ChevronRight />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Charecters