import { notFound } from "next/navigation"

// This is a catch-all route for paths that don't match any other route
export default function CatchAllPage({ params }: { params: { not_found: string[] } }) {
  // Skip notFound() for specific paths that should be handled by other routes
  const path = params.not_found.join("/")

  // List of paths that should be handled by other routes
  const validPaths = ["categories", "category", "search", "about", "privacy", "terms"]

  // If this is a valid path, don't trigger notFound
  if (validPaths.includes(params.not_found[0])) {
    return <div>Redirecting...</div>
  }

  // Otherwise, trigger the 404 page
  notFound()
}
