"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className=" text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:sarfarazahmed1012@gmail.com" className=" underline">
          sarfarazahmed1012@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action="" className="group mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          type="email"
          name=""
          placeholder="Your email"
          id=""
        />
        <textarea
          placeholder="Your message"
          className=" h-52 rounded-lg my-3 border border-black/10 p-4"
        />
        <button
          type="submit"
          className="flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className=" text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
