import React from "react";
import { TbBrandReact } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineDisplaySettings } from "react-icons/md";

import waOne from "@/public/wa-one.png";
import afoMedia from "@/public/afo-media.png";
import quranRecite from "@/public/quranrecite.png";
import youthTube from "@/public/youth.webp";
import storic from "@/public/storic.webp";

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
    location: "Techonventures, Karachi, Pakistan",
    description:
      "• Transformed a mockup of a fintech dashboard into a React JS application. (https://wa-one-user.vercel.app/)",
    icon: React.createElement(FaReact),
    date: "February 2023 - March 2023",
  },
  {
    title: "Associate React JS Developer",
    location: "Techonventures, Karachi, Pakistan",
    description:
      "I'm now an associate React JS developer working on a fintech application and also worked on a video browsing website (AFOMedia). I have successfully integrated complex APIs into fintech and video browsing software, enhancing their capabilities and user experience.",
    icon: React.createElement(TbBrandReact),
    date: "April 2023 - Present",
  },
] as const;

export const projectsData = [
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
    tags: ["React", "Axios", "css", "Rapid API", "Material UI"],
    link: "https://youthtube.netlify.app/",
    imageUrl: youthTube,
  },
  {
    title: "Admin Dashboard Template (Storic)",
    description:
      "Created a responsive admin dashboard that utilizes React JS and the Context API, incorporating Synfusion's calendar, kanban, and editor components",
    tags: ["React", "Context api", "Syncfusion Components", "css"],
    link: "https://syncfusion-admin-dashboard-1012.netlify.app/ecommerce",
    imageUrl: storic,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
] as const;
