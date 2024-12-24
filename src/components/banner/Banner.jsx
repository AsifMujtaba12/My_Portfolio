import React from "react";
import RightPart from "./RightPart";
import LeftPart from "./LeftPart";

function Banner() {
  
  return (
    <section
      id="home"
      className="w-full pt-10 flex flex-col gap-10 lgl:gap-0 lgl:flex-row items-center  border-b-[1px] border-b-black lgl:pb-5 pb-10"
    >
      <LeftPart />
      <RightPart/>
    </section>
  );
}

export default Banner;
