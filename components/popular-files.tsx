import { getAllFiles } from "@/lib/files"
import { FileCard } from "@/components/file-card"

export function PopularFiles() {
  // In a real app, you would track downloads and sort by popularity
  // For now, we'll just show the first 3 files
  const files = getAllFiles().slice(0, 3)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Popular Downloads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  )
}
