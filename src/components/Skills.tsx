import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { skills } from '../data'

const groups = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks & Libraries', items: skills.frameworks },
  { label: 'Tools & Platforms', items: skills.tools },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="relative z-10 max-w-5xl mx-auto px-14 py-28">
      <div className="flex items-center gap-3 font-mono text-accent text-[0.68rem] tracking-[0.2em] uppercase mb-10">
        <span className="w-6 h-px bg-accent inline-block" />
        Technical Skills
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden"
      >
        {groups.map((group, gi) => (
          <div
            key={group.label}
            className="bg-surface hover:bg-surface2 transition-colors duration-250 p-8"
          >
            <div className="font-mono text-accent text-[0.68rem] tracking-[0.15em] uppercase mb-5">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: gi * 0.1 + ii * 0.05, duration: 0.3 }}
                  whileHover={{ color: '#00D4FF', borderColor: '#00D4FF' }}
                  className="font-mono text-[0.72rem] text-dim px-2.5 py-1 bg-white/[0.04] border border-border rounded-sm cursor-default tracking-[0.04em] transition-colors duration-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
