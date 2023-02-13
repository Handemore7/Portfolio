import React, { useEffect, useState } from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
import { urlFor, client } from '../../client'

import { AppWrap } from '../../wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut',
    }
  }
}

const defaultCircles = [images.flutter, images.redux, images.sass]

const Header = () => {
  const [specificData, setSpecificData] = useState(null)

  useEffect(() => {
    const query = '*[_type == "specificThings"]';
  
    client.fetch(query)
      .then((data)=>{
        setSpecificData(data)
      })

  }, [])

  return (
    <div className='app__header app__flex'>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration:0.5 }} className='app__header-info'>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Carlos</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web developer</p>
            <p className='p-text'>UX/UI</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app__header-img'>
        <img src={specificData ? urlFor(specificData[0].bannerImage) : images.profile} alt="profile bg" />
        <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration:1, ease: 'easeInOut' }} src={images.circle} alt='profile circle' className='overlay_circle' />
      </motion.div>
      
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
        {specificData ? specificData[0].bannerIcons.map((circle, i) => (
          <div className='circle-cmp app__flex' key={`circle-${i}`}>
            <img src={urlFor(circle)} alt='circleApp' />
          </div>
        )) : defaultCircles.map((circle, i) => (
          <div className='circle-cmp app__flex' key={`circle-${i}`}>
            <img src={circle} alt='circleApp' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'Home') 