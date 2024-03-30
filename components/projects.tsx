"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import Project from "@/components/project";

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={ref}
            className="scroll-mt-28 mb-28"
            id="projects"
        >
            <h1
                className="text-3xl font-semibold mb-10 text-center"
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
        </section>
    );
}
