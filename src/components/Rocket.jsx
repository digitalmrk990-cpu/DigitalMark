import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, animate } from 'framer-motion'

function angleDeg(a, b) {
  return (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI
}

function randomEdge() {
  if (typeof window === 'undefined') return { x: 0, y: 0 }
  const edge = Math.floor(Math.random() * 4)
  const w = window.innerWidth
  const h = window.innerHeight
  const rx = Math.random() * w
  const ry = Math.random() * h
  switch (edge) {
    case 0: return { x: rx, y: -120 }
    case 1: return { x: w + 120, y: ry }
    case 2: return { x: rx, y: h + 120 }
    default: return { x: -120, y: ry }
  }
}

function randomFlight() {
  const a = randomEdge()
  const b = randomEdge()
  const d = Math.hypot(b.x - a.x, b.y - a.y)
  return {
    from: a,
    to: b,
    angle: angleDeg(a, b),
    duration: Math.max(5, Math.min(14, d / 90)),
  }
}

export default function Rocket() {
  const posRef = useRef({ x: 0, y: 0 })
  const flightKey = useRef(0)
  const launchKey = useRef(0)
  const dragStart = useRef(null)
  const grabOffset = useRef({ x: 0, y: 0 })
  const ctrlRef = useRef(null)
  const mounted = useRef(false)

  const [phase, setPhase] = useState('flying')
  const [flight, setFlight] = useState(() => randomFlight())
  const [aim, setAim] = useState(null)
  const [grabPos, setGrabPos] = useState({ x: 0, y: 0 })
  const [launch, setLaunch] = useState(null)

  // track position during any animation via the shared motion div
  const handleUpdate = useCallback((latest) => {
    posRef.current = { x: latest.x, y: latest.y }
  }, [])

  const nextFlight = useCallback(() => {
    if (!mounted.current) return
    flightKey.current += 1
    setFlight(randomFlight())
    setPhase('flying')
    setLaunch(null)
    setAim(null)
  }, [])

  // stop current animation and switch to grabbed
  const grab = useCallback((e) => {
    e.preventDefault()
    if (ctrlRef.current) {
      ctrlRef.current.stop()
      ctrlRef.current = null
    }
    const rect = e.currentTarget.getBoundingClientRect()
    const px = posRef.current.x
    const py = posRef.current.y
    grabOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    dragStart.current = { x: e.clientX, y: e.clientY }
    setGrabPos({ x: e.clientX - grabOffset.current.x, y: e.clientY - grabOffset.current.y })
    setAim({ x: e.clientX, y: e.clientY })
    setPhase('grabbed')
  }, [])

  // grab drag + release
  useEffect(() => {
    if (phase !== 'grabbed') return

    const move = (e) => {
      setAim({ x: e.clientX, y: e.clientY })
      setGrabPos({
        x: e.clientX - grabOffset.current.x,
        y: e.clientY - grabOffset.current.y,
      })
    }

    const up = (e) => {
      const start = dragStart.current
      if (!start) { setPhase('flying'); return }

      const dx = e.clientX - start.x
      const dy = e.clientY - start.y
      const dist = Math.hypot(dx, dy)

      if (dist < 30) { setPhase('flying'); return }

      const mult = Math.max(4, Math.min(12, dist / 40))
      const toX = start.x + dx * mult
      const toY = start.y + dy * mult

      setLaunch({
        key: launchKey.current++,
        fromX: start.x,
        fromY: start.y,
        toX,
        toY,
        angle: angleDeg(start, { x: toX, y: toY }),
        duration: Math.max(1.5, dist * mult / 400),
      })
      setPhase('launching')
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
  }, [phase])

  // launch complete → resume flying
  const handleLaunchDone = useCallback(() => {
    setTimeout(nextFlight, 1000 + Math.random() * 2000)
  }, [nextFlight])

  useEffect(() => { mounted.current = true }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
      <style>{`
        @keyframes flicker {
          0% { transform: scaleX(0.8) scaleY(0.9); opacity: 0.5; }
          100% { transform: scaleX(1.3) scaleY(1.1); opacity: 1; }
        }
      `}</style>

      {/* aim line */}
      {phase === 'grabbed' && aim && dragStart.current && (
        <svg style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
          <line x1={dragStart.current.x} y1={dragStart.current.y} x2={aim.x} y2={aim.y}
            stroke="#FF6500" strokeWidth={2} strokeDasharray="6 4" opacity={0.6} />
          <circle cx={dragStart.current.x} cy={dragStart.current.y} r={4} fill="#FF6500" opacity={0.8} />
          <circle cx={aim.x} cy={aim.y} r={3} fill="#FF6500" opacity={0.4} />
        </svg>
      )}

      {/* FLYING — auto cross-screen */}
      {phase === 'flying' && (
        <motion.div
          key={`flight-${flightKey.current}`}
          initial={{ x: flight.from.x, y: flight.from.y, opacity: 0, scale: 0.3 }}
          animate={{ x: flight.to.x, y: flight.to.y, opacity: [0, 1, 1, 0], scale: [0.3, 1, 1, 0.3] }}
          transition={{ duration: flight.duration, ease: 'linear', times: [0, 0.04, 0.85, 1] }}
          onUpdate={handleUpdate}
          onAnimationComplete={nextFlight}
          onPointerDown={grab}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            position: 'fixed', left: 0, top: 0,
            rotate: flight.angle + 90,
            width: 50, pointerEvents: 'auto',
            cursor: 'grab', zIndex: 2,
          }}
          whileHover={{ scale: 1.08 }}
        >
          <Flame /><Body /><Fins />
        </motion.div>
      )}

      {/* GRABBED — follow cursor */}
      {phase === 'grabbed' && (
        <motion.div
          style={{
            position: 'fixed', left: grabPos.x, top: grabPos.y,
            width: 50, pointerEvents: 'auto',
            cursor: 'grabbing', zIndex: 2,
            rotate: -90,
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <div style={{
            position: 'absolute', inset: -30,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,101,0,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <Flame /><Body /><Fins />
        </motion.div>
      )}

      {/* LAUNCHING — fly in aimed direction */}
      {phase === 'launching' && launch && (
        <motion.div
          key={`launch-${launch.key}`}
          initial={{ x: launch.fromX, y: launch.fromY, opacity: 1, scale: 1 }}
          animate={{ x: launch.toX, y: launch.toY, opacity: [1, 1, 0], scale: [1, 1.15, 0.3] }}
          transition={{ duration: launch.duration, ease: [0.17, 0.67, 0.29, 1.2], times: [0, 0.7, 1] }}
          onUpdate={handleUpdate}
          onAnimationComplete={handleLaunchDone}
          style={{
            position: 'fixed', left: 0, top: 0,
            rotate: launch.angle + 90,
            width: 50, pointerEvents: 'none', zIndex: 2,
          }}
        >
          <Flame /><Body /><Fins />
        </motion.div>
      )}
    </div>
  )
}

function Flame() {
  return (
    <div className="mx-auto" style={{
      width: 22, height: 36,
      borderRadius: '50%',
      background: 'radial-gradient(circle, #fff 0%, #ffd000 30%, #ff6500 55%, transparent 70%)',
      filter: 'blur(5px)',
      animation: 'flicker .15s infinite alternate',
      marginBottom: -6,
    }} />
  )
}

function Body() {
  return (
    <div style={{
      width: 50, height: 80,
      borderRadius: '50% 50% 30% 30%',
      background: 'linear-gradient(180deg, #FF6500 0%, #CC5100 100%)',
      border: '2px solid #1F1A17',
      display: 'flex', justifyContent: 'center', paddingTop: 16,
    }}>
      <div style={{
        width: 22, height: 22,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #fff, #1F1A17)',
        border: '2px solid #1F1A17',
      }} />
    </div>
  )
}

function Fins() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -3, padding: '0 4px' }}>
      <div style={{
        width: 14, height: 22, background: '#1F1A17',
        borderRadius: '0 0 0 8px',
        clipPath: 'polygon(0 0, 100% 0, 40% 100%, 0 100%)',
        transform: 'skewX(-8deg)',
      }} />
      <div style={{
        width: 14, height: 22, background: '#1F1A17',
        borderRadius: '0 0 8px 0',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 60% 100%)',
        transform: 'skewX(8deg)',
      }} />
    </div>
  )
}
