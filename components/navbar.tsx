"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return(
        <header className="z-[999] relative">
            <nav className="flex fixed justify-between p-4 px-64 w-screen shadow-lg bg-zinc-900 dark:bg-opacity-75 backdrop-blur-[0.5rem]">
                <h1 className="text-3xl">
                    <Link href="#top">
                        {"<"}Chancellor Richey{"/>"}
                    </Link>                     
                    </h1>
                <ul className="text-xl flex items-center gap-7 text-[0.9rem] justify-center">
                    <li className="hover:text-zinc-700">
                        <Link href="#about">
                            About Me
                        </Link>                        
                    </li>
                    <li className="hover:text-zinc-700">
                        <Link href="#projects">
                            Projects
                        </Link>                        
                    </li>                    
                    <li className="hover:text-zinc-700">
                        <Link href="#experience"> 
                            Experience
                        </Link>
                    </li>
                    <li className="hover:text-zinc-700">
                        <Link href="#skills">
                            skills
                        </Link>                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}