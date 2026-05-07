import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { projects } from '../data'

function Terminal({ lines }: { lines: string[] }) {
  return (
    <div className="bg-surface2 border border-border rounded h-[180px] flex items-center justify-center overflow-hidden">
      <div className="font-mono text-[0.72rem] text-accent text-center leading-loose opacity-80">
        {lines.map((line, i) => (
          <div key={i} style={{ color: i === lines.length - 1 ? '#00FF94' : undefined }}>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()
  const [hovered, setHovered] = useState<string | null>(null)

  const featured = projects.find(p => p.featured)!
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative z-10 max-w-5xl mx-auto px-14 py-28">
      <div className="flex items-center gap-3 font-mono text-accent text-[0.68rem] tracking-[0.2em] uppercase mb-10">
        <span className="w-6 h-px bg-accent inline-block" />
        Projects
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5"
      >
        {/* Featured */}
        <motion.div
          whileHover={{ y: -2 }}
          onHoverStart={() => setHovered(featured.id)}
          onHoverEnd={() => setHovered(null)}
          className="relative bg-surface border border-border rounded overflow-hidden grid grid-cols-2 gap-10 p-10 group cursor-default"
        >
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered === featured.id ? 1 : 0 }}
            style={{ transformOrigin: 'left' }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 border border-accent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />
          <div>
            <div className="font-mono text-accent3 text-[0.65rem] tracking-[0.15em] uppercase mb-3">
              {featured.label}
            </div>
            <div className="font-syne font-bold text-2xl text-white mb-3">{featured.title}</div>
            <p className="text-dim text-[0.9rem] font-light leading-relaxed mb-5">{featured.desc}</p>
            <div className="flex flex-wrap gap-2">
              {featured.tech.map(t => (
                <span key={t} className="font-mono text-[0.65rem] text-accent2 border border-accent2/20 bg-accent2/5 px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {featured.terminalLines && <Terminal lines={featured.terminalLines} />}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -2 }}
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative bg-surface border border-border rounded p-8 overflow-hidden group cursor-default"
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered === project.id ? 1 : 0 }}
                style={{ transformOrigin: 'left' }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 border border-accent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
              <div className="font-mono text-[0.65rem] text-dimmer mb-3">{project.number}</div>
              <div className="font-syne font-bold text-xl text-white mb-2">{project.title}</div>
              <p className="text-dim text-[0.88rem] font-light leading-relaxed mb-5">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-[0.65rem] text-accent2 border border-accent2/20 bg-accent2/5 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}