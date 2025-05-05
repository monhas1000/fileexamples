import type React from "react"
import Link from "next/link"
import { getAllCategories } from "@/lib/files"
import { cn } from "@/lib/utils"
import {
  FileVideo,
  FileAudio,
  FileText,
  ImageIcon,
  Type,
  BookOpen,
  Code,
  Archive,
  Package,
  FileSpreadsheet,
  FileIcon as FilePresentation,
  Database,
  Settings,
  HardDrive,
  Server,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<any>> = {
  video: FileVideo,
  audio: FileAudio,
  document: FileText,
  image: ImageIcon,
  font: Type,
  ebook: BookOpen,
  code: Code,
  archive: Archive,
  executable: Package,
  spreadsheet: FileSpreadsheet,
  presentation: FilePresentation,
  database: Database,
  config: Settings,
  disk: HardDrive,
  vm: Server,
}

const colorMap: Record<string, string> = {
  video: "from-rose-500 to-pink-600",
  audio: "from-amber-500 to-orange-600",
  document: "from-blue-500 to-indigo-600",
  image: "from-purple-500 to-violet-600",
  font: "from-emerald-500 to-teal-600",
  ebook: "from-cyan-500 to-sky-600",
  code: "from-slate-500 to-slate-600",
  archive: "from-green-500 to-emerald-600",
  executable: "from-red-500 to-rose-600",
  spreadsheet: "from-blue-400 to-blue-600",
  presentation: "from-orange-400 to-orange-600",
  database: "from-indigo-500 to-violet-600",
  config: "from-gray-500 to-gray-600",
  disk: "from-teal-500 to-green-600",
  vm: "from-purple-400 to-indigo-600",
}

const bgLightMap: Record<string, string> = {
  video: "bg-rose-50",
  audio: "bg-amber-50",
  document: "bg-blue-50",
  image: "bg-purple-50",
  font: "bg-emerald-50",
  ebook: "bg-cyan-50",
  code: "bg-slate-50",
  archive: "bg-green-50",
  executable: "bg-red-50",
  spreadsheet: "bg-blue-50",
  presentation: "bg-orange-50",
  database: "bg-indigo-50",
  config: "bg-gray-50",
  disk: "bg-teal-50",
  vm: "bg-purple-50",
}

const bgDarkMap: Record<string, string> = {
  video: "dark:bg-rose-950",
  audio: "dark:bg-amber-950",
  document: "dark:bg-blue-950",
  image: "dark:bg-purple-950",
  font: "dark:bg-emerald-950",
  ebook: "dark:bg-cyan-950",
  code: "dark:bg-slate-900",
  archive: "dark:bg-green-950",
  executable: "dark:bg-red-950",
  spreadsheet: "dark:bg-blue-950",
  presentation: "dark:bg-orange-950",
  database: "dark:bg-indigo-950",
  config: "dark:bg-gray-900",
  disk: "dark:bg-teal-950",
  vm: "dark:bg-purple-950",
}

const textLightMap: Record<string, string> = {
  video: "text-rose-600",
  audio: "text-amber-600",
  document: "text-blue-600",
  image: "text-purple-600",
  font: "text-emerald-600",
  ebook: "text-cyan-600",
  code: "text-slate-600",
  archive: "text-green-600",
  executable: "text-red-600",
  spreadsheet: "text-blue-600",
  presentation: "text-orange-600",
  database: "text-indigo-600",
  config: "text-gray-600",
  disk: "text-teal-600",
  vm: "text-purple-600",
}

const textDarkMap: Record<string, string> = {
  video: "dark:text-rose-400",
  audio: "dark:text-amber-400",
  document: "dark:text-blue-400",
  image: "dark:text-purple-400",
  font: "dark:text-emerald-400",
  ebook: "dark:text-cyan-400",
  code: "dark:text-slate-400",
  archive: "dark:text-green-400",
  executable: "dark:text-red-400",
  spreadsheet: "dark:text-blue-400",
  presentation: "dark:text-orange-400",
  database: "dark:text-indigo-400",
  config: "dark:text-gray-400",
  disk: "dark:text-teal-400",
  vm: "dark:text-purple-400",
}

export default function CategoryGrid() {
  const categories = getAllCategories()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => {
        const Icon = iconMap[category.id] || FileText

        return (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className={cn(
              "flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300",
              bgLightMap[category.id] || "bg-slate-50",
              bgDarkMap[category.id] || "dark:bg-slate-900",
              "hover:shadow-md hover:-translate-y-1",
            )}
          >
            <div
              className={cn(
                "p-3 rounded-full bg-gradient-to-br mb-4",
                colorMap[category.id] || "from-slate-500 to-slate-600",
                "shadow-sm",
              )}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                textLightMap[category.id] || "text-slate-600",
                textDarkMap[category.id] || "dark:text-slate-400",
              )}
            >
              {category.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
