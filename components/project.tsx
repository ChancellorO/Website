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
            <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition bg-white/10 hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
                    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 text-white/70 mb-3">
                        {description}
                        <br />
                        <br />
                        {date}
                    </p>
                </div>

                <Image
                src={image}
                alt={title}
                className="absolute hidden lg:block -top-[50px] -right-[50px] w-[30rem] rounded-t-lg
                lg:scale-[0.8]
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