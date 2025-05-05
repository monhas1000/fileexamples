"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
import { useTheme } from "next-themes"
import {
  Search,
  ArrowRight,
  FileText,
  FileVideo,
  FileImage,
  FileSpreadsheet,
  FileCode,
  FileAudio,
  Archive,
} from "lucide-react"

// Example searches to show in the dropdown - organized by category
const exampleSearches = [
  // Documents
  {
    icon: <FileText className="h-4 w-4 text-blue-500" />,
    query: "pdf document",
    description: "Find PDF documents",
  },
  {
    icon: <FileSpreadsheet className="h-4 w-4 text-green-500" />,
    query: "excel spreadsheet",
    description: "Find Excel spreadsheets",
  },
  {
    icon: <FileText className="h-4 w-4 text-orange-500" />,
    query: "presentation",
    description: "Find PowerPoint presentations",
  },

  // Media
  {
    icon: <FileVideo className="h-4 w-4 text-rose-500" />,
    query: "mp4 video",
    description: "Search for MP4 video files",
  },
  {
    icon: <FileImage className="h-4 w-4 text-purple-500" />,
    query: "image png",
    description: "Search for PNG images",
  },
  {
    icon: <FileAudio className="h-4 w-4 text-amber-500" />,
    query: "audio mp3",
    description: "Find MP3 audio files",
  },

  // Other
  {
    icon: <FileCode className="h-4 w-4 text-slate-500" />,
    query: "javascript code",
    description: "Find JavaScript code files",
  },
  {
    icon: <Archive className="h-4 w-4 text-emerald-500" />,
    query: "zip archive",
    description: "Search for ZIP archives",
  },
]

interface SearchBarProps {
  placeholder?: string
  className?: string
  variant?: "default" | "hero"
}

export function SearchBar({ placeholder = "Search files...", className = "", variant = "default" }: SearchBarProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted state after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine the current theme
  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "dark"
  const isDarkTheme = currentTheme === "dark"

  // Set up portal container
  useEffect(() => {
    setPortalContainer(document.body)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsDropdownOpen(false)
    }
  }

  const handleExampleClick = (query: string) => {
    setSearchQuery(query)
    router.push(`/search?q=${encodeURIComponent(query)}`)
    setIsDropdownOpen(false)
  }

  // Update dropdown position when it opens or when window resizes
  useEffect(() => {
    const updatePosition = () => {
      if (searchRef.current && isDropdownOpen) {
        const rect = searchRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
        })
      }
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    window.addEventListener("scroll", updatePosition)

    return () => {
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", updatePosition)
    }
  }, [isDropdownOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        !event.target?.closest(".search-dropdown")
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Get dropdown background color based on theme and variant
  const getDropdownBackground = () => {
    if (variant === "hero") {
      return isDarkTheme
        ? "rgba(15, 23, 42, 0.95)" // dark slate-900 with opacity
        : "rgba(255, 255, 255, 0.95)" // white with opacity
    } else {
      return isDarkTheme ? "#1e293b" : "#ffffff" // slate-800 for dark, white for light
    }
  }

  return (
    <div ref={searchRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className={variant === "hero" ? "h-5 w-5 text-slate-400" : "h-4 w-4 text-slate-500"} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={placeholder}
            className={
              variant === "hero"
                ? "w-full pl-10 pr-4 py-3 rounded-full border border-emerald-400/30 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-emerald-100"
                : "w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm"
            }
            aria-label="Search files"
            aria-expanded={isDropdownOpen}
          />
        </div>
      </form>

      {/* Example searches dropdown - rendered in a portal to avoid clipping */}
      {isDropdownOpen &&
        portalContainer &&
        mounted &&
        createPortal(
          <div
            className={`search-dropdown fixed shadow-xl rounded-md border ${
              isDarkTheme ? "border-slate-700" : "border-slate-200"
            } py-1 overflow-y-auto z-[9999]`}
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
              maxHeight: "400px",
              background: getDropdownBackground(),
            }}
          >
            <div className={`px-3 py-2 text-xs font-medium ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
              Try these example searches:
            </div>

            {/* Document examples */}
            <div className={`border-b ${isDarkTheme ? "border-slate-700" : "border-slate-200"} pb-2 mb-2`}>
              <div className={`px-3 py-1 text-xs font-semibold ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                Documents
              </div>
              <ul>
                {exampleSearches.slice(0, 3).map((example, index) => (
                  <li key={`doc-${index}`}>
                    <button
                      onClick={() => handleExampleClick(example.query)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left ${
                        isDarkTheme ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center">
                        {example.icon}
                        <div className="ml-2">
                          <span className={`font-medium ${isDarkTheme ? "text-slate-100" : "text-slate-900"}`}>
                            {example.query}
                          </span>
                          <p className={`text-xs ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                            {example.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media examples */}
            <div className={`border-b ${isDarkTheme ? "border-slate-700" : "border-slate-200"} pb-2 mb-2`}>
              <div className={`px-3 py-1 text-xs font-semibold ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                Media
              </div>
              <ul>
                {exampleSearches.slice(3, 6).map((example, index) => (
                  <li key={`media-${index}`}>
                    <button
                      onClick={() => handleExampleClick(example.query)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left ${
                        isDarkTheme ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center">
                        {example.icon}
                        <div className="ml-2">
                          <span className={`font-medium ${isDarkTheme ? "text-slate-100" : "text-slate-900"}`}>
                            {example.query}
                          </span>
                          <p className={`text-xs ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                            {example.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other examples */}
            <div>
              <div className={`px-3 py-1 text-xs font-semibold ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                Other
              </div>
              <ul>
                {exampleSearches.slice(6).map((example, index) => (
                  <li key={`other-${index}`}>
                    <button
                      onClick={() => handleExampleClick(example.query)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left ${
                        isDarkTheme ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center">
                        {example.icon}
                        <div className="ml-2">
                          <span className={`font-medium ${isDarkTheme ? "text-slate-100" : "text-slate-900"}`}>
                            {example.query}
                          </span>
                          <p className={`text-xs ${isDarkTheme ? "text-slate-400" : "text-slate-500"}`}>
                            {example.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          portalContainer,
        )}
    </div>
  )
}
