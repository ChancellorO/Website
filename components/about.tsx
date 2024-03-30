"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);

    return(
        <motion.section
            className="flex flex-col items-center justify-center container mb-20 scroll-mt-28"
            ref={ref}
            id="about"
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
    );
}