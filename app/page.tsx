import CategoryGrid from "@/components/category-grid"
import FeatureSection from "@/components/feature-section"
import { PopularFiles } from "@/components/popular-files"
import { SearchBar } from "@/components/search-bar"

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative px-6 py-16 md:py-24 md:px-12 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Download Free Sample Files for Testing</h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-3xl mb-8">
            Access hundreds of high-quality sample files across multiple formats. Perfect for developers, designers, and
            content creators.
          </p>

          <div className="w-full max-w-2xl mx-auto" style={{ zIndex: 10 }}>
            <SearchBar placeholder="Search for files by name, category, or extension..." variant="hero" />
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Browse by Category</h2>
          {/* Remove the View All button */}
        </div>
        <CategoryGrid />
      </div>

      {/* Popular Files Section */}
      <PopularFiles />

      {/* Features Section */}
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-slate-50">
          Why Choose File Examples?
        </h2>
        <FeatureSection />
      </div>
    </div>
  )
}
