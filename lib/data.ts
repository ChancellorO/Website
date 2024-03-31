import React from "react";
import UCLALogo from "@/public/UCLA-logo.png";
import { CgWorkAlt } from "react-icons/cg";
import AnimeListPhoto from "@/public/animelist.jpg";
import WeTour from "@/public/Wetour.png";

export const projects = [
    {
        title: "Sustainable Energy",
        description: "Constructed a series of ML models to identify leading carbon emission with above an 85% accuracy rate. Developed a time forecasting ARIMA model to predict the amount of carbon a country emits in future years.",
        date: "October 2023 - December 2023",
        image: WeTour,
    },
    {
        title: "HTTP Web Server",
        description: "Generated bash scripts to automate integration and unit tests to preserve the integrity of the web server. Adhered to Google's protocols for testing and refactoring, and established a standard for request handlers. Standardized NGINX config file formats and integrated corresponding test cases.",
        date: "March 2023 - June 2023",
        image: AnimeListPhoto,
    },
    {
        title: "WeTour",
        description: "Created RESTful APIs using Django with CRUD operations to store and retrieve local tourist data. Engineered the authorization system to authenticate and preserve user data on PostgresSQL. Developed multiple responsive Django template pages using Tailwind CSS to enhance user experience. Guided a group of 4 students and presented the project to 20+ senior software engineers and 300+ people.",
        date: "April 2023",
        image: WeTour
    },
    {
        title: "OurAnimeList",
        description: "Lead the development of the backend infrastructure using NodeJS and MongoDB database. Devised an algorithm leveraging users' anime preferences to match users with similar interests",
        date: "March 2022 - June 2022",
        image: AnimeListPhoto,
    },
] as const;

export const experiences = [
    {
        title: "Software Engineer Intern",
        company: "University of California, Los Angeles",
        date: "April 2023 - Present",
        description: "Constructing a mobile application using react-native to enhance digital outreach for mental health resources. Creating responsive pages and developing a RESTful API that manages data from MongoDB.",
        icon: UCLALogo,

    },
    {
        title: "Mobile Developer",
        company: "IDONTMIND - Contract",
        date: "April 2023 - Present",
        description: "Developing proprietary tools for multiple cultural departments and co-lead developer of a chatbot project. Leading the redesign of the SQL database and conducting codebase refactoring for programs used by 100+ users.",        
        icon: UCLALogo,
    },    
    {
        title: "Computer Science Mentor and Tutor",
        company: "College of the Canyons",
        date: "October 2022 - December 2023",
        description: "Taught 25+ students complex computer science topics regarding Data Structures, Algorithms, and Discrete Structures. Assisted 1st and 2nd year students in finding opportunities outside of academia and prepared them to transfer to four-year universities.",        
        icon: UCLALogo,        
    },
] as const;

export const skills = [
    {
        name: "JavaScript",
        icon: "logos:javascript",
    },
    {
        name: "TypeScript",
        icon: "logos:typescript-icon",
      },
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Node.js",
        icon: "logos:nodejs-icon",
      },
      {
        name: "Python",
        icon: "logos:python",
      },
      {
        name: "Java",
        icon: "logos:java",
      },
      {
        name: "HTML",
        icon: "vscode-icons:file-type-html",
      },
      {
        name: "CSS",
        icon: "vscode-icons:file-type-css",
      },
      {
        name: "SCSS",
        icon: "logos:sass",
      },
      {
        name: "Git",
        icon: "logos:git-icon",
      },
      {
        name: "MySQL",
        icon: "logos:mysql",
      },
      {
        name: "Linux",
        icon: "flat-color-icons:linux",
      },
      {
        name: "AWS",
        icon: "logos:aws",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
      },

] as const;

