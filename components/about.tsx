"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue a career in programming and software development. I joined a
        fast-growing startup primarily focused on fintech applications, where I
        work as a <span className="font-medium">Frontend Engineer</span>.{" "}
        <span className="italic">My favorite part of the job</span> is the
        problem-solving—I <span className="underline">relish</span> the feeling
        of finally figuring out a solution. My core stack is{" "}
        <span className="font-medium">React, Next.js</span>. I am also familiar
        with Node.js, MongoDB, TypeScript and Prisma. I am always eager to learn
        new technologies. Currently, {"I'm"} actively seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing
        football, watching the latest football game highlights, and listening to
        podcasts. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">astronomy. </span>
      </p>
    </motion.section>
  );
}
