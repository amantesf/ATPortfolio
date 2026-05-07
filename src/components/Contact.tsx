import { motion } from 'framer-motion'
import { useInView } from './useInView'

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.98 1.98 1.98 0 0 1 1.98-1.98 1.98 1.98 0 0 1 1.98 1.98 1.98 1.98 0 0 1-1.98 1.98zm1.957 13.019H3.38V9h3.914v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const contacts = [
  { icon: <EmailIcon />, href: 'mailto:at1607@georgetown.edu', label: 'Email' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/amantesf', label: 'LinkedIn' },
  { icon: <GitHubIcon />, href: 'https://github.com/amantesf', label: 'GitHub' },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="relative z-10 max-w-5xl mx-auto px-14 py-28 text-center">
      <div className="flex items-center justify-center gap-3 font-mono text-accent text-[0.68rem] tracking-[0.2em] uppercase mb-10">
        <span className="w-6 h-px bg-accent inline-block" />
        Contact
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-5 flex-wrap mt-8"
      >
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            title={c.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{
              scale: 1.1,
              color: '#00D4FF',
              borderColor: '#00D4FF',
              boxShadow: '0 0 18px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)',
            }}
            className="flex items-center justify-center w-16 h-16 rounded-full border border-border bg-surface text-dimmer no-underline transition-colors duration-300"
          >
            {c.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
