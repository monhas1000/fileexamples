"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
      <h2 className="text-xl font-semibold mb-4">Something went wrong!</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        There was an error generating the ZIP file. Please try again.
      </p>
      <Button onClick={reset} variant="outline">
        Try again
      </Button>
    </div>
  )
}
