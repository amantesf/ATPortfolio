export default function Orbs() {
  return (
    <>
      <div
        className="fixed rounded-full pointer-events-none z-0 opacity-[0.18]"
        style={{
          width: 600, height: 600,
          background: '#00D4FF',
          filter: 'blur(120px)',
          top: -200, right: -150,
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0 opacity-[0.18]"
        style={{
          width: 400, height: 400,
          background: '#00FF94',
          filter: 'blur(120px)',
          bottom: '20%', left: -100,
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0 opacity-[0.18]"
        style={{
          width: 300, height: 300,
          background: '#FF6B35',
          filter: 'blur(120px)',
          top: '60%', right: '10%',
        }}
      />
    </>
  )
}
