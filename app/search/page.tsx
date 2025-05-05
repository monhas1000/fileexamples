import { getAllFiles } from "@/lib/files"
import { FileCard } from "@/components/file-card"
import { SearchBar } from "@/components/search-bar"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""

  // Get all files
  const allFiles = getAllFiles()

  // Filter files based on search query
  const searchResults = query
    ? allFiles.filter((file) => {
        const searchLower = query.toLowerCase()
        return (
          file.name.toLowerCase().includes(searchLower) ||
          file.category.toLowerCase().includes(searchLower) ||
          file.extension.toLowerCase().includes(searchLower) ||
          file.description.toLowerCase().includes(searchLower)
        )
      })
    : []

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">Search Results</h1>
        <div className="max-w-2xl relative" style={{ zIndex: 20 }}>
          <SearchBar placeholder="Search by file name, category, or extension..." />
        </div>
        {query && (
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {searchResults.length} {searchResults.length === 1 ? "result" : "results"} for &quot;{query}&quot;
          </p>
        )}
      </div>

      {query ? (
        searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">No results found</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We couldn&apos;t find any files matching &quot;{query}&quot;. Try a different search term.
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-600 dark:text-slate-400">Enter a search term to find files.</p>
        </div>
      )}
    </div>
  )
}
