import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MediaPart from "./MediaPart";

function LeftPart() {
  const [text] = useTypewriter({
    words: [
      "a Full Stack MERN Developer.",
      "a Frontend Developer.",
      "an Electrical Engineer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });
  return (
    <>
      <div className="w-full flex flex-col py-[100px] px-10  gap-20 lgl:w-1/2">
        <h4 className="text-lg font-normal">Welcome To My World</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Asif Mujtaba </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Enthusiastic MERN stack developer with a strong passion for creating
          visually appealing and responsive web designs. Proficient in React and
          modern frontend technologies, with a knack for bringing animations to
          life using GSAP. Always eager to learn and contribute to exciting
          projects. Actively seeking a frontend developer role to apply my
          skills and grow within a creative and dynamic team.
        </p>
        <MediaPart />
      </div>
    </>
  );
}

export default LeftPart;
