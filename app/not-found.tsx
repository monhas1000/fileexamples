import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileSearch, Home, FolderOpen } from "lucide-react"
import { getAllCategories } from "@/lib/files"

export default function NotFound() {
  // Get all categories to suggest popular sections
  const categories = getAllCategories().slice(0, 6) // Just show top 6 categories

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="mb-8 p-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <FileSearch className="h-16 w-16 text-emerald-500" />
      </div>

      <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-2">Page Not Found</h2>

      <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved. Perhaps you were looking for one of our sample
        files?
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="px-4 py-2 rounded-full text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            {category.name} Files
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/categories">
            <FolderOpen className="mr-2 h-5 w-5" />
            Browse All Categories
          </Link>
        </Button>
      </div>

      <div className="mt-12 p-6 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-lg">
        <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">Looking for something specific?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Try searching for the file you need or check our popular categories.
        </p>
        <Button asChild variant="secondary" className="w-full">
          <Link href="/search">
            <FileSearch className="mr-2 h-5 w-5" />
            Search Files
          </Link>
        </Button>
      </div>
    </div>
  )
}
