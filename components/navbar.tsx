"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
    const [activeNavbar, setActiveNavbar] = useState(false);
    const toggleNavbar = () => {
        console.log("pressed");
        setActiveNavbar(!activeNavbar);
    }
    return(
        <header className="z-[999] relative">
            <nav className="flex flex-col md:flex-row fixed justify-between p-4 lg:px-48 w-screen shadow-lg bg-zinc-900 bg-opacity-75 backdrop-blur-[0.5rem]">
                <div className="flex justify-between">
                    <h1 className="text-3xl">
                        <Link href="#top">
                            {"<"}Chancellor Richey{"/>"}
                        </Link>                     
                    </h1>
                    <Icon icon='mdi:hamburger-menu' className="text-5xl md:hidden" onClick={toggleNavbar}/>
                </div>                                
                <ul className={`text-xl flex ${ activeNavbar ? "flex-col" : "hidden" } md:flex md:flex-row items-center gap-7 text-[0.9rem] justify-center `}>
                    <li>
                        <Link href="#about">
                            About
                        </Link>                        
                    </li>
                    <li>
                        <Link href="#projects">
                            Projects
                        </Link>                        
                    </li>                    
                    <li>
                        <Link href="#experience"> 
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills">
                            skills
                        </Link>                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}