import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { timeline } from '../data'

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="relative z-10 max-w-5xl mx-auto px-14 py-28">
      <div className="flex items-center gap-3 font-mono text-accent text-[0.68rem] tracking-[0.2em] uppercase mb-10">
        <span className="w-6 h-px bg-accent inline-block" />
        Experience & Education
      </div>

      <div ref={ref} className="relative pl-8 timeline-line">
        {timeline.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative mb-12 pb-12 ${
              i < timeline.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
              className="absolute left-[-39px] top-[6px] w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg shadow-[0_0_0_1px_#00D4FF]"
            />

            <div className="font-mono text-[0.68rem] text-dimmer tracking-[0.1em] uppercase mb-2">
              {item.date}
            </div>
            <div className="font-syne font-bold text-xl text-white mb-1">{item.title}</div>
            <div className="font-mono text-[0.78rem] text-accent mb-3">{item.org}</div>
            {item.bullets && (
              <ul className="space-y-1">
                {item.bullets.map(b => (
                  <li key={b} className="relative text-dim text-[0.9rem] font-light pl-4 list-none">
                    <span className="absolute left-0 text-accent">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
