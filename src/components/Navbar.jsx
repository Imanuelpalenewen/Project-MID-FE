import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi' // hamburger icon utk mobile

function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { title: "Home", href: "#home"},
    { title: "About", href: "#about"},
    { title: "Gallery", href: "#gallery"},
    { title: "Contact", href: "#contact"}, // menuju ke Hero (khusus tombol "Contact Me")
  ] 

  useEffect( () => {
    const handleScroll = () => {
      // jika scroll lebih dari 10px, set isScrolled jadi True
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Animasi utk menu mobile (slide-in)
  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: {type: "spring", stiffness: 300, damping: 30}
    },
    closed: {
      x: "100%",
      transition: {type: "spring", stiffness: 300, damping: 30}
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-sky-900/80 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
      }`}
      initial={{ y:-100}}
      animate={{ y: 0}}
      transition={{ duration: .5}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo or Name */}
          <a href="#home" className='text-3xl font-extrabold text-slate-50 hover:text-sky-300 transition-colors'>
            Fewen
          </a>

          {/* nav di Desktop */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                className='text-lg font-medium text-slate-200 hover:text-sky-300 transition-colors duration-300'
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Hamburger menu di mobile  */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className='text-slate-200 hover:text-sky-300'>
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      <motion.div
        className='md:hidden absolute top-20 left-0 right-0 bg-sky-800 shadow-lg overflow-hidden'
        initial= {false}
        animate= {isOpen ? "open" : "closed"}
        transition= {mobileMenuVariants}
      >
        <div className="flex flex-col px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              onClick={toggleMenu} //tutup menu saat link di klik
              className='text-lg font-medium text-slate-100 hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-300'
            >
              {link.title}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar