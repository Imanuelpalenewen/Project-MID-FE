import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = ({ profile, socials }) => {

  const urlToGmail = "https://mail.google.com/mail/?view=cm&fs=1&to="

  const getSocialIcon = (name) => {
      if (name === "GitHub") return <FaGithub />
      if (name === "LinkedIn") return <FaLinkedin />
      if (name === "Instagram") return <FaInstagram />
      return null
    }

  return (
    <footer id="contact" className="bg-sky-950 text-slate-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-slate-50 mb-2">
              Let's Connect
            </h3>
            <a 
              href={`${urlToGmail}${profile.email}`}
              className="text-lg text-sky-300 hover:text-sky-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              id="contact"
            >
              {profile.email}
            </a>
          </div>
  
          <div className="flex space-x-6 mb-8 md:mb-0">
            {socials && socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-300 hover:scale-110 transform transition-all duration-300"
                aria-label={social.name}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        <hr className="border-sky-800 my-8" />
        
        <div className="text-center">
          <p className="text-slate-400">
            &copy; 2025. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Build by <a href={socials[0].url} className='hover:text-slate-300'>Fewen</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer