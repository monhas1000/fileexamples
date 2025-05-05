import { getAllFiles, type FileType } from "./files"

export function searchFiles(query: string): FileType[] {
  if (!query || query.trim() === "") {
    return []
  }

  const searchTerms = query.toLowerCase().trim().split(/\s+/)
  const allFiles = getAllFiles()

  return allFiles.filter((file) => {
    // Check if any search term matches any of the file properties
    return searchTerms.some((term) => {
      return (
        file.name.toLowerCase().includes(term) ||
        file.category.toLowerCase().includes(term) ||
        file.extension.toLowerCase().includes(term) ||
        file.description.toLowerCase().includes(term)
      )
    })
  })
}
