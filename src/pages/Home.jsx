import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import fetchAllData from '../api/restAPI.jsx'

import Navbar  from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Gallery from '../components/Gallery.jsx'
import Footer from '../components/Footer.jsx'

function Home () {
  const [profile, setProfile] = useState(null)
  const [gallery, setGallery] = useState([])
  const [socials, setSocials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const loadData = async () => {
      try {
        const data = await fetchAllData()

        setProfile(data.profile)
        setGallery(data.gallery)
        setSocials(data.socials)
      } catch (error) {
        console.log(`Failed to Load Data in Home.jsx : ${error}`)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Loading Spinner Animation
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-sky-900 text-slate-50 text-2xl">Loading Home Page</div>
    )
  }

  return (
    <div className="bg-sky-900 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Main content di wrap dgn motion.div utk fade in */}
      <motion.main
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: .5}}
      >
        {/* Hero */}
        <Hero profile={profile} socials={socials} />
        
        {/* About */}
        <About profile={profile} />

        {/* Gallery */}
        <Gallery gallery={gallery} />.

      </motion.main>

      {/* Footer */}
      <Footer profile={profile} socials={socials} />
    </div>
  )
}

export default Home