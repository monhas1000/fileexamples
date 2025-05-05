import { notFound } from "next/navigation"
import { getFileById } from "@/lib/files"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { FilePreview } from "@/components/file-preview"
import { formatFileSize } from "@/lib/files"

export default function FilePage({ params }: { params: { id: string } }) {
  const file = getFileById(params.id)

  if (!file) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{file.name}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">{file.description}</p>
      </div>

      <FilePreview file={file} />

      <div className="flex justify-center">
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
          <a href={file.downloadUrl} download>
            <Download className="mr-2 h-5 w-5" />
            Download File ({formatFileSize(file.exactSize)} - {file.exactSize.toLocaleString()} bytes)
          </a>
        </Button>
      </div>
    </div>
  )
}
