import { notFound } from "next/navigation"
import { FileCard } from "@/components/file-card"
import { getFilesByCategory } from "@/lib/files"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const dynamicParams = true

export async function generateStaticParams() {
  return [
    { type: "video" },
    { type: "audio" },
    { type: "document" },
    { type: "image" },
    { type: "font" },
    { type: "ebook" },
    { type: "code" },
    { type: "archive" },
    { type: "executable" },
    { type: "spreadsheet" },
    { type: "presentation" },
    { type: "database" },
    { type: "config" },
    { type: "disk" },
    { type: "vm" },
    { type: "3d" },
    { type: "vector" },
    { type: "subtitle" },
    { type: "cad" },
    { type: "design" },
  ]
}

export default function CategoryPage({ params }: { params: { type: string } }) {
  const { type } = params

  // Validate category type - UPDATED to include new file types
  const validTypes = [
    "video",
    "audio",
    "document",
    "image",
    "font",
    "ebook",
    "code",
    "archive",
    "executable",
    "spreadsheet",
    "presentation",
    "database",
    "config",
    "disk",
    "vm",
    "3d",
    "vector",
    "subtitle",
    "cad",
    "design",
  ]

  if (!validTypes.includes(type)) {
    notFound()
  }

  const files = getFilesByCategory(type)

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold capitalize text-slate-900 dark:text-slate-50">{type} Files</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Download sample {type} files for testing and development
            </p>
          </div>

          <Button asChild className="bg-emerald-600 hover:bg-emerald-700 self-start">
            <a href={`/api/download-all?category=${type}`} download>
              <Download className="mr-2 h-5 w-5" />
              Download All as ZIP
            </a>
          </Button>
        </div>
      </div>

      {files.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file) => (
            <FileCard key={file.id} file={file} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-600 dark:text-slate-400">No {type} files available yet.</p>
        </div>
      )}
    </div>
  )
}
