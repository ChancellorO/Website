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
            className="mb-20 lg:px-96 md:px-48"
        >
            <div className="flex flex-row-reverse justify-between">
                <div
                className="flex flex-col px-5 xl:px-0"
                >
                        <motion.div
                            className="w-[30vmin] relative"
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
                                className="mt-5 shadow-xl shadow-zinc-700 object-cover rounded-xl"
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
                                    className="absolute top-0 right-0"                                             
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
                    className="flex flex-col gap-3 text-left"
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
                            className="text-lg text-left pr-10 mt-10"
                        >
                            I am a M.S. Data Science in Biomedicine student at University of California, Los Angeles (UCLA).
                            Currently, I work as a Software Engineer Intern at UCLA&apos;s International Institute
                            and Mobile Developer at IDONTMIND.
                        </p>              
                        <div className="home-icons">
                            <Button variant="secondary" href="mailto: chanceorichey@gmail.com" target="_blank" style={{ paddingRight: 15, paddingLeft: 15, paddingTop: 10, paddingBottom: 10 }}>
                                <MdEmail style={{display: "inline-block", marginBottom: 3 }}/> &nbsp;
                                Contact Me
                            </Button>
                            <SocialIcon url="https://www.linkedin.com/in/chancellororichey/" style={{marginLeft: 15 }} />
                            <SocialIcon url="https://github.com/ChancellorO" style={{marginLeft: 15 }} />
                        </div>
                    </motion.div>   
                </div>
            </div>            
        </section>
    );
}