import React from "react";
import { TbBrandReact } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { BsStack } from "react-icons/bs";

import waOne from "../assets/wa-one.png";
import afoMedia from "../assets/afo-media.png";
import instaPay from "../assets/instapay.png";
import quranRecite from "../assets/quranrecite.png";
import youthTube from "@/public/youth.webp";
import storic from "@/public/storic.webp";
import prompt from "../assets/Prompt.png";
import nike from "../assets/nike.png";
import instaBot from "../assets/insta_bot.jpeg";
import spendWise from "../assets/spendwise.png";
import microservice from "../assets/microservice.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "DHA Suffa University, Karachi, Pakistan",
    description:
      "I graduated from DHA Suffa University specializing in Computer Science Domain",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Intern - Mern Stack",
    location: "Folio3, Karachi, Pakistan",
    description:
      "Facilitated my team in designing and developing user interfaces using Figma and React JS for a web application. Worked alongside the backend developer to ensure smooth integration of the front-end and back-end systems",
    icon: React.createElement(MdOutlineDisplaySettings),
    date: "June 2021 - September 2023",
  },
  {
    title: "React JS Intern",
    location: "TechOn ventures, Karachi, Pakistan",
    description:
      "Transformed a mockup of a fintech dashboard into a React JS application. (https://wa-one-user.vercel.app/)",
    icon: React.createElement(FaReact),
    date: "February 2023 - March 2023",
  },
  {
    title: "Front-End Engineer",
    location: "TechOn ventures, Karachi, Pakistan",
    description:
      "As a React JS developer worked on a fintech application and also worked on a video browsing website (AFOMedia). I have successfully integrated complex APIs into fintech and video browsing software, enhancing their capabilities and user experience.",
    icon: React.createElement(TbBrandReact),
    date: "April 2023 - November 2023",
  },
  {
    title: "Full Stack Developer",
    location: "TechOn ventures, Karachi, Pakistan",
    description:
      "I'm now working as Full Stack Developer where I have developed front-end and back-end for multiple fintech websites, ensuring seamless integration. Also managed S3 buckets for efficient storage and retrieval of financial data.",
    icon: React.createElement(BsStack),
    date: "November 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "InstaPay",
    description:
      "I Managed server-side functionalities, ensuring the robust handling of transactional data and optimizing system performance.",
    tags: [
      "Node JS",
      "Mongo DB",
      "Express JS",
      "S3 Bucket",
      "Socket.io",
      "axios",
    ],
    link: "https://my.insta-pay.ch/",
    imageUrl: instaPay,
  },
  {
    title: "AFOMedia",
    description:
      "I worked as a frontend developer on this project for 2 months in my recent company. This project is dynamic media streaming platform, which allows users to watch different categories journalism videos and shows",
    tags: [
      "React",
      "react-bootstrap",
      "react-jw-player",
      "Context API",
      "Swiper React",
      "axios",
    ],
    link: "https://afomedia.com/",
    imageUrl: afoMedia,
  },
  {
    title: "Instapay Chatbot",
    description:
      "Developed an Instagram chatbot to simplify mobile transactions. Integrated the entire payment system into the chatbot interface for seamless transactions on Instagram.",
    tags: [
      "Graph APIs",
      "META Developers Hub",
      "webhooks",
      "Node JS",
      "Express JS",
    ],
    link: "https://www.instagram.com/instapay_swiss/",
    imageUrl: instaBot,
  },
  {
    title: "WA-One",
    description:
      "Wa-One is a fintech, money transaction application which makes the transaction and bill payments process smooth giving the digital currency and a user friendly platform",
    tags: [
      "React",
      "VITE",
      "Redux Toolkit",
      "Tailwind",
      "Apex charts",
      "Framer",
    ],
    link: "https://wa-one-user.vercel.app/",
    imageUrl: waOne,
  },
  {
    title: "MicroSocial",
    description:
      "A scalable social media app built with Node.js microservices architecture, leveraging Redis for caching, RabbitMQ for messaging, and Docker for seamless deployment, featuring API Gateway, Identity, Post, Search, Messaging, and Media services.",
    tags: [
      "Node JS",
      "Express JS",
      "Redis",
      "Event driven architecture",
      "Microservices",
      "Docker",
      "RabbitMQ",
      "Message Queue",
    ],
    link: "https://github.com/SarfarazAhmed1012/social-media-micro-services",
    imageUrl: microservice,
  },
  {
    title: "SpendWise",
    description:
      "Full-stack Expense Tracker using React, Node.js, and GraphQL with user authentication and transaction analytics features.",
    tags: [
      "React",
      "Node JS",
      "Express JS",
      "GraphQL",
      "Tailwind CSS",
      "Mongo DB",
      "Apollo Client",
    ],
    link: "https://spendwise.netlify.app/",
    imageUrl: spendWise,
  },
  {
    title: "Promptify",
    description:
      "An innovative platform designed for managing and creating AI prompts with ease.",
    tags: ["NEXT JS", "React JS", "NextAuth", "Tailwind CSS", "Mongo DB"],
    link: "https://youthtube.netlify.app/",
    imageUrl: prompt,
  },

  {
    title: "QuranEasy",
    description:
      "In this application you can select and listen to all the surahs from Quran e Pak and you also can change the reciters. Integrated an api with the data of Chapters and different reciters",
    tags: ["React", "Axios", "css"],
    link: "https://quranrecitation.netlify.app/",
    imageUrl: quranRecite,
  },
  {
    title: "Youthtube",
    description:
      "A youtube clone with all the functionalities like search, select, play and show related videos. User is able to search different videos and also filter the videos with different categories",
    tags: ["React", "Axios", "css", "Material UI", "Rapid API"],
    link: "https://youthtube.netlify.app/",
    imageUrl: youthTube,
  },

  {
    title: "Admin Dashboard Template (Storic)",
    description:
      "Created a responsive admin dashboard that utilizes React JS and the Context API, incorporating Synfusion's calendar, kanban, and editor components",
    tags: ["React", "Context api", "Syncfusion Components", "css"],
    link: "https://syncfusion-admin-dashboard-1012.netlify.app",
    imageUrl: storic,
  },
  {
    title: "Nike landing page",
    description:
      "Nike responsive landing page made with React JS and tailwind css",
    tags: ["React", "Tailwind"],
    link: "https://nike-landing-page-1012.vercel.app/",
    imageUrl: nike,
  },
] as const;

export const skillsData = [
  "Microservices",
  "Redis",
  "GraphQL",
  "Chatbot Development (Instagram, Telegram, Whatsapp)",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Firebase",
  "JW Player",
  "Express",
  "MySql",
  "Python",
  "Framer Motion",
  "AWS",
  "Sockets",
  "Graph APIs",
] as const;
