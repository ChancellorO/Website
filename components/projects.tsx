"use client";
import { projects } from "@/lib/data";
import React from "react";
import Project from "@/components/project";
import { motion } from "framer-motion";

export default function Projects() {

    return (
        <motion.section
            className="scroll-mt-28 mb-20"
            id="projects"
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                duration: 1,
                delay: 3,
            }}
        >
            <h1
                className="text-4xl font-bold mb-10 text-center"
            >
                Projects
            </h1>
            <div>
                {projects.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}                
            </div>
        </motion.section>
    );
}
