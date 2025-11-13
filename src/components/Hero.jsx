import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const Hero = ({ profile, socials }) => {
  if (!profile) return null

  const urlToGmail = "https://mail.google.com/mail/?view=cm&fs=1&to="

  const getSocialIcon = (name) => {
    if (name === "GitHub") return <FaGithub />
    if (name === "LinkedIn") return <FaLinkedin />
    if (name === "Instagram") return <FaInstagram />
    return null
  }

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20},
    animate: { opacity: 1, y: 0},
    transition: { duration: .6, delay: delay, ease: "easeInOut"}
  })

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-center bg-hero-banner bg-cover bg-center bg-no-repeat"    
    >
      <div className="absolute inset-0 bg-sky-900/70" />
      
      <div className="relative z-10 p-4">
        <motion.div {...fadeIn(0.2)}>
          <img
            src= {profile.photo}
            alt= {profile.name}
            className='w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-sky-300 shadow-xl mb-6'
            onError={(e) => {e.target.src = "https://placehold.co/192x192/0c4a6e/7dd3fc?text=Foto"}}
          />  
        </motion.div>

        <motion.h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-50 mb-3 tracking-tight'
        {...fadeIn(0.6)}
        >
          {profile.name}
        </motion.h1>

        <motion.p className='text-xl sm:text-2xl md:text-3xl font-medium text-sky-300 mb-8'
        {...fadeIn(0.6)}
        >
          {profile.title}
        </motion.p>

        <motion.div {...fadeIn(0.8)}>
          <a 
          href={`${urlToGmail}${profile.email}`}
          className='inline-block bg-sky-300 text-sky-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-sky-400 hover:scale-105 transform transition-all duration-300 ease-in-out'
          target="_blank"
          rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div className='flex justify-center space-x-6 mt-10'
        {...fadeIn(1.0)}
        >
          {socials.map((social) => (
            <a 
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className='text-slate-200 hover:text-sky-300 transition-colors duration-300'
            >
              <span className='text-3xl'> {getSocialIcon(social.name)}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero