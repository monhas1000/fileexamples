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

export function FileCard({ file }: { file: FileType }) {
  const Icon = iconMap[file.category as keyof typeof iconMap] || FileText
  const colorClass = colorMap[file.category as keyof typeof colorMap] || colorMap.document
  const badgeColorClass = badgeColorMap[file.category as keyof typeof badgeColorMap] || badgeColorMap.document

  return (
    <Card className="overflow-hidden border-0 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
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
        <Button variant="outline" size="sm" asChild>
          <Link href={`/category/${file.category}/${file.id}`}>Details</Link>
        </Button>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
          <a href={file.downloadUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
