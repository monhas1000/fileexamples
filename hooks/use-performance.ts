"use client"

import { useState, useEffect } from "react"

export function usePerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Check if it's a low-end device (rough estimate based on hardware concurrency)
    const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4

    setIsLowPerformance(isMobile || isLowEnd)
  }, [])

  return { isLowPerformance }
}
