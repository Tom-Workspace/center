"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Progress from './progress';
import Dark from './darkmode';

const NavRoot = () => {
  const haader = useRef(null);
  
  useEffect(() => {
    let handleScroll = () => {
      let scrollY = window.scrollY;
      if (scrollY > 1) {
        haader.current.classList.add("bg-white", "dark:bg-[#000106]");
      } else {
        haader.current.classList.remove("bg-white", "dark:bg-[#000106]");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <header ref={haader} className="w-full fixed left-0 right-0 top-0 origin-left z-50 bg-inherit">
      <nav className="w-[82%] flex justify-between mx-auto items-center py-3 h-[--body-top]">
        <div className="flex justify-center items-center md:space-x-reverse md:space-x-8 space-x-0">
          <Link 
            className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform flex space-x-2 space-x-reverse bg-sky-500 text-white border-2 border-sky-500 hover:bg-inherit hover:text-sky-500"
            href="/register"
          >
            <span className="flex items-center text-sky-800 group-hover:text-sky-500 dark:group-hover:text-sky-500">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 19V5v-.025zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v7q0 .425-.288.713T20 13t-.712-.288T19 12V5H5v14h7q.425 0 .713.288T13 20t-.288.713T12 21zm14.175-1H16q-.425 0-.712-.288T15 19t.288-.712T16 18h3.175l-.9-.9Q18 16.825 18 16.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T18.3 22.3q-.275-.275-.275-.7t.275-.7zM11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13z"></path>
              </svg>
            </span>
            <span className="flex items-center">اعمل حساب جديد !</span>
          </Link>

          <Link 
            className="px-4 py-2 rounded-md text-sm font-medium flex space-x-2 items-center space-x-reverse border border-opacity-0 border-yellow-400 text-yellow-500 transition-transform duration-300 transform hover:scale-110 hover:border-opacity-100 hover:shadow-xl"
            href="/auth/login"
          >
            <span className="text-yellow-600 dark:text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></path>
              </svg>
            </span>
            <span className="flex items-center space-x-1 space-x-reverse">
              <span className="text-[--text-dark-color] dark:text-[--text-dark-color]">سجل</span>
              <span className="text-yellow-600 dark:text-yellow-400">دخولك</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Dark />
          <Image src="/images/graduate.png" alt="logo" width={40} height={40} />
        </div>
      </nav>
      <Progress />
    </header>
  );
};

export default NavRoot;
