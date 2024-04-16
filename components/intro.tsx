"use client";

import Image from "next/image";
import introPhoto from "@/public/intro.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import { MdEmail } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';

export default function Intro() {
    return(
        <section
            id="home"
            className="mb-20 md:px-48 transition"
        >
            <div className="lg:flex flex-row-reverse justify-between">
                <div
                className="flex flex-col px-5 xl:px-0 mb-10 lg:mb-0"
                >
                        <motion.div
                            className="lg:w-[30vmin] relative"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                duration: 0.5,
                                delay: 1,
                            }}
                        >
                            <Image
                                src={introPhoto}
                                alt="intro photo"
                                height="828"
                                width="1472"
                                className="mx-auto w-[75%] md:w-[100%] mt-5 shadow-xl shadow-zinc-700 object-cover rounded-xl transition"
                            />
                        <motion.div
                            className="absolute top-0 right-0 text-5xl"                
                            initial={{
                                opacity: 0,
                                scale: 0,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                type: "spring",
                                duration: 0.7,
                                delay: 2
                            }}
                        >
                                <motion.span
                                    className="hidden lg:block md:absolute top-0 right-0"                                             
                                    animate={{
                                        rotate: [0, 20, 0, 20, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",                                
                                        repeat: Infinity,
                                        repeatDelay: 1.5,
                                    }}
                                >
                                    👋
                                </motion.span>
                            </motion.div>                                      
                        </motion.div>                                                        
                </div>
                <div
                    className="flex flex-col gap-3 text-center lg:text-left"
                >
                    <h1 className="text-5xl">
                        <motion.span
                            className="text-3xl"
                            initial={{ opacity: 0, scale: 0}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: 0.2,
                            }}
                        >Hello, I&apos;m</motion.span>
                        <br/>
                        <motion.span
                            initial={{ opacity: 0, scale: 0}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: 0.5,
                            }}
                        >
                            <strong> Chancellor Richey </strong>
                        </motion.span>                    
                    </h1>
                    <div className="text-2xl">
                        <motion.span
                            initial={{ opacity: 0, scale: 0}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: 3,
                            }}
                        >                    
                            <Typewriter
                                options={{
                                    strings: [
                                        "Software Engineer",
                                        "Bowling Enthusiast",
                                        "Language Learner",                                    
                                        "Student",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </motion.span>    
                    </div>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            type:"linear",
                            duration: 1,
                            delay: 3,
                        }}
                    >
                        <p
                            className="text-lg text-center lg:text-left px-10 lg:pr-10 lg:pl-0 mt-10"
                        >
                            I am an incoming M.S. Cyber Security student at New York University for Fall 2024 and
                            recent Mathematics of Computation graduate at University of California, Los Angeles (UCLA).
                            Currently, I work as a Software Engineer Intern at UCLA&apos;s International Institute
                            and Mobile Developer at IDONTMIND.
                        </p>              
                        <div className="mt-5">
                            <SocialIcon url="mailto: chanceorichey@gmail.com" className="text-zinc-800" />                            
                            <SocialIcon url="https://www.linkedin.com/in/chancellororichey/" style={{marginLeft: 15 }} />
                            <SocialIcon url="https://github.com/ChancellorO" style={{marginLeft: 15 }} />
                        </div>
                    </motion.div>   
                </div>
            </div>            
        </section>
    );
}