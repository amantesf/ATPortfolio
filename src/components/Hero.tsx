import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const badges = [
  { label: "Amazon Future Engineer '25", highlight: true },
  { label: 'Machine Learning', highlight: false },
  { label: 'Google Data Analytics Certified', highlight: false },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center pt-36 pb-20 px-[10vw]"
    >
      <div className="flex items-center gap-20 w-full">
        {/* Text */}
        <div className="flex-1">
          <motion.div
            {...fadeUp(0.2)}
            className="font-mono text-accent2 text-[0.75rem] tracking-[0.2em] uppercase mb-6"
          >
            Georgetown University · CS '29
          </motion.div>

          <motion.h1
            {...fadeUp(0.35)}
            className="font-syne font-black leading-[1.0] tracking-tight mb-3"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            Amanuel
            <br />
            <span className="text-stroke-accent">Tesfaye</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            className="font-mono text-dim text-[0.88rem] tracking-[0.04em] max-w-lg mb-10"
          >
            CS @ Georgetown · Incoming SDE Intern @ Amazon · ML & Systems
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="flex gap-3 flex-wrap mb-12">
            {badges.map(b => (
              <span
                key={b.label}
                className={`font-mono text-[0.68rem] tracking-[0.08em] uppercase px-3 py-1.5 rounded-sm border ${
                  b.highlight
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-border text-dim bg-surface'
                }`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.8)} className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="font-mono text-[0.75rem] tracking-widest uppercase px-7 py-3.5 bg-accent text-bg rounded-sm hover:bg-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-250 no-underline"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="font-mono text-[0.75rem] tracking-widest uppercase px-7 py-3.5 border border-border text-dim rounded-sm hover:border-accent hover:text-accent transition-all duration-250 no-underline"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="relative flex-shrink-0 w-[320px] h-[320px]"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-[-8px] rounded-full border border-accent/20 z-0"
          />
          {/* Second outer ring */}
          <motion.div
            animate={{ opacity: [0.1, 0.35, 0.1], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute inset-[-18px] rounded-full border border-accent/10 z-0"
          />
          <img
            src="/photo.png"
            alt="Amanuel Tesfaye"
            className="w-full h-full object-cover rounded-full relative z-10 border-2 border-accent/25"
            style={{
              objectPosition: 'center 15%',
              filter: 'grayscale(15%) contrast(1.05) brightness(0.95)',
              boxShadow: '0 0 40px rgba(0,212,255,0.12)',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.1)}
        className="absolute bottom-12 left-[10vw] flex items-center gap-3"
      >
        <div className="w-10 h-px bg-dimmer" />
        <span className="font-mono text-[0.62rem] text-dimmer tracking-[0.15em] uppercase">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}
