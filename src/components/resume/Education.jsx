import React from 'react'
import ResumeCard from './ResumeCard'
function Education() {
  return (
    <>
       <div className="py-12 font-titleFont text-center">
            <p className="text-sm text-designColor tracking-[4px]">2000-2024</p>
            <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-10 w-full h-full border-l-[6px] border-l-black ml-[25px] lgl:ml-[100px]
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard 
                    title={"Bachelor of Electrical Engineering"}
                    institution={"Islamic University of Science and Techology, J&K"}
                    duration={"2019-2023"}
                    result={"8.37 CGPA"}
                    des={"Developed a solid foundation in engineering principles, problem-solving, and analytica skills, with a focus on applying technical knowledge in real-world scenarios.Engaged in various projects and coursework that enhanced my understanding of both hardware and software applications"}
                />
                <ResumeCard 
                    title={"Full Stack Web Development (MERN)"}
                    institution={"PW SKILLS"}
                    duration={"MAY 2024-December-2024"}
                    result={"A"}
                    des={"A MERN Full Stack Developer specializes in building web applications using the MERN stack. They handle both client-side and server-side development, ensuring seamless integration and efficient performance of web applications. Proficient in designing, developing, and deploying full-stack solutions, they bring ideas to life through interactive and responsive interfaces"}
                />
                <ResumeCard 
                    title={"Secondary School Education"}
                    institution={"Govt. Boys Higher Secondary School Budgam"}
                    duration={"2017"}
                    result={"85.2%"}
                    des={"Completed my secondary education in Budgam, where I gained a strong foundation in mathematics, science. I developed problem-solving skills, critical thinking, and analytical abilities, and excelled in my academic performance"}
                />

            </div>
    </>
  )
}

export default Education
