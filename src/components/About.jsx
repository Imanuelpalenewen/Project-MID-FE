import React from 'react'
import { motion } from 'framer-motion'

const About = ({ profile }) =>{
  if (!profile) return null

  const scrollReveal = {
    hidden: { opacity:0, y:50},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: .7, ease: "easeOut"}
    }
  }

  return (
    <motion.section
      id='about'
      className='py-24 sm:py-32 bg-sky-800'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: .3}}
      variants={scrollReveal}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className='text-4xl font-extrabold text-center leading-relaxed'>
          About Me
        </h2>
        <p className="text-xl text-slate-200 text-center leading-relaxed ">
          {profile.bio}
        </p>
      </div>
    </motion.section>
  )
}

export default About