import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achivements from "./Achivements";
import { Link } from "react-router-dom";

function Resume() {
  const [eduData, setEduData] = useState(true);
  const [skillData, setskillData] = useState(false);
  const [expData, setExpData] = useState(false);
  const [achData, setAchData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full flex flex-col item-center py-20 border-b-[1px] border-b-black "
    >
      <div className="flex items-center justify-center text-center">
        <Title title={"8+ months of Experience"} des={"My Resume"} />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 px-10 gap-4 lgl:gap-0 lgl:px-0">
          <li
            onClick={() => {
              setEduData(true);
              setskillData(false);
              setExpData(false);
              setAchData(false);
            }}
            className={`${
              eduData ? "border-designColor rounded-lg " : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEduData(false);
              setskillData(true);
              setExpData(false);
              setAchData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg " : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEduData(false);
              setskillData(false);
              setExpData(true);
              setAchData(false);
            }}
            className={`${
              expData ? "border-designColor rounded-lg " : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setEduData(false);
              setskillData(false);
              setExpData(false);
              setAchData(true);
            }}
            className={`${
              achData ? "border-designColor rounded-lg " : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {eduData ? <Education /> : null}
      {skillData ? <Skills /> : null}
      {expData ? <Experience /> : null}
      {achData ? <Achivements /> : null}
      <div className="w-[200px] ml-20 lgl:translate-x-[560px] lgl:ml-0 mt-20">
        <a
          href="https://drive.google.com/file/d/1C8l3tt3IiLFji0UgIljENXvfDLMw-4M7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-10 h-10 text-designColor bg-black bg-opacity-25 hover:bg-opacity-50 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium mb-[10px]"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
