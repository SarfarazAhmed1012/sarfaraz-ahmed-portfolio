import React from "react";

export default function Footer() {
  return (
    <footer className=" mb-10 px-4 text-center text-gray-400 flex flex-col justify-center items-center ">
      <small className=" block mb-2 text-xs">
        &copy; 2024 Sarfaraz Ahmed. All rights reserved
      </small>
      <p className=" text-xs sm:max-w-[calc(100%-10rem)] text-center">
        <span className=" font-semibold">About this portfolio website:</span>{" "}
        built with React & Next.js (App router and server actions), Typescript,
        Tailwind CSS, Framer Motion, React Email, Resend, React Hot Toast and
        vercel deployement.
      </p>
    </footer>
  );
}
