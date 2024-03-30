"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
}

export default function Project({
    title,
    description,
    date,
    image
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last: mb-0"
        >
            <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
                        {description}
                        {date}
                    </p>
                </div>

                <Image
                src={image}
                alt="Project I worked on"
                quality={95}
                className="absolute lg:block top-[140px] -right-[150px] w-[28.25rem] rounded-t-lg scale-[1.0]
                transition 
                lg:scale-[1.1]
                hover:-translate-x-3
                hover:translate-y-3
                hover:-rotate-2
                "
                />           
            </section>
        </motion.div>
    );
}