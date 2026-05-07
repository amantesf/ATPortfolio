export const skills = {
  languages: ['Python', 'Java', 'C++', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  frameworks: ['React.js', 'Node.js', 'Pandas', 'NumPy'],
  tools: ['Git', 'VS Code', 'Linux', 'Tableau', 'Excel', 'Arduino'],
}

export interface Project {
  id: string
  number?: string
  label?: string
  title: string
  desc: string
  tech: string[]
  featured?: boolean
  terminalLines?: string[]
}

export const projects: Project[] = [
  {
    id: 'rfid',
    featured: true,
    label: '★ Hardware · Embedded Systems',
    title: 'RFID Access Control System',
    desc: 'Arduino system with RFID reader, RGB LED, and LCD — authenticates cards and displays Access Granted/Denied in real time.',
    tech: ['Arduino', 'C++', 'RFID', 'Embedded Systems'],
    terminalLines: [
      'ACCESS CONTROL v1.0',
      '───────────────────',
      'CARD DETECTED ···',
      'AUTHENTICATING ···',
      '✓ ACCESS GRANTED',
    ],
  },
  {
    id: 'nba',
    number: '01 · Python',
    title: 'NBA Live Scores',
    desc: 'Retrieves and displays live NBA game data — matchups, scores, and status — with clean formatted output.',
    tech: ['Python', 'APIs'],
  },
  {
    id: 'pingpong',
    number: '02 · Python',
    title: 'Ping Pong Game',
    desc: 'Real-time paddle controls, ball physics, collision detection, and scoring with automatic round resets.',
    tech: ['Python', 'Game Physics'],
  },
  {
    id: 'hangman',
    number: '03 · Python',
    title: 'Hangman',
    desc: 'CLI game with randomized words, attempt tracking, input validation, and duplicate-guess handling.',
    tech: ['Python', 'CLI'],
  },
  {
    id: 'weather',
    number: '04 · Web',
    title: 'Weather App',
    desc: 'Clean weather frontend with responsive layout, separating content and presentation across HTML and CSS.',
    tech: ['HTML', 'CSS'],
  },
]

export interface TimelineItem {
  id: string
  date: string
  title: string
  org: string
  bullets?: string[]
}

export const timeline: TimelineItem[] = [
  {
    id: 'amazon',
    date: 'Summer 2026 · Upcoming',
    title: 'SDE Intern',
    org: 'Amazon',
    bullets: ["Amazon Future Engineer '26"],
  },
  {
    id: 'hoyalytics',
    date: 'Sep 2025 – Nov 2025',
    title: 'Data Analytics Member',
    org: 'Hoyalytics · Georgetown University',
    bullets: ['SQL, Tableau, Python · real-world datasets'],
  },
  {
    id: 'ffa',
    date: 'Jan 2025 – Feb 2025',
    title: 'Intern',
    org: 'Future Founders of America',
    bullets: ['Business plan, pricing model, feasibility analysis'],
  },
  {
    id: 'google',
    date: 'Sep 2024 – May 2025',
    title: 'Google Data Analytics Certificate',
    org: 'Howard University · Coursera',
    bullets: ['SQL · Tableau · Excel'],
  },
  {
    id: 'georgetown',
    date: '2025 – 2029',
    title: 'B.S. Computer Science',
    org: 'Georgetown University · Washington, D.C.',
    bullets: ['CS I & II · Math Methods for Computer Science'],
  },
]
