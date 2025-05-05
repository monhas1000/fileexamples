import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Map of file extensions to MIME types
const mimeTypes: Record<string, string> = {
  mp4: "video/mp4",
  mkv: "video/x-matroska",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  ttf: "font/ttf",
  otf: "font/otf",
  epub: "application/epub+zip",
  mobi: "application/x-mobipocket-ebook",
  js: "text/javascript",
  py: "text/x-python",
  zip: "application/zip",
  rar: "application/vnd.rar",
  exe: "application/x-msdownload",
  apk: "application/vnd.android.package-archive",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  csv: "text/csv",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  odp: "application/vnd.oasis.opendocument.presentation",
  db: "application/octet-stream",
  sqlite: "application/vnd.sqlite3",
  ini: "text/plain",
  yaml: "text/yaml",
  iso: "application/x-iso9660-image",
  img: "application/octet-stream",
  vdi: "application/x-virtualbox-vdi",
  ova: "application/ovf",
}

export function middleware(request: NextRequest) {
  // Only handle requests to /files/
  if (!request.nextUrl.pathname.startsWith("/files/")) {
    return NextResponse.next()
  }

  // Get the file extension
  const extension = request.nextUrl.pathname.split(".").pop()?.toLowerCase() || ""

  // If we have a MIME type for this extension, set the Content-Type header
  if (extension && mimeTypes[extension]) {
    const response = NextResponse.next()
    response.headers.set("Content-Type", mimeTypes[extension])
    response.headers.set("Content-Disposition", `attachment; filename="${request.nextUrl.pathname.split("/").pop()}"`)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/files/:path*",
}
