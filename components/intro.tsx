"use client";
import Image from "next/image";
import introPhoto from "@/public/intro.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return(
        <section
            id="home"
            className="mb-20"
        >
            <div
            className="flex justify-between"
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-center text-5xl">
                        <motion.span
                            className="text-3xl"
                            initial={{ opacity: 0, scale: 0}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: 0.2,
                            }}
                        >Hello, I'm</motion.span>
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
                                        "Bowling Enthusiast",
                                        "Software Engineer",
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
                    <div
                        className="relative"
                    >
                    <motion.div
                        className="w-[30vmin]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 0.7,
                            delay: 1,
                        }}
                    >
                        <Image
                            src={introPhoto}
                            alt="intro photo"
                            height="828"
                            width="1472"
                            className="mt-5 shadow-xl shadow-zinc-700 object-cover rounded-lg"
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
                                className="absolute top-1 right-0"                                             
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
                </div>                
                <motion.section
                    className="flex flex-col items-center justify-center container mb-20 scroll-mt-28"
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <h1
                        className="text-3xl font-semibold mb-10"
                    >
                        About Me
                    </h1>
                    <p
                        className="text-2xl text-center"
                    >
                        I am a M.S. Data Science in Biomedicine student at University of California, Los Angeles (UCLA).
                        I have recently obtained my B.S. Mathematics of Computation graduate from UCLA.
                        Currently, I work as a Software Engineer Intern at UCLA's International Institute
                        and Mobile Developer at IDONTMIND.
                        On my free time, I love to learn languages, compete in bowling, and travel!                
                    </p>
                </motion.section>                                     
            </div>
        </section>
    );
}