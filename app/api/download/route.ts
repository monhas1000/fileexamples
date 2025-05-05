import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const fileName = searchParams.get("file")
  const contentType = searchParams.get("type") || "application/octet-stream"

  if (!fileName) {
    return new NextResponse("File name is required", { status: 400 })
  }

  try {
    // Get the file path
    const filePath = path.join(process.cwd(), "public", "files", fileName)

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Create response with proper headers
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })

    return response
  } catch (error) {
    console.error("Error serving file:", error)
    return new NextResponse("File not found", { status: 404 })
  }
}
