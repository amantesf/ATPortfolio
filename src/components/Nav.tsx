import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['Skills', 'Projects', 'Experience', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 140) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <a
        href="#"
        className="font-syne font-black text-accent text-lg tracking-widest uppercase no-underline hover:opacity-80 transition-opacity"
      >
        AT.
      </a>
      <ul className="flex gap-9 list-none">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`font-mono text-[0.72rem] tracking-widest uppercase no-underline transition-colors duration-200 ${
                active === link.toLowerCase() ? 'text-accent' : 'text-dim hover:text-accent'
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
