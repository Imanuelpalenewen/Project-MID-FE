import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

function Gallery ({ gallery }) {
  if(!gallery || gallery.length === 0) return null

  const scrollReveal = {
    hidden: { opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: .7, ease: "easeOut", delay: .2}
    }
  }

  return (
    <motion.section
      id="gallery"
      className="py-24 sm:py-32 bg-sky-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: .1}}
      variants={scrollReveal}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className='text-4xl font-extrabold text-center text-slate-50 mb-12'>
          My Gallery
        </h2>

        <Carousel gallery={gallery} />
      
      </div>
    </motion.section>
  )
}

export default Gallery