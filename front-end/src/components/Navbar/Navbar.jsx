import React, { useEffect, useState } from 'react'
import './Navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { images } from '../../constants'
import { motion } from 'framer-motion'

import { urlFor, client } from '../../client'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const [specificData, setSpecificData] = useState(null)

  useEffect(() => {
    const query = '*[_type == "specificThings"]';
  
    client.fetch(query)
      .then((data)=>{
        setSpecificData(data)
      })

  }, [])

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={specificData ? urlFor(specificData[0].navBarLogo) : images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['Home','About','Work','Skills','Contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
              <HiX onClick={() => setToggle(false)}/>
              <ul>
                {['Home','About','Work','Skills','Contact'].map((item) => (
                  <li key={`link-${item}`} className='app__flex p-text'>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar