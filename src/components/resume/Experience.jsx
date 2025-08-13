import React from 'react'
import ExpCard from './ExpCard'
function Experience() {
  return (
    <>
      <div className="py-12 font-titleFont text-center">
            <p className="text-sm text-designColor tracking-[4px]">2024</p>
            <h2 className="text-4xl font-bold">Experience</h2>
            </div>
            <div className="mt-10 w-full h-full border-l-[6px] border-l-black ml-10 lgl:ml-[100px]
            border-opacity-30 flex flex-col gap-10">
                <ExpCard 
    title={"Web Development Trainer"}
    duration={"Aug 2025 - Present"}
    result={"Genagogy Nowgam, Srinagar in association with Technoglobe.co.in"}
    des={"Conduct training sessions on HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, and MongoDB. Guide students in developing real-world projects, mentor them on industry best practices, and prepare them for technical interviews. Design interactive, hands-on coding sessions to strengthen problem-solving skills and ensure practical knowledge retention."}
/>

                {/* <ExpCard 
                    title={"Full Stack Web Development (MERN)"}
                    institution={"PW SKILLS"}
                    duration={"MAY 2024-December-2024"}
                    result={"A"}
                    des={"A MERN Full Stack Developer specializes in building web applications using the MERN stack. They handle both client-side and server-side development, ensuring seamless integration and efficient performance of web applications. Proficient in designing, developing, and deploying full-stack solutions, they bring ideas to life through interactive and responsive interfaces"}
                />
                <ExpCard 
                    title={"Secondary School Education"}
                    institution={"Govt. Boys Higher Secondary School Budgam"}
                    duration={"2017"}
                    result={"85.2%"}
                    des={"Completed my secondary education in Budgam, where I gained a strong foundation in mathematics, science. I developed problem-solving skills, critical thinking, and analytical abilities, and excelled in my academic performance"}
                /> */}

            </div>
    </>
  )
}

export default Experience
