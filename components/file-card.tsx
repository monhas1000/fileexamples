import {
  FileVideo,
  FileAudio,
  FileText,
  ImageIcon,
  Type,
  BookOpen,
  Code,
  Download,
  Archive,
  Package,
  FileSpreadsheet,
  FileIcon as FilePresentation,
  Database,
  Settings,
  HardDrive,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { FileType } from "@/lib/files"
import { cn } from "@/lib/utils"
import { formatFileSize } from "@/lib/files"

const iconMap = {
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

const colorMap = {
  video: "text-rose-500 bg-rose-100 dark:bg-rose-950 dark:text-rose-400",
  audio: "text-amber-500 bg-amber-100 dark:bg-amber-950 dark:text-amber-400",
  document: "text-blue-500 bg-blue-100 dark:bg-blue-950 dark:text-blue-400",
  image: "text-purple-500 bg-purple-100 dark:bg-purple-950 dark:text-purple-400",
  font: "text-emerald-500 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400",
  ebook: "text-cyan-500 bg-cyan-100 dark:bg-cyan-950 dark:text-cyan-400",
  code: "text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400",
  archive: "text-green-500 bg-green-100 dark:bg-green-950 dark:text-green-400",
  executable: "text-red-500 bg-red-100 dark:bg-red-950 dark:text-red-400",
  spreadsheet: "text-blue-500 bg-blue-100 dark:bg-blue-950 dark:text-blue-400",
  presentation: "text-orange-500 bg-orange-100 dark:bg-orange-950 dark:text-orange-400",
  database: "text-indigo-500 bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-400",
  config: "text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400",
  disk: "text-teal-500 bg-teal-100 dark:bg-teal-950 dark:text-teal-400",
  vm: "text-violet-500 bg-violet-100 dark:bg-violet-950 dark:text-violet-400",
}

const badgeColorMap = {
  video: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  audio: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  document: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  image: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  font: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  ebook: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  code: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
  archive: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  executable: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  spreadsheet: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  presentation: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  database: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  config: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  disk: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  vm: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
}

// Gradient backgrounds for cards based on category
const gradientMap = {
  video: "bg-gradient-to-br from-white to-rose-50 dark:from-slate-900 dark:to-rose-950/40",
  audio: "bg-gradient-to-br from-white to-amber-50 dark:from-slate-900 dark:to-amber-950/40",
  document: "bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/40",
  image: "bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/40",
  font: "bg-gradient-to-br from-white to-emerald-50 dark:from-slate-900 dark:to-emerald-950/40",
  ebook: "bg-gradient-to-br from-white to-cyan-50 dark:from-slate-900 dark:to-cyan-950/40",
  code: "bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/40",
  archive: "bg-gradient-to-br from-white to-green-50 dark:from-slate-900 dark:to-green-950/40",
  executable: "bg-gradient-to-br from-white to-red-50 dark:from-slate-900 dark:to-red-950/40",
  spreadsheet: "bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/40",
  presentation: "bg-gradient-to-br from-white to-orange-50 dark:from-slate-900 dark:to-orange-950/40",
  database: "bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950/40",
  config: "bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-gray-800/40",
  disk: "bg-gradient-to-br from-white to-teal-50 dark:from-slate-900 dark:to-teal-950/40",
  vm: "bg-gradient-to-br from-white to-violet-50 dark:from-slate-900 dark:to-violet-950/40",
}

// Border gradients for cards
const borderGradientMap = {
  video: "border-t-rose-100 border-l-rose-100 dark:border-t-rose-900/40 dark:border-l-rose-900/40",
  audio: "border-t-amber-100 border-l-amber-100 dark:border-t-amber-900/40 dark:border-l-amber-900/40",
  document: "border-t-blue-100 border-l-blue-100 dark:border-t-blue-900/40 dark:border-l-blue-900/40",
  image: "border-t-purple-100 border-l-purple-100 dark:border-t-purple-900/40 dark:border-l-purple-900/40",
  font: "border-t-emerald-100 border-l-emerald-100 dark:border-t-emerald-900/40 dark:border-l-emerald-900/40",
  ebook: "border-t-cyan-100 border-l-cyan-100 dark:border-t-cyan-900/40 dark:border-l-cyan-900/40",
  code: "border-t-slate-100 border-l-slate-100 dark:border-t-slate-700/40 dark:border-l-slate-700/40",
  archive: "border-t-green-100 border-l-green-100 dark:border-t-green-900/40 dark:border-l-green-900/40",
  executable: "border-t-red-100 border-l-red-100 dark:border-t-red-900/40 dark:border-l-red-900/40",
  spreadsheet: "border-t-blue-100 border-l-blue-100 dark:border-t-blue-900/40 dark:border-l-blue-900/40",
  presentation: "border-t-orange-100 border-l-orange-100 dark:border-t-orange-900/40 dark:border-l-orange-900/40",
  database: "border-t-indigo-100 border-l-indigo-100 dark:border-t-indigo-900/40 dark:border-l-indigo-900/40",
  config: "border-t-gray-100 border-l-gray-100 dark:border-t-gray-700/40 dark:border-l-gray-700/40",
  disk: "border-t-teal-100 border-l-teal-100 dark:border-t-teal-900/40 dark:border-l-teal-900/40",
  vm: "border-t-violet-100 border-l-violet-100 dark:border-t-violet-900/40 dark:border-l-violet-900/40",
}

export function FileCard({ file }: { file: FileType }) {
  const Icon = iconMap[file.category as keyof typeof iconMap] || FileText
  const colorClass = colorMap[file.category as keyof typeof colorMap] || colorMap.document
  const badgeColorClass = badgeColorMap[file.category as keyof typeof badgeColorMap] || badgeColorMap.document
  const gradientClass = gradientMap[file.category as keyof typeof gradientMap] || gradientMap.document
  const borderGradientClass =
    borderGradientMap[file.category as keyof typeof borderGradientMap] || borderGradientMap.document

  return (
    <Card
      className={cn(
        "overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300",
        gradientClass,
        "border-t border-l",
        borderGradientClass,
        "rounded-xl backdrop-blur-sm",
      )}
    >
      <Link href={`/category/${file.category}/${file.id}`} className="block">
        <CardHeader className="pb-2 pt-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className={cn("p-2 rounded-md", colorClass)}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">{file.name}</h3>
            </div>
            <Badge className={cn("ml-2", badgeColorClass)}>{file.extension.toUpperCase()}</Badge>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="pb-4">
        <div className="flex items-center space-x-3 text-sm text-slate-500 dark:text-slate-400">
          <span>
            {formatFileSize(file.exactSize)} ({file.exactSize.toLocaleString()} bytes)
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{file.description}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Link href={`/category/${file.category}/${file.id}`}>Details</Link>
        </Button>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 transition-colors" asChild>
          <a href={file.downloadUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
