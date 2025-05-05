import { type NextRequest, NextResponse } from "next/server"
import { getFilesByCategory } from "@/lib/files"
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

    // Get all files in the category
    const files = getFilesByCategory(category)

    if (files.length === 0) {
      return new NextResponse("No files found in this category", { status: 404 })
    }

    // Create a new ZIP file
    const zip = new JSZip()

    // Add each file to the ZIP
    for (const file of files) {
      try {
        // Extract the filename from the URL
        const filename = file.url.split("/").pop() || `${file.name}.${file.extension}`

        // Get the file path
        const filePath = path.join(process.cwd(), "public", "files", filename)

        // Read the file
        const fileData = await fs.readFile(filePath)

        // Add the file to the ZIP
        zip.file(filename, fileData)
      } catch (error) {
        console.error(`Error adding file ${file.name} to ZIP:`, error)
        // Continue with other files even if one fails
      }
    }

    // Generate the ZIP file
    const zipContent = await zip.generateAsync({ type: "nodebuffer" })

    // Return the ZIP file
    return new NextResponse(zipContent, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${category}-files.zip"`,
      },
    })
  } catch (error) {
    console.error("Error generating ZIP file:", error)
    return new NextResponse("Error generating ZIP file", { status: 500 })
  }
}
