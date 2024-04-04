"use client";
import { skills } from "@/lib/data";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
    }),
};

const growOnHover = {
    scale: 1.2,
}


export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section
            className="mb-20 scroll-mt-28 text-center"
            ref={ref}
            id="skills"
        >
            <h1
                className="text-3xl font-semibold mb-10"
            >
                Skills
            </h1>
            <ul
                className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
            >
                {skills.map((skill, index) => (
                    <motion.li
                        className="flex flex-col items-center px-4 py-3 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover={growOnHover}
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <Icon icon={skill.icon} className="text-5xl md:text-7xl" />
                        <span className="mt-2">{skill.name}</span>
                    </motion.li>
                ))}
            </ul>

        </section>
    );
}