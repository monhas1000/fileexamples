import { type NextRequest, NextResponse } from "next/server"
import { getFilesByCategory, getAllFiles } from "@/lib/files"
import JSZip from "jszip"
import { promises as fs } from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  try {
    // Get category from query params
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")

    if (!category) {
      return new NextResponse("Category parameter is required", { status: 400 })
    }

    // Get files based on category
    const files = category === "all" ? getAllFiles() : getFilesByCategory(category)

    if (files.length === 0) {
      return new NextResponse("No files found", { status: 404 })
    }

    // Create a new ZIP file
    const zip = new JSZip()

    // Add each file to the ZIP
    let successCount = 0
    for (const file of files) {
      try {
        // Extract the filename from the URL
        const filename = file.url.split("/").pop() || `${file.name}.${file.extension}`

        // Get the file path - ensure we're using the correct path
        const filePath = path.join(process.cwd(), "public", file.url)

        // Read the file
        const fileData = await fs.readFile(filePath)

        // Add the file to the ZIP with a folder structure based on category
        if (category === "all") {
          // If downloading all files, organize by category
          zip.file(`${file.category}/${filename}`, fileData)
        } else {
          // If downloading a specific category, put all files at the root
          zip.file(filename, fileData)
        }

        successCount++
      } catch (error) {
        console.error(`Error adding file ${file.name} to ZIP:`, error)
        // Continue with other files even if one fails
      }
    }

    // If no files were successfully added, return an error
    if (successCount === 0) {
      return new NextResponse("Failed to add any files to the ZIP", { status: 500 })
    }

    // Generate the ZIP file
    const zipContent = await zip.generateAsync({ type: "nodebuffer" })

    // Return the ZIP file
    const zipName = category === "all" ? "all-files.zip" : `${category}-files.zip`
    return new NextResponse(zipContent, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipName}"`,
      },
    })
  } catch (error) {
    console.error("Error generating ZIP file:", error)
    return new NextResponse("Error generating ZIP file", { status: 500 })
  }
}
