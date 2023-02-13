import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import { urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {

  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
  
    client.fetch(query)
      .then((data)=>{
        setExperience(data)
      })

    client.fetch(skillsQuery)
    .then((data)=>{
      setSkills(data)
    })

  }, [])
  

  return (
    <>
      <h2 className='head-text'>
        Skills & experience
      </h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill, i) => (
            <motion.div whileInView={{opacity: [0,1]}} transition={{duration:0.5}} className='app__skills-item app__flex' key={skill.name}>
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
            {experience.map((experiences) => (
              <motion.div className='app__skills-exp-item' key={experiences._id}>
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experiences.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experiences.works.map((work) =>(
                    <>
                      <motion.div id={work.name} whileInView={{opacity: [0,1]}} transition={{duration:0.5}} className='app__skills-exp-work' key={work._key}>
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <ReactTooltip anchorId={work.name} effect="solid" arrowColor="#fff" className='skills-tooltip'>
                        {work.desc}
                      </ReactTooltip>
                    </> 
                  ))}
                </motion.div>
              </motion.div>
              ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills') , 'Skills',"app__whitebg")