import React from 'react'
import threadsImg from "../../public/threads.png"
import moodMate from "../../public/cafeCorner.png"
import Image from 'next/image'

function AboutUs() {
  return (
    <>
    <div className="min-h-screen w-full flex justify-center items-center space-y-7">
        <div className="md:flex block md:gap-3 space-y-3 md:justify-between px-4 md:px-8 w-full h-full">
            <Image src={threadsImg} alt="threadsImg" className="w-[60%] h-full rounded-[26px]"/>
            <p className="text-2xl md:text-3xl bg-gradient-to-r text-transparent from-green-400 to-blue-500 bg-clip-text w-[30%]">At Brandify, we elevate your online presence with sleek, modern websites and strategic branding. Our focus on quality and innovation ensures your unique identity stands out.  </p>
        </div>
    </div>

    <div className="min-h-screen w-full flex justify-center items-center space-y-7">
        <div className="md:flex block md:gap-3 space-y-3 md:justify-between px-4 md:px-8 w-full h-full">
            <p className="text-2xl md:text-3xl bg-gradient-to-r text-transparent from-red-400 to-yellow-500 bg-clip-text w-[45%] mt-5">Our focus on quality and innovation ensures your unique identity stands out. We blend creativity with technology to deliver compelling digital experiences that attract and engage your audience.</p>
            <Image src={moodMate} alt="threadsImg" className="w-[50%] h-full rounded-[26px]"/>
        </div>
    </div>
    </>
  )
}

export default AboutUs