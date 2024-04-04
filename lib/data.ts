import React from "react";
import UCLALogo from "@/public/UCLA-logo.png";
import IDONTMINDLogo from "@/public/IDONTMIND.png";
import COCLogo from "@/public/COC.png";
import { CgWorkAlt } from "react-icons/cg";
import AnimeListPhoto from "@/public/animelist.jpg";
import WeTour from "@/public/Wetour.png";
import Webserver from "@/public/webserver.png";
import SustainableEnergy from "@/public/sustainableenergy.png";

export const projects = [
    {
        title: "Sustainable Energy",
        description: "Constructed a series of ML models to identify leading carbon emission with above a 90% accuracy rate. Developed a time forecasting ARIMA model, predicting the amount of carbon a country emits.",
        date: "October 2023 - December 2023",
        image: SustainableEnergy,
    },
    {
        title: "HTTP Web Server",
        description: "Followed test-driven development, Creating bash scripts for automated testing and developing unit tests using gtest/gmock. Standardized NGINX config file formats and developed corresponding request handlers. Integrated global coding style and constructed documentation to enable readability for potential contributors. Managed a team of 4 students, implementing agile methodologies by setting up sprint meetings and conducting code reviews.",
        date: "March 2023 - June 2023",
        image: Webserver,
    },
    {
        title: "WeTour",
        description: "Created a RESTful API using Django with CRUD operations to store and retrieve local tourist data. Engineered the authorization system to authenticate and preserve user data on PostgresSQL. Developed multiple responsive Django template pages using Tailwind CSS to enhance user experience. Worked with a team of 4 students and presented the project to 20+ senior software engineers and 300+ people.",
        date: "April 2023",
        image: WeTour
    },
    {
        title: "OurAnimeList",
        description: "Lead the development of the backend infrastructure using NodeJS and MongoDB database. Devised an algorithm leveraging users' anime preferences to match users with similar interests.",
        date: "March 2022 - June 2022",
        image: AnimeListPhoto,
    },
] as const;

export const experiences = [
    {
        title: "Software Engineer Intern",
        company: "University of California, Los Angeles",
        date: "April 2023 - Present",
        description: "Developing proprietary tools for cultural departments and conducting codebase refactoring for programs used by 100+ users. Lead developer of a chatbot project, constructing a responsive frontend design and setting up backend logic with OpenAI API. Refactored SQL queries generating data tables, improving query time for the Visitors Bureau SQL Server.",        
        icon: UCLALogo,

    },
    {
        title: "Mobile Developer",
        company: "IDONTMIND - Contract",
        date: "April 2023 - Present",
        description: "Constructing a mobile application to enhance digital outreach for mental health resources on IOS and Android devices. Creating responsive frontend pages such as Content Library and Day Challenge using React Native and CSS. Implemented logic for “Recommendation” and “Favorite” features and designed the schema for users in NoSQL database. Developed Backend endpoints and linked them to frontend pages.",        
        icon: IDONTMINDLogo,
    },    
    {
        title: "Computer Science Mentor and Tutor",
        company: "College of the Canyons",
        date: "October 2022 - December 2023",
        description: "Taught 25+ students computer science topics regarding Data Structures, Algorithms, and Discrete Structures. Held computer science study sessions for Java and C++ courses, helping students understand complex subjects such as OOP. Assisted students for transferring to four-year universities, Scheduling weekly meetings and curating academic plans.",
        icon: COCLogo,        
    },
] as const;

export const skills = [
    {
        name: "JavaScript",
        icon: "skill-icons:javascript",
    },
    {
      name: "React",
      icon: "skill-icons:react-dark",
    },    
    {
      name: "TypeScript",
      icon: "skill-icons:typescript",
    },
    {
      name: "Node.js",
      icon: "skill-icons:nodejs-dark",
    },
    {
      name: "CSS",
      icon: "skill-icons:css",
    },
    {
      name: "Java",
      icon: "skill-icons:java-dark",        
    },
    {
      name: "HTML",
      icon: "skill-icons:html",
    },
    {
      name: "Python",
      icon: "skill-icons:python-dark",
    },
    {
      name: "Git",
      icon: "skill-icons:git",
    },
    {
      name: "MySQL",
      icon: "skill-icons:mysql-dark",
    },
    {
      name: "CPP",
      icon: "skill-icons:cpp",
    },      
    {
      name: "Linux",
      icon: "skill-icons:linux-dark",
    },
    {
      name: "Docker",
      icon: "skill-icons:docker",
    },
] as const;

