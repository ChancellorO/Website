"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from "@/lib/data";
import UCLALogo from "@/public/UCLA-logo.png";
import Image from "next/image";


export default function Experience() {
    return (
        <section
            id="experience"
            className="mb-28 scroll-mt-28"
        >
            <h1 
            className="text-3xl font-medium mb-8 text-center"
            >
                Experience
            </h1>
            <VerticalTimeline
                layout={"1-column-right"}
            >
                {experiences.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{ background: '#303032', boxShadow: "none", textAlign: "left", padding:"1.3rem 2rem"}}
                            iconStyle={{ background: '#303032', fontSize: "1.5rem" }}
                            date={item.date}
                            icon={<Image src={item.icon} alt={item.title}/>}
                        >
                            <h3 className="text-2xl">{item.title}</h3>
                            <h4 className="text-lg">{item.company}</h4>
                            <p>{item.description}</p>

                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );

}
