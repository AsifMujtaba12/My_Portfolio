import React from "react";
import Title from "../layouts/Title";
import LeftSide from "./LeftSide";
import { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleButton = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation()) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  
  return (
    <>
      <section
        id="contact"
        className="w-full  flex flex-col item-center py-20  border-b-[1px] border-b-black"
      >
        <div className="flex item-center justify-center text-center">
          <Title title={"Contact Me"} des={"Get In Touch"} />
        </div>
        <div className="w-full flex">
          <div className="w-full h-auto flex flex-col gap-10 px-10 lgl:px-0 lgl:flex-row lgl:justify-between">
            <LeftSide />
            {/* rightside */}
            <div
              className="w-full lgl:w-[57%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 

rounded-lg shadow-shadowOne flex flex-col gap-4"
            >
              <form className="w-full  flex flex-col gap-6 py-2">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
                <div className="w-full flex items-center gap-10">
                  <div className="w-1/2 flex flex-col gap-4 ">
                    <p className="tracking-wide text-sm uppercase font-medium text-gray-400 ">
                    
                      YOUR NAME
                    </p>
                    <input 
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                     className= {`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`} type="text" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-4 ">
                    <p className="tracking-wide text-sm uppercase font-medium text-gray-400 ">
                      Phone number
                    </p>
                    <input 
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text" />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="tracking-wide text-sm uppercase font-medium text-gray-400 ">
                    E-mail id
                  </p>
                  <input 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`} type="email" />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="tracking-wide text-sm uppercase font-medium text-gray-400 ">
                    subject
                  </p>
                  <input onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`} type="text" />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="tracking-wide text-sm uppercase font-medium text-gray-400 ">
                    message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  ></textarea>
                </div>
                <div className="w-full flex items-center gap-4">
                  <button
                    onClick={handleButton}
                    className="w-full h-12 bg-[#141518] 
     rounded-lg text-base text-gray-400 tracking-wider uppercase
      hover:text-white duration-300 hover:border-[1px]
       hover:border-designColor border-transparent"
                  >
                    Submit
                  </button>
                </div>
                {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
