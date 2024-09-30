"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Dark() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setIsOn(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsOn(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleSwitch = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    localStorage.setItem("darkMode", newIsOn.toString());
    
    if (newIsOn) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={` relative w-[70px] h-[35px] flex items-center rounded-full p-[2px] cursor-pointer transition-colors duration-700 ${
        isOn ? "bg-[#334155] justify-end" : "bg-primSky-500 justify-start"
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className={`w-[30px] h-[30px] bg-white rounded-full flex items-center pr-1 pb-[2px]`}
        layout
        transition={spring}
      >
      
      {isOn ? (
        <span className="w-[50%]">
          <svg
            width="22"
            height="22"
            fill="none"
            className="flex-none transition transform text-slate-700 scale-[1.150]"
            style={{ transitionDuration: ".8s" }}
          >
            <path
              d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span>
          <svg
            width="22"
            height="22"
            fill="none"
            className="transform transition text-primSky-500 scale-[1.150]"
            style={{ transitionDuration: ".8s" }}
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}

      </motion.div>
      <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 7px 2px",
      }}>
        <span className={`${ isOn? " scale-100" : "scale-0"} transition-transform  duration-500`}>
          <svg width="22" height="22" fill="none" class="text-[#ffffffa8]">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span className={`${ isOn? "scale-0" : " scale-100"} transition-transform duration-500 `}>
          <svg width="20" height="20" fill="none" class="flex-none text-slate-700">
            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </div>
 
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 60,
};
