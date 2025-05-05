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
} from "lucide-react"
import { formatFileSize } from "@/lib/files"

export function FilePreview({ file }: { file: FileType }) {
  const getFileIcon = () => {
    switch (file.category) {
      case "image":
        return <ImageIcon className="h-5 w-5 mr-2 text-purple-500" />
      case "video":
        return <FileVideo className="h-5 w-5 mr-2 text-rose-500" />
      case "audio":
        return <FileAudio className="h-5 w-5 mr-2 text-amber-500" />
      case "document":
        return <FileText className="h-5 w-5 mr-2 text-blue-500" />
      case "code":
        return <Code className="h-5 w-5 mr-2 text-slate-500" />
      case "archive":
        return <Archive className="h-5 w-5 mr-2 text-green-500" />
      case "executable":
        return <Package className="h-5 w-5 mr-2 text-red-500" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-5 w-5 mr-2 text-blue-500" />
      case "presentation":
        return <FilePresentation className="h-5 w-5 mr-2 text-orange-500" />
      case "database":
        return <Database className="h-5 w-5 mr-2 text-indigo-500" />
      case "config":
        return <Settings className="h-5 w-5 mr-2 text-gray-500" />
      case "disk":
        return <HardDrive className="h-5 w-5 mr-2 text-teal-500" />
      case "vm":
        return <Server className="h-5 w-5 mr-2 text-purple-500" />
      case "font":
        return <Type className="h-5 w-5 mr-2 text-emerald-500" />
      case "ebook":
        return <BookOpen className="h-5 w-5 mr-2 text-cyan-500" />
      default:
        return <FileIcon className="h-5 w-5 mr-2 text-slate-500" />
    }
  }

  return (
    <Card className="overflow-hidden border-0 shadow-sm bg-white dark:bg-slate-900">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-center">
            {getFileIcon()}
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">{file.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">File Type</h4>
              <p className="mt-1 text-slate-900 dark:text-slate-100">{file.extension.toUpperCase()}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">File Size</h4>
              <p className="mt-1 text-slate-900 dark:text-slate-100">
                {formatFileSize(file.exactSize)} ({file.exactSize.toLocaleString()} bytes)
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Category</h4>
              <p className="mt-1 text-slate-900 dark:text-slate-100 capitalize">{file.category}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Content Type</h4>
              <p className="mt-1 text-slate-900 dark:text-slate-100">{file.contentType}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Description</h4>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{file.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
