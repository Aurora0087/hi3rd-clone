"use client"

import { AudioLines, Volume2, VolumeX } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactHowler from 'react-howler'

function AudioButton({s}:{s:string}) {
    const [playAudio, setPlayAudio] = useState(false)

    function toggleSound() {
        setPlayAudio((playAudio) => !playAudio)
    }

    return (
        <div onClick={toggleSound} className=' h-full w-full overflow-hidden text-white hover:cursor-pointer grid place-content-center'>
            <ReactHowler
                src={s}
                playing={playAudio}
                loop
            />
            {
                playAudio ? (
                    <Volume2/>
                ) : (
                    <VolumeX/>
                )
            }
        </div>
    )
}

export default AudioButton