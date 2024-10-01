import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
    <div className=' mt-[70px] min-h-screen flex sm:flex-row flex-col  justify-center w-full sm:w-[--contain] mx-auto pt-[5%]'>
        <div className=' w-full sm:w-[50%] flex flex-col items-center sm:items-start px-[10%] text-center mb-24 sm:mb-0 sm:pr-[6%] pt-3 '>
            <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl mb-8 ">
              <span className="relative z-10 text-[--secondary-color] dark:text-[--secondary-color]">منصة <span 
              className="text-primSky-500 vip font-bold text-5xl md:text-6xl xl:text-7xl 
              ">سعدون</span></span>
            </h1>
            <h2 className="font-medium text-xl md:text-2xl xl:text-3xl  dark:text-[--secondary-color] mb-6">
                منصة متكاملة بها كل ما يحتاجه الطالب ليتفوق
            </h2>
            <div className="w-60 h-1 bg-sky-300 dark:bg-sky-800 transition-colors duration-300 mx-auto lg:mx-0 mb-14"></div>

            <div className=" transform transition-transform hover:scale-110 duration-500">
              <Link
                className="text-xl font-bold md:text-3xl px-[25px] md:px-[50px] py-[15px] md:py-[20px] rounded-xl sm:rounded-3xl bg-primSky-500"
                href="/register"
              >
                ابدأ رحلتك <span className="text-white">الأن</span>
              </Link>
            </div>

        </div>
        <div className='w-full sm:w-[50%] mb-32 sm:mb-0 '>
            <div className=' w-full flex items-center justify-center overflow-hidden'>
                <Image
                    src="/images/present.svg" 
                    alt="profile-updated-svg" 
                    className="dark:opacity-90 transition-opacity duration-300 w-[80%]"
                    width={10000}
                    height={10000}
                />
            </div>
        </div>
    </div>
  )
}

export default Landing