"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false)

  useEffect(() => {
    // Check for low performance devices
    const checkPerformance = () => {
      // Check if it's a mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Check if it's a low-end device (rough estimate based on hardware concurrency)
      const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4

      return isMobile || isLowEnd
    }

    setIsLowPerfDevice(checkPerformance())

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas dimensions - use smaller height for better performance
    const resizeCanvas = () => {
      const scale = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale
      ctx.scale(scale, scale)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    let resizeTimeout: NodeJS.Timeout
    window.addEventListener("resize", () => {
      // Debounce resize events
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 200)
    })

    // Create particles - reduce count for better performance
    const particlesArray: Particle[] = []
    const numberOfParticles = isLowPerfDevice
      ? Math.min(40, Math.floor(window.innerWidth / 40))
      : Math.min(80, Math.floor(window.innerWidth / 20))
    const connectDistance = isLowPerfDevice ? 150 : 180

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.3 // Slower movement for better performance
        this.speedY = (Math.random() - 0.5) * 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > window.innerWidth) this.x = 0
        else if (this.x < 0) this.x = window.innerWidth
        if (this.y > window.innerHeight) this.y = 0
        else if (this.y < 0) this.y = window.innerHeight
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(16, 185, 129, 0.6)"
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    // Optimize connection calculations
    function connect() {
      // Use a grid-based approach to reduce calculations
      const gridSize = connectDistance
      const grid: Record<string, Particle[]> = {}

      // Place particles in grid cells
      particlesArray.forEach((particle) => {
        const cellX = Math.floor(particle.x / gridSize)
        const cellY = Math.floor(particle.y / gridSize)
        const cellKey = `${cellX},${cellY}`

        if (!grid[cellKey]) grid[cellKey] = []
        grid[cellKey].push(particle)
      })

      // Check connections only with particles in nearby cells
      particlesArray.forEach((particle) => {
        const cellX = Math.floor(particle.x / gridSize)
        const cellY = Math.floor(particle.y / gridSize)

        // Check 9 surrounding cells (including current cell)
        for (let x = cellX - 1; x <= cellX + 1; x++) {
          for (let y = cellY - 1; y <= cellY + 1; y++) {
            const cellKey = `${x},${y}`
            if (!grid[cellKey]) continue

            grid[cellKey].forEach((otherParticle) => {
              if (particle === otherParticle) return

              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < connectDistance) {
                const opacity = 1 - distance / connectDistance
                ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.4})`
                ctx.lineWidth = 1.2
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.stroke()
              }
            })
          }
        }
      })
    }

    let animationFrameId: number
    let lastTime = 0
    const fps = isLowPerfDevice ? 20 : 30 // Lower FPS for better performance
    const fpsInterval = 1000 / fps

    function animate(timestamp: number) {
      // Throttle frame rate
      const elapsed = timestamp - lastTime

      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval)

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update()
          particlesArray[i].draw()
        }

        connect()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Check if page is visible to pause animation when not in view
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else {
        lastTime = 0
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    init()
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isLowPerfDevice])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: isLowPerfDevice ? 0.4 : 0.5 }}
    />
  )
}
