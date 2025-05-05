"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"
import { uploadFile } from "@/lib/files"

export function FileUpload({ category }: { category: string }) {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState("")
  const [fileName, setFileName] = useState("")

  async function handleUpload(formData: FormData) {
    try {
      setIsUploading(true)
      setMessage("")

      // Add the category to the form data
      formData.append("category", category)

      const result = await uploadFile(formData)
      setMessage(`File uploaded successfully: ${result.name}`)
    } catch (error) {
      setMessage(`Error uploading file: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    } else {
      setFileName("")
    }
  }

  return (
    <Card className="bg-white dark:bg-slate-900 border-0 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-slate-900 dark:text-slate-50">Upload a {category} file</CardTitle>
        <CardDescription>Share your own sample files with the community</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleUpload}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-3 text-slate-500 dark:text-slate-400" />
                    {fileName ? (
                      <p className="mb-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">{fileName}</p>
                    ) : (
                      <>
                        <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Any {category} file (MAX 5MB)</p>
                      </>
                    )}
                  </div>
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    className="hidden"
                    accept={getAcceptTypes(category)}
                    required
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button
              type="submit"
              disabled={isUploading || !fileName}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              {isUploading ? "Uploading..." : "Upload File"}
            </Button>
          </div>
        </form>
        {message && (
          <div
            className={`mt-4 p-3 rounded-md ${message.includes("Error") ? "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400" : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"}`}
          >
            {message}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function getAcceptTypes(category: string): string {
  switch (category) {
    case "video":
      return ".mp4,.mov,.avi,.webm"
    case "audio":
      return ".mp3,.wav,.ogg,.flac"
    case "document":
      return ".pdf,.doc,.docx,.txt,.rtf,.xlsx,.pptx"
    case "image":
      return ".jpg,.jpeg,.png,.gif,.webp,.svg"
    case "font":
      return ".ttf,.otf,.woff,.woff2"
    case "ebook":
      return ".epub,.mobi,.azw"
    case "code":
      return ".html,.css,.js,.json,.xml,.md,.py,.java,.cpp"
    default:
      return "*"
  }
}
