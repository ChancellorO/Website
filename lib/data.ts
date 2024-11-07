import React from "react";
import UCLALogo from "@/public/UCLA-logo.png";
import IDONTMINDLogo from "@/public/IDONTMIND.png";
import NYU from "@/public/NYU.png";
import CalPoly from "@/public/CalPoly.png";
import COCLogo from "@/public/COC.png";
import AnimeListPhoto from "@/public/animelist.jpg";
import WeTour from "@/public/Wetour.png";
import Webserver from "@/public/webserver1.png";
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
        description: "Followed test-driven development, Creating bash scripts for automated testing and developing unit tests using gtest/gmock. Standardized NGINX config file formats and developed corresponding request handlers. Integrated global coding style and constructed documentation to enable readability for potential contributors.",
        date: "March 2023 - June 2023",
        image: Webserver,
    },
    {
        title: "WeTour",
        description: "Facilitated the development of 5+ scalable screens using Django templates and TailwindCSS.\nEngineered the authorization system to authenticate and preserve user data on PostgresSQL.\nWorked with a team of 4 students and presented the project to 20+ senior software engineers and 300+ people.",
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
      title: "Mobile Developer",
      company: "New York University",
      date: "October 2024 - Present",
      description: "Constructing a mobile application using react-native to enhance digital outreach for mental health resources.\nCreating responsive pages and developing a RESTful API that manages data from MongoDB.",        
      icon: NYU,
    },
    {
      title: "Research Assistant",
      company: "California Polytechnic State University",
      date: "May 2024 - October 2024",
      description: "Designing and Developing an end-to-end allometric dashboard that dynamically generates data analytics from 8 million trees in California's urban forests.\nUsing Django to establish a RESTful API between the dashboard and PostgreSQL database to preprocess allometric data and study correlations between California trees and climate zones.\nSpearheading data visualization by utilizing Scikit-learn, Pandas, Numpy, and ChartJS to highlight allometry equations.",        
      icon: CalPoly,
    },
    {
        title: "Software Engineer Intern",
        company: "University of California, Los Angeles",
        date: "April 2023 - June 2024",
        description: "Developed an internal full-stack chatbot using VB.NET, ASP.NET, and OpenAI API to streamline web tool information for 100+ users, improving user experience and accessibility across multiple cultural departments.\nRewrote SQL queries and refactored the Visitors Bureau API, reducing query times for 100,000+ records of Visiting Scholars.\nLed the development of a monthly calendar to centralize and dynamically display cultural events, informing 1000+ UCLA\nstudents across campus.",        
        icon: UCLALogo,

    },
    {
        title: "Mobile Developer",
        company: "IDONTMIND - Contract",
        date: "April 2023 - August 2024",
        description: "Developed 5+ screens and 10+ RESTful APIs to enable seamless data flow of user analytics using React.js and Node.js.\nBuilt the infrastructure for user authentication, authorization and application state using Redux and React Context.\nConstructed the Content Library to centralize tags and dynamically recommend resources based on user's preferences.",        
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
    {
      name: "Tailwindcss",
      icon: "skill-icons:django",
    },
    {
      name: ".NET",
      icon: "skill-icons:dotnet",
    },
] as const;

