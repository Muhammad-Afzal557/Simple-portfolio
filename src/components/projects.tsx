
import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

  const data = [
{
    id: 0,
    title: "Simple Amazon Website ",
    desc: "Simple Amazon Website Using  HTML & CSS",
    img: "/project-01.png",
    tags: [" HTML , CSS "]

},
{
    id: 1,
    title: " One Tech ",
    desc: "Simple One Tech Website Using  HTML & CSS",
    img: "/project-02.png",
    tags: [" HTML , CSS "]

},{
    id: 2,
    title: " Care Plus ",
    desc: " Care Plus Website for Online Appointment Using  HTML & CSS",
    img: "/project-03-.png",
    tags: [" HTML , CSS "]

},{
    id: 3,
    title: "Digital Architecture Project ",
    desc: "Digital Architecture  project Using  HTML & CSS",
    img: "/project-04.png",
    tags: [" HTML , CSS "]

},{
    id: 4,
    title: " Basic Web Calculator ",
    desc: "Simple Web Calculator Using  HTML & CSS , TYPESCRIPT",
    img: "/project-05.png",
    tags: [" HTML , CSS , TYPESCRIPT "]

},{
    id: 5,
    title: " My Portfolio ",
    desc: "My Portfolio Using  HTML & CSS ",
    img: "/project-06.png",
    tags: [" HTML , CSS "]

},
  ]


const Projects = () => {
  return (
    <div id='projects' className=' container pt-32'>
        <Heading title='My Projects ' />
        <div className=' grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card
            key={el.id} 
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>

      
    </div>
  )
}

export default Projects
