import React from 'react'
import AchivCard from './ExpCard'
function Achivements() {
  return (
    <>
      <div className="py-12 font-titleFont text-center">
            <p className="text-sm text-designColor tracking-[4px]">2023</p>
            <h2 className="text-4xl font-bold">Achivements</h2>
            </div>
            <div className="mt-10 w-full h-full border-l-[6px] border-l-black ml-10 lgl:ml-[100px]
            border-opacity-30 flex flex-col gap-10">
                <AchivCard 
                    title={"Merit Certicate by University"}
                    duration={"June 2024"}
                    result={"IUST"}
                    des={"Awarded a merit certicate for securing 3rd position in Electrical Engineering during my B.Tech J&K, demonstrating strong academic performance and technical prociency."}
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

export default Achivements
