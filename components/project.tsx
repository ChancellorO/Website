"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

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
            variants={AnimationVariants}
            initial="initial"
            whileInView="animate"                        
            viewport={{
                once: true,                
            }}            
        >
            <section className="bg-zinc-800 max-w-[68rem] rounded-lg overflow-hidden relative lg:min-h-[21rem] hover:bg-zinc-700 transition">
                <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
                        {description}
                        <br />
                        <br />
                        {date}
                    </p>
                </div>

                <Image
                src={image}
                alt={title}
                className="absolute lg:block -top-[45px] -right-[45px] w-[28.25rem] rounded-t-lg
                transition 
                lg:scale-[0.8]
                hover:-translate-x-3
                hover:translate-y-3
                hover:-rotate-2
                "
                />           
            </section>
        </motion.div>
    );
}

type ProjectProps = {
    title: string;
    description: string;
    date: string;
    image: StaticImageData;
}