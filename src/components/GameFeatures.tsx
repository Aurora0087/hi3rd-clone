"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const features = [
    {
        fid: 0,
        vId: "/videos/exp-w.mp4",
        title: "Mars Crisis, a New Chapter in the Honkai Adventure",
        des:"Caution! The Sea of Data is slowly taking over space! The tranquil daily life has been disrupted. What secrets are hidden in this city? Embark on a thrilling adventure, admire the Anchor of the Apocalypse, and explore a variety of civilizations in different bubble universes!",
    },
    {
        fid: 1,
        vId: "/videos/comb.mp4",
        title: "Adrenaline-Pumping Synergy, Fight Three-Dimensionally Like Never Before",
        des:"Three-dimensional scenes, jumping mechanisms, and a brand-new Astral Ring system bring a more immersive experience in three-dimensional space. Watch out for monsters with their own ecology, and deal with them carefully when venturing into their territory. Unite and fight together for all that's beautiful.",
    },
    {
        fid: 2,
        vId: "/videos/world.mp4",
        title: "Ultimate Graphics, Play an Immersive Animation Movie",
        des:"Meticulous attention to details like light, shadow, and textures creates a vibrant and cinematic beauty. Roam freely in the new open environments, get lost in the immersive storyline, and experience the allure of next-generation visual quality!",
    },
    {
        fid: 3,
        vId: "/videos/character.mp4",
        title: "Brand New Team, Join Them on an Alien Planet to Seek Dreams",
        des:`Who's the mysterious girl appearing in the Sea of Data? A sassy and humorous "elementary school student" with animal ears? Plus, a disciplined team leader leading the Schicksal Valkyries... Rally on Mars! Join the girls on this dreamseeking journey!`,
    }
]

function GameFeatures() {
    const [featurNum, setFeaturNum] = useState(0)
    const [videoUrl, setVideoUrl] = useState("/videos/exp-w.mp4")

    function clickFutherButton(value: number) {
        setFeaturNum((featurNum) => (((featurNum + value + features.length) % features.length)))
    }

    
    useEffect(() => {
        function changeVideo() {
            setVideoUrl(() => (features[featurNum].vId))
        }

        changeVideo()
    }, [featurNum])
    return (
        <div className=' relative min-h-screen w-full overflow-hidden snap-start'>
            <div key={featurNum} className=' absolute z-10 grid place-content-center w-full'>
                <video poster={videoUrl} src={videoUrl} autoPlay muted loop className='object-cover w-full h-screen lg:h-full pointer-events-none'></video>
            </div>
            <div className=' absolute bottom-0 w-full h-screen z-[999]'>
                <Image src="/image/mask.png" alt='' width={10000} height={10000} className=' w-full h-full' />
            </div>
            <div className=' absolute w-full h-full flex flex-col justify-between z-[999]'>
                <div className='mt-[8vh] h-4'>
                    <Image src="/icon/game-feather-title.png" alt='' width={10000} height={10000} className=' object-cover w-full' />
                </div>
                <div className='mb-[8vh] w-screen text-white px-[5vw] grid grid-flow-col gap-4'>
                    <div className='relative'>
                        <motion.div
                            className=' absolute top-4 left-[-0.5rem] rounded-md bg-blue-500 w-[.125rem] h-10'
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1
                            }}
                        ></motion.div>
                        <div key={featurNum} className=' overflow-hidden pl-4'>
                            <motion.h3
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: .5
                                }}
                                className=' font-bold text-xl mb-2 text-wrap'>{features[featurNum].title}</motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: .5
                                }}
                                className=' text-xs text-slate-400 text-wrap'>{features[featurNum].des}</motion.p>
                        </div>

                    </div>
                    <div className=' flex w-full gap-2'>
                        <div className=' flex items-end gap-2 relative w-full'>
                            {features.map((feather) => (
                                <div key={feather.fid}>
                                    <span onClick={()=>setFeaturNum(feather.fid)} className={`${feather.fid === featurNum ? " text-white" : " text-slate-500/80"} font-bold hover:cursor-pointer`}>0{feather.fid + 1}</span>
                                </div>
                            ))}
                            <div className='absolute overflow-hidden bottom-0 rounded-md bg-slate-500/60 w-full'>
                                <motion.div
                                    className={`bg-blue-500 h-[.15rem] w-[27px]`}
                                    initial={{ x: 0 }}
                                    animate={{ x: (featurNum * 27) }}
                                ></motion.div>
                            </div>
                        </div>
                        <div className=' flex items-end mb-1 gap-1 w-full'>
                            <div className=' hover:bg-slate-500/50 hover:cursor-pointer'>
                                <Image onClick={() => { clickFutherButton(-1) }} src="/icon/left-button.png" alt='left-button' width={100} height={100} className='object-cover w-4' />
                            </div>
                            <div className=' hover:bg-slate-500/50 hover:cursor-pointer'>
                                <Image onClick={() => { clickFutherButton(1) }} src="/icon/right-button.png" alt='left-button' width={100} height={100} className='object-cover w-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameFeatures