"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
    const [activeNavbar, setActiveNavbar] = useState(false);
    const toggleNavbar = () => {
        setActiveNavbar(!activeNavbar);
    }
    return(
        <header className="z-[999] relative">
            <nav className="flex flex-col lg:flex-row fixed justify-between lg:items-center p-4 lg:px-32 lg:px-40 xl:px-64 w-screen shadow-lg bg-zinc-900 dark:bg-opacity-75 backdrop-blur-[0.5rem]">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl xl:text-3xl">
                        <Link href="#top">
                            {"<"}Chancellor Richey{"/>"}
                        </Link>                     
                        </h1>
                    <button className="block lg:hidden" type="button" onClick={toggleNavbar}>
                        <Icon icon={"mdi:hamburger-menu"} className="text-5xl md:text-7xl" />
                    </button>
                </div>                                
                <div className={`${activeNavbar ? '' : 'hidden'} lg:block transition`} id="navbar-default">
                    <ul className="text-lg lg:text-lg xl:text-xl flex flex-col lg:flex-row pt-5 lg:pt-0 items-center gap-7 text-[0.9rem] justify-center">
                        <li className="hover:text-zinc-700 transition">
                            <Link href="#about">
                                About
                            </Link>                        
                        </li>
                        <li className="hover:text-zinc-700 transition">
                            <Link href="#projects">
                                Projects
                            </Link>                        
                        </li>                    
                        <li className="hover:text-zinc-700 transition">
                            <Link href="#experience"> 
                                Experience
                            </Link>
                        </li>
                        <li className="hover:text-zinc-700 transition">
                            <Link href="#skills">
                                skills
                            </Link>                        
                        </li>
                    </ul>
                </div>                
            </nav>
        </header>
    );
}