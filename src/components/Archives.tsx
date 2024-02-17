"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import StarField from './StarFiled';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
//import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const archivesInfo = [
    {
        id: 0,
        imageUrl: "/image/scene-1.jpg",
        title: "Antares Building",
        dec: "Much like how fallen and withered trees regrow new branches, and remnants from cut plants produce fresh shoots, it seems as though God intends for our lives to continuously unfold in this new city. The denizens of Oxia haven't forgotten their history or lineage. They named the tower Antares, a tribute to the opulence and splendor of the Luoxing era.",
    },
    {
        id: 1,
        imageUrl: "/image/scene-2.jpg",
        title: "Anchor of the Apocalypse",
        dec: "Passed down to Oxia from a bygone era, the Anchor of the Apocalypse, despite its ominous name, weaves a tale of renewal. A leisure plaza surrounding it has seamlessly integrated into the daily life of Oxia's inhabitants.",
    },
    {
        id: 2,
        imageUrl: "/image/scene-3.jpg",
        title: "Book Cafe: Antique Ink",
        dec: "A quaint spot tucked away in a corner of Antares Building. Enjoy a sip of coffee, flip through the pages of a book, and let time slip away amidst the gentle purring of cats.",
    },
    {
        id: 3,
        imageUrl: "/image/scene-4.jpg",
        title: "Restaurant: Sweet Tooth",
        dec: "Savor sweetness not only in cakes but also in the shared moments of relishing food. May you spend delightful mornings, afternoons, and evenings here.",
    },
    {
        id: 4,
        imageUrl: "/image/scene-5.jpg",
        title: "Municipal Antares Library",
        dec: "Oxia's largest library, chronicling its past and present. Although the ink on books has transformed into dancing pixels on screens, history still emanates a charming and profound fragrance.",
    },
    {
        id: 5,
        imageUrl: "/image/scene-6.jpg",
        title: "Data Monitoring Room",
        dec: "The link between Oxia and the Sea of Data. The sea serves as life's wellspring, a treasure waiting to be uncovered, and here lies the eyes that will have the first glimpse of the sea.",
    },
    {
        id: 6,
        imageUrl: "/image/scene-7.jpg",
        title: "Student Dormitory",
        dec: "Assigned abode for the institute's scholars, Dreamseeker's cherished home. Regardless of where the path of exploration may lead to, a soft bed always awaits here.",
    },
]

function Archives() {
    const [archivNum, setArchivNum] = useState(0)
    const swp = useSwiper()

    function clickArchiv(value: number) {
        setArchivNum((archivNum) => ((archivNum + value + archivesInfo.length) % archivesInfo.length))
    }
    return (
        <div className='relative min-h-screen w-full overflow-hidden snap-start'>
            <div className=' absolute w-full h-full top-0'>
                <Image src="/image/role-bg.jpg" alt='' width={10000} height={10000} className=' object-cover w-full h-full' />
            </div>
            <div className=' absolute w-full h-full top-0 z-10'>
                <StarField />
            </div>
            <div className=' absolute w-full h-full top-0 z-20 flex flex-col justify-between p-16 text-white'>
                <div className=' w-[270vw] sm:w-[120vw] h-[50vh] overflow-hidden'>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        loop={false}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
                            },
                        }}
                        onSlideChange={(i) => { setArchivNum(i.activeIndex); console.log() }}
                        spaceBetween={50}
                        slidesPerView={3}
                        className=' h-full w-full'
                    >{
                            archivesInfo.map((archiv) => (
                                <SwiperSlide key={archiv.id} className={`border-y-2 ${archivNum === archiv.id ? ' border-blue-500' : ' border-transparent'} rounded-md overflow-hidden w-fit h-full`}>
                                    <Image src={archiv.imageUrl} alt='' width={10000} height={10000} className=' object-cover w-full h-full' />
                                </SwiperSlide>
                            ))
                        }
                        <SwiperSlide>
                            <Image src={archivesInfo[0].imageUrl} alt='' width={10000} height={10000} className=' object-cover w-full h-full' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={archivesInfo[1].imageUrl} alt='' width={10000} height={10000} className=' object-cover w-full h-full' />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className=' w-full flex justify-between items-end gap-4'>
                    <div key={archivNum} className=' w-full relative'>
                        <motion.h3
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: .5,
                            }}
                            className=' font-bold text-3xl'>{archivesInfo[archivNum].title}</motion.h3>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ x: -500, opacity: 0 }}
                            transition={{
                                duration: .5,
                            }}
                            className=' text-xs text-slate-500 mt-4 line-clamp-3'>{archivesInfo[archivNum].dec}</motion.p>
                    </div>
                    <div className=' w-full flex justify-end flex-col'>
                        <div className=' relative flex gap-2 swiper-pagination font-semibold text-slate-500/80'>
                        </div>
                        <div className={` h-[.125rem] bg-slate-500 w-full`}></div>
                    </div>

                    <div className='swiper-button-prev hover:cursor-pointer hover:text-slate-500/80'>
                        <ChevronLeft />
                    </div>
                    <div className='swiper-button-next hover:cursor-pointer hover:text-slate-500/80'>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Archives