"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { FileType } from "@/lib/files"
import {
  FileIcon,
  FileText,
  FileVideo,
  FileAudio,
  ImageIcon,
  Code,
  Archive,
  Package,
  FileSpreadsheet,
  FileIcon as FilePresentation,
  Database,
  Settings,
  HardDrive,
  Server,
  Type,
  BookOpen,
  Download,
  Calendar,
  FileTypeIcon,
} from "lucide-react"
import { formatFileSize } from "@/lib/files"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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

// Icon background colors
const iconBgColorMap = {
  video: "bg-rose-500 dark:bg-rose-600",
  audio: "bg-amber-500 dark:bg-amber-600",
  document: "bg-blue-500 dark:bg-blue-600",
  image: "bg-purple-500 dark:bg-purple-600",
  font: "bg-emerald-500 dark:bg-emerald-600",
  ebook: "bg-cyan-500 dark:bg-cyan-600",
  code: "bg-slate-500 dark:bg-slate-600",
  archive: "bg-green-500 dark:bg-green-600",
  executable: "bg-red-500 dark:bg-red-600",
  spreadsheet: "bg-blue-500 dark:bg-blue-600",
  presentation: "bg-orange-500 dark:bg-orange-600",
  database: "bg-indigo-500 dark:bg-indigo-600",
  config: "bg-gray-500 dark:bg-gray-600",
  disk: "bg-teal-500 dark:bg-teal-600",
  vm: "bg-violet-500 dark:bg-violet-600",
}

// Text colors for headings
const textColorMap = {
  video: "text-rose-600 dark:text-rose-400",
  audio: "text-amber-600 dark:text-amber-400",
  document: "text-blue-600 dark:text-blue-400",
  image: "text-purple-600 dark:text-purple-400",
  font: "text-emerald-600 dark:text-emerald-400",
  ebook: "text-cyan-600 dark:text-cyan-400",
  code: "text-slate-600 dark:text-slate-400",
  archive: "text-green-600 dark:text-green-400",
  executable: "text-red-600 dark:text-red-400",
  spreadsheet: "text-blue-600 dark:text-blue-400",
  presentation: "text-orange-600 dark:text-orange-400",
  database: "text-indigo-600 dark:text-indigo-400",
  config: "text-gray-600 dark:text-gray-400",
  disk: "text-teal-600 dark:text-teal-400",
  vm: "text-violet-600 dark:text-violet-400",
}

export function FilePreview({ file }: { file: FileType }) {
  const getFileIcon = () => {
    switch (file.category) {
      case "image":
        return <ImageIcon className="h-6 w-6 text-white" />
      case "video":
        return <FileVideo className="h-6 w-6 text-white" />
      case "audio":
        return <FileAudio className="h-6 w-6 text-white" />
      case "document":
        return <FileText className="h-6 w-6 text-white" />
      case "code":
        return <Code className="h-6 w-6 text-white" />
      case "archive":
        return <Archive className="h-6 w-6 text-white" />
      case "executable":
        return <Package className="h-6 w-6 text-white" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-6 w-6 text-white" />
      case "presentation":
        return <FilePresentation className="h-6 w-6 text-white" />
      case "database":
        return <Database className="h-6 w-6 text-white" />
      case "config":
        return <Settings className="h-6 w-6 text-white" />
      case "disk":
        return <HardDrive className="h-6 w-6 text-white" />
      case "vm":
        return <Server className="h-6 w-6 text-white" />
      case "font":
        return <Type className="h-6 w-6 text-white" />
      case "ebook":
        return <BookOpen className="h-6 w-6 text-white" />
      default:
        return <FileIcon className="h-6 w-6 text-white" />
    }
  }

  const gradientClass = gradientMap[file.category as keyof typeof gradientMap] || gradientMap.document
  const borderGradientClass =
    borderGradientMap[file.category as keyof typeof borderGradientMap] || borderGradientMap.document
  const iconBgColorClass = iconBgColorMap[file.category as keyof typeof iconBgColorMap] || iconBgColorMap.document
  const textColorClass = textColorMap[file.category as keyof typeof textColorMap] || textColorMap.document

  return (
    <Card
      className={cn(
        "overflow-hidden border-0 shadow-lg rounded-xl backdrop-blur-sm",
        gradientClass,
        "border-t border-l",
        borderGradientClass,
      )}
    >
      <CardContent className="p-0">
        {/* Header with icon and file name */}
        <div className="relative overflow-hidden">
          <div
            className={cn("absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10", iconBgColorClass)}
          ></div>
          <div className="p-6 relative">
            <div className="flex items-center space-x-4">
              <div className={cn("p-3 rounded-xl", iconBgColorClass, "shadow-md")}>{getFileIcon()}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{file.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 capitalize">{file.category} File</p>
              </div>
            </div>
          </div>
        </div>

        {/* File details */}
        <div className="px-6 pb-6 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column - File properties */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className={cn("text-sm font-medium", textColorClass)}>File Properties</h4>
                <div className="grid grid-cols-2 gap-4 bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl shadow-sm">
                  <div>
                    <div className="flex items-center mb-1">
                      <FileTypeIcon className="h-4 w-4 mr-2 text-slate-400" />
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">File Type</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {file.extension.toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Content Type</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{file.contentType}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className={cn("text-sm font-medium", textColorClass)}>File Size</h4>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-900 dark:text-slate-100 font-medium">
                      {formatFileSize(file.exactSize)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {file.exactSize.toLocaleString()} bytes
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full", iconBgColorClass)}
                      style={{ width: `${Math.min(100, (file.exactSize / 10485760) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>0 MB</span>
                    <span>10 MB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Description and download */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className={cn("text-sm font-medium", textColorClass)}>Description</h4>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl shadow-sm">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{file.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className={cn("text-sm font-medium", textColorClass)}>Download</h4>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Ready to download</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {file.extension.toUpperCase()} file
                    </span>
                  </div>
                  <Button className={cn("w-full", iconBgColorClass, "hover:opacity-90")} asChild>
                    <a href={file.downloadUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
