"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, FileSearch } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function NotFound() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted state after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Force dark mode
    document.documentElement.classList.add("dark")
  }, [])

  // Always show dark theme for this page
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-slate-950">
      <div className="mb-8 p-6 rounded-full bg-slate-800">
        <FileSearch className="h-16 w-16 text-emerald-500" />
      </div>

      <h1 className="text-6xl font-bold text-slate-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-300 mb-2">Page Not Found</h2>

      <p className="text-slate-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved. Perhaps you were looking for one of our sample
        files?
      </p>

      <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Link>
      </Button>
    </div>
  )
}
