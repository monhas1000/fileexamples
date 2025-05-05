"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { Archive, Menu, X, ChevronDown, FileText, FileVideo, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { getAllCategories } from "@/lib/files"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Group categories for dropdown menus
const categoryGroups = [
  {
    name: "Documents",
    icon: FileText,
    categories: ["document", "spreadsheet", "presentation", "ebook"],
  },
  {
    name: "Media",
    icon: FileVideo,
    categories: ["image", "audio", "video", "font"],
  },
  {
    name: "Development",
    icon: Code,
    categories: ["code", "database", "config", "executable"],
  },
  {
    name: "System",
    icon: Archive,
    categories: ["archive", "disk", "vm"],
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const allCategories = getAllCategories()

  // Map category IDs to their names
  const categoryMap = Object.fromEntries(allCategories.map((cat) => [cat.id, cat.name]))

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-xl bg-white/75 dark:bg-slate-950/75 border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
              <Archive className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              File Examples
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {categoryGroups.map((group) => (
              <DropdownMenu key={group.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                      "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800",
                    )}
                  >
                    {group.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {group.categories.map((categoryId) => (
                    <DropdownMenuItem key={categoryId} asChild>
                      <Link
                        href={`/category/${categoryId}`}
                        className={cn(
                          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          pathname === `/category/${categoryId}`
                            ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800",
                        )}
                      >
                        {categoryMap[categoryId]}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile category groups */}
            {categoryGroups.map((group) => (
              <div key={group.name} className="mt-2">
                <div className="px-3 py-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{group.name}</div>
                {group.categories.map((categoryId) => (
                  <Link
                    key={categoryId}
                    href={`/category/${categoryId}`}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md ml-2",
                      pathname === `/category/${categoryId}`
                        ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {categoryMap[categoryId]}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
