import { Zap, Cloud, Smile, Download, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Downloads",
    description: "All files are hosted on high-speed servers for instant downloads with no waiting time.",
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-950",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Files are stored in the cloud for reliable access from anywhere in the world.",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-950",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Access files in various formats to suit your specific testing and development needs.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-950",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All files are scanned for viruses and malware to ensure your safety.",
    color: "text-rose-500",
    bgColor: "bg-rose-100 dark:bg-rose-950",
  },
  {
    icon: Sparkles,
    title: "High Quality",
    description: "Our sample files are carefully created to meet professional standards.",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-950",
  },
  {
    icon: Smile,
    title: "Completely Free",
    description: "All files are free to download and use with no registration required.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-100 dark:bg-cyan-950",
  },
]

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
          <div className={`p-3 rounded-lg mr-4 ${feature.bgColor}`}>
            <feature.icon className={`h-6 w-6 ${feature.color}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
