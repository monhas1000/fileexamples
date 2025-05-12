export interface FileType {
  id: string
  name: string
  extension: string
  category: string
  size: string
  description: string
  url: string
  downloadUrl: string
  contentType: string
  exactSize: number
}

// Sample files data with accurate sizes and proper content types
const files: FileType[] = [
  // Video files
  {
    id: "video-mp4-1",
    name: "Holiday Trip",
    extension: "mp4",
    category: "video",
    size: "2.5 MB",
    exactSize: 2621440,
    description: "A sample MP4 video file of a holiday trip, perfect for testing video players and media libraries.",
    url: "/files/sample_holiday_trip.mp4",
    downloadUrl: "/api/download?file=sample_holiday_trip.mp4&type=video/mp4",
    contentType: "video/mp4",
  },
  {
    id: "video-mkv-1",
    name: "Lecture Recording",
    extension: "mkv",
    category: "video",
    size: "3.8 MB",
    exactSize: 3984588,
    description: "A sample MKV video file containing a lecture recording, useful for testing video conversion tools.",
    url: "/files/sample_lecture_recording.mkv",
    downloadUrl: "/api/download?file=sample_lecture_recording.mkv&type=video/x-matroska",
    contentType: "video/x-matroska",
  },

  // Audio files
  {
    id: "audio-mp3-1",
    name: "Podcast Episode",
    extension: "mp3",
    category: "audio",
    size: "1.2 MB",
    exactSize: 1258291,
    description: "A sample MP3 audio file of a podcast episode, ideal for testing audio players and metadata handling.",
    url: "/files/sample_podcast_episode.mp3",
    downloadUrl: "/api/download?file=sample_podcast_episode.mp3&type=audio/mpeg",
    contentType: "audio/mpeg",
  },
  {
    id: "audio-wav-1",
    name: "Background Music",
    extension: "wav",
    category: "audio",
    size: "2.4 MB",
    exactSize: 2516582,
    description: "A sample WAV audio file with background music, perfect for testing high-quality audio applications.",
    url: "/files/sample_background_music.wav",
    downloadUrl: "/api/download?file=sample_background_music.wav&type=audio/wav",
    contentType: "audio/wav",
  },

  // Document files
  {
    id: "document-docx-1",
    name: "Resume Template",
    extension: "docx",
    category: "document",
    size: "42 KB",
    exactSize: 43008,
    description:
      "A sample Microsoft Word document with a professional resume template for testing document processing.",
    url: "/files/sample_resume.docx",
    downloadUrl:
      "/api/download?file=sample_resume.docx&type=application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  {
    id: "document-pdf-1",
    name: "Business Report",
    extension: "pdf",
    category: "document",
    size: "125 KB",
    exactSize: 128000,
    description:
      "A sample PDF document containing a business report with text, charts, and tables for testing PDF viewers.",
    url: "/files/sample_report.pdf",
    downloadUrl: "/api/download?file=sample_report.pdf&type=application/pdf",
    contentType: "application/pdf",
  },

  // Image files
  {
    id: "image-jpg-1",
    name: "Profile Picture",
    extension: "jpg",
    category: "image",
    size: "245 KB",
    exactSize: 250880,
    description:
      "A sample JPG image suitable for profile pictures, ideal for testing image processing and cropping tools.",
    url: "/files/sample_profile_picture.jpg",
    downloadUrl: "/api/download?file=sample_profile_picture.jpg&type=image/jpeg",
    contentType: "image/jpeg",
  },
  {
    id: "image-png-1",
    name: "Company Logo",
    extension: "png",
    category: "image",
    size: "85 KB",
    exactSize: 87040,
    description:
      "A sample PNG image with transparency for company logos, perfect for testing image rendering with alpha channels.",
    url: "/files/sample_logo.png",
    downloadUrl: "/api/download?file=sample_logo.png&type=image/png",
    contentType: "image/png",
  },

  // Font files
  {
    id: "font-ttf-1",
    name: "OpenSans Regular",
    extension: "ttf",
    category: "font",
    size: "125 KB",
    exactSize: 128000,
    description: "A sample TrueType Font file of OpenSans Regular, widely used in web and print design.",
    url: "/files/sample_OpenSans-Regular.ttf",
    downloadUrl: "/api/download?file=sample_OpenSans-Regular.ttf&type=font/ttf",
    contentType: "font/ttf",
  },
  {
    id: "font-otf-1",
    name: "Roboto Bold",
    extension: "otf",
    category: "font",
    size: "145 KB",
    exactSize: 148480,
    description:
      "A sample OpenType Font file of Roboto Bold with advanced typography features for professional design.",
    url: "/files/sample_Roboto-Bold.otf",
    downloadUrl: "/api/download?file=sample_Roboto-Bold.otf&type=font/otf",
    contentType: "font/otf",
  },

  // Ebook files
  {
    id: "ebook-epub-1",
    name: "Harry Potter Sample",
    extension: "epub",
    category: "ebook",
    size: "1.5 MB",
    exactSize: 1572864,
    description:
      "A sample EPUB ebook file with a Harry Potter excerpt, ideal for testing e-readers and book applications.",
    url: "/files/sample_harry_potter.epub",
    downloadUrl: "/api/download?file=sample_harry_potter.epub&type=application/epub+zip",
    contentType: "application/epub+zip",
  },
  {
    id: "ebook-mobi-1",
    name: "Marketing Strategies",
    extension: "mobi",
    category: "ebook",
    size: "1.8 MB",
    exactSize: 1887436,
    description: "A sample MOBI ebook file about marketing strategies, compatible with Kindle devices and apps.",
    url: "/files/sample_marketing_strategies.mobi",
    downloadUrl: "/api/download?file=sample_marketing_strategies.mobi&type=application/x-mobipocket-ebook",
    contentType: "application/x-mobipocket-ebook",
  },

  // Code files
  {
    id: "code-js-1",
    name: "JavaScript Application",
    extension: "js",
    category: "code",
    size: "6 KB",
    exactSize: 6144,
    description: "A sample JavaScript file with common functions and patterns for web applications.",
    url: "/files/sample_app.js",
    downloadUrl: "/api/download?file=sample_app.js&type=text/javascript",
    contentType: "text/javascript",
  },
  {
    id: "code-py-1",
    name: "Python Script",
    extension: "py",
    category: "code",
    size: "4 KB",
    exactSize: 4096,
    description: "A sample Python script with functions, classes, and comments for data processing tasks.",
    url: "/files/sample_script.py",
    downloadUrl: "/api/download?file=sample_script.py&type=text/x-python",
    contentType: "text/x-python",
  },

  // Archive files
  {
    id: "archive-zip-1",
    name: "Project Backup",
    extension: "zip",
    category: "archive",
    size: "1.5 MB",
    exactSize: 1572864,
    description: "A sample ZIP archive containing project files and folders with standard compression.",
    url: "/files/sample_project_backup.zip",
    downloadUrl: "/api/download?file=sample_project_backup.zip&type=application/zip",
    contentType: "application/zip",
  },
  {
    id: "archive-rar-1",
    name: "Source Code Archive",
    extension: "rar",
    category: "archive",
    size: "1.3 MB",
    exactSize: 1363148,
    description: "A sample RAR archive with source code files, using high compression ratio and password protection.",
    url: "/files/sample_source_code.rar",
    downloadUrl: "/api/download?file=sample_source_code.rar&type=application/vnd.rar",
    contentType: "application/vnd.rar",
  },

  // Executable files
  {
    id: "executable-exe-1",
    name: "Setup Installer",
    extension: "exe",
    category: "executable",
    size: "2.5 MB",
    exactSize: 2621440,
    description: "A sample Windows executable setup installer file (non-functional, for testing only).",
    url: "/files/sample_setup.exe",
    downloadUrl: "/api/download?file=sample_setup.exe&type=application/x-msdownload",
    contentType: "application/x-msdownload",
  },
  {
    id: "executable-apk-1",
    name: "Android Application",
    extension: "apk",
    category: "executable",
    size: "8.5 MB",
    exactSize: 8912896,
    description: "A sample Android application package for mobile app testing (non-functional, for testing only).",
    url: "/files/sample_android_app.apk",
    downloadUrl: "/api/download?file=sample_android_app.apk&type=application/vnd.android.package-archive",
    contentType: "application/vnd.android.package-archive",
  },

  // Spreadsheet files
  {
    id: "spreadsheet-xlsx-1",
    name: "Financial Report",
    extension: "xlsx",
    category: "spreadsheet",
    size: "18 KB",
    exactSize: 18432,
    description: "A sample Microsoft Excel spreadsheet with financial data, formulas, and charts.",
    url: "/files/sample_financials.xlsx",
    downloadUrl:
      "/api/download?file=sample_financials.xlsx&type=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    id: "spreadsheet-csv-1",
    name: "Employee Data",
    extension: "csv",
    category: "spreadsheet",
    size: "2 KB",
    exactSize: 2048,
    description: "A sample CSV file with employee data in a comma-separated format for data import testing.",
    url: "/files/sample_employee_data.csv",
    downloadUrl: "/api/download?file=sample_employee_data.csv&type=text/csv",
    contentType: "text/csv",
  },

  // Presentation files
  {
    id: "presentation-pptx-1",
    name: "Quarterly Review",
    extension: "pptx",
    category: "presentation",
    size: "75 KB",
    exactSize: 76800,
    description: "A sample Microsoft PowerPoint presentation with quarterly business review slides and graphics.",
    url: "/files/sample_quarterly_review.pptx",
    downloadUrl:
      "/api/download?file=sample_quarterly_review.pptx&type=application/vnd.openxmlformats-officedocument.presentationml.presentation",
    contentType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  {
    id: "presentation-odp-1",
    name: "Training Slides",
    extension: "odp",
    category: "presentation",
    size: "65 KB",
    exactSize: 66560,
    description:
      "A sample OpenDocument presentation with training materials, compatible with LibreOffice and OpenOffice.",
    url: "/files/sample_training_slides.odp",
    downloadUrl: "/api/download?file=sample_training_slides.odp&type=application/vnd.oasis.opendocument.presentation",
    contentType: "application/vnd.oasis.opendocument.presentation",
  },

  // Database files
  {
    id: "database-db-1",
    name: "Contacts Database",
    extension: "db",
    category: "database",
    size: "320 KB",
    exactSize: 327680,
    description: "A sample database file containing contact information for testing database applications.",
    url: "/files/sample_contacts.db",
    downloadUrl: "/api/download?file=sample_contacts.db&type=application/octet-stream",
    contentType: "application/octet-stream",
  },
  {
    id: "database-sqlite-1",
    name: "Application Data",
    extension: "sqlite",
    category: "database",
    size: "256 KB",
    exactSize: 262144,
    description: "A sample SQLite database with application data, tables, and sample records.",
    url: "/files/sample_app_data.sqlite",
    downloadUrl: "/api/download?file=sample_app_data.sqlite&type=application/vnd.sqlite3",
    contentType: "application/vnd.sqlite3",
  },

  // System/Configuration files
  {
    id: "config-ini-1",
    name: "Settings Configuration",
    extension: "ini",
    category: "config",
    size: "1 KB",
    exactSize: 1024,
    description: "A sample INI configuration file with application settings in sections and key-value pairs.",
    url: "/files/sample_settings.ini",
    downloadUrl: "/api/download?file=sample_settings.ini&type=text/plain",
    contentType: "text/plain",
  },
  {
    id: "config-yaml-1",
    name: "YAML Configuration",
    extension: "yaml",
    category: "config",
    size: "2 KB",
    exactSize: 2048,
    description: "A sample YAML configuration file with hierarchical data structure for modern applications.",
    url: "/files/sample_config.yaml",
    downloadUrl: "/api/download?file=sample_config.yaml&type=text/yaml",
    contentType: "text/yaml",
  },

  // Disk Image files
  {
    id: "disk-iso-1",
    name: "Ubuntu Disk Image",
    extension: "iso",
    category: "disk",
    size: "25 MB",
    exactSize: 26214400,
    description: "A sample ISO disk image file of Ubuntu Linux (non-functional, for testing only).",
    url: "/files/sample_ubuntu.iso",
    downloadUrl: "/api/download?file=sample_ubuntu.iso&type=application/x-iso9660-image",
    contentType: "application/x-iso9660-image",
  },
  {
    id: "disk-img-1",
    name: "Backup Disk Image",
    extension: "img",
    category: "disk",
    size: "20 MB",
    exactSize: 20971520,
    description: "A sample raw disk image file for system backups (non-functional, for testing only).",
    url: "/files/sample_backup.img",
    downloadUrl: "/api/download?file=sample_backup.img&type=application/octet-stream",
    contentType: "application/octet-stream",
  },

  // Virtual Machine files
  {
    id: "vm-vdi-1",
    name: "Ubuntu Virtual Machine",
    extension: "vdi",
    category: "vm",
    size: "35 MB",
    exactSize: 36700160,
    description: "A sample VirtualBox disk image file for Ubuntu VM (non-functional, for testing only).",
    url: "/files/sample_ubuntu_vm.vdi",
    downloadUrl: "/api/download?file=sample_ubuntu_vm.vdi&type=application/x-virtualbox-vdi",
    contentType: "application/x-virtualbox-vdi",
  },
  {
    id: "vm-ova-1",
    name: "Exported Virtual Appliance",
    extension: "ova",
    category: "vm",
    size: "45 MB",
    exactSize: 47185920,
    description: "A sample Open Virtual Appliance package for VM migration (non-functional, for testing only).",
    url: "/files/sample_exported_vm.ova",
    downloadUrl: "/api/download?file=sample_exported_vm.ova&type=application/ovf",
    contentType: "application/ovf",
  },

  // NEW FILE TYPES

  // 3D Model files
  {
    id: "3d-obj-1",
    name: "Geometric Sculpture",
    extension: "obj",
    category: "3d",
    size: "256 KB",
    exactSize: 262144,
    description: "A sample OBJ 3D model file of a geometric sculpture, commonly used in 3D modeling and printing.",
    url: "/files/sample_geometric_sculpture.obj",
    downloadUrl: "/api/download?file=sample_geometric_sculpture.obj&type=application/x-tgif",
    contentType: "application/x-tgif",
  },
  {
    id: "3d-stl-1",
    name: "Mechanical Part",
    extension: "stl",
    category: "3d",
    size: "350 KB",
    exactSize: 358400,
    description: "A sample STL 3D model file of a mechanical part, widely used for 3D printing and CAD applications.",
    url: "/files/sample_mechanical_part.stl",
    downloadUrl: "/api/download?file=sample_mechanical_part.stl&type=application/vnd.ms-pki.stl",
    contentType: "application/vnd.ms-pki.stl",
  },

  // Vector Graphics files
  {
    id: "vector-ai-1",
    name: "Corporate Identity",
    extension: "ai",
    category: "vector",
    size: "1.2 MB",
    exactSize: 1258291,
    description: "A sample Adobe Illustrator file with corporate identity elements like logos and business cards.",
    url: "/files/sample_corporate_identity.ai",
    downloadUrl: "/api/download?file=sample_corporate_identity.ai&type=application/postscript",
    contentType: "application/postscript",
  },

  // Subtitle files
  {
    id: "subtitle-srt-1",
    name: "Movie Subtitles",
    extension: "srt",
    category: "subtitle",
    size: "12 KB",
    exactSize: 12288,
    description: "A sample SRT subtitle file for a movie, containing time-coded text for video subtitling.",
    url: "/files/sample_movie_subtitles.srt",
    downloadUrl: "/api/download?file=sample_movie_subtitles.srt&type=application/x-subrip",
    contentType: "application/x-subrip",
  },
  {
    id: "subtitle-vtt-1",
    name: "Web Video Captions",
    extension: "vtt",
    category: "subtitle",
    size: "8 KB",
    exactSize: 8192,
    description: "A sample WebVTT subtitle file for web videos, used for HTML5 video captioning and subtitles.",
    url: "/files/sample_web_video_captions.vtt",
    downloadUrl: "/api/download?file=sample_web_video_captions.vtt&type=text/vtt",
    contentType: "text/vtt",
  },

  // CAD files
  {
    id: "cad-dwg-1",
    name: "Architectural Blueprint",
    extension: "dwg",
    category: "cad",
    size: "1.8 MB",
    exactSize: 1887436,
    description: "A sample DWG CAD file with architectural blueprints, used in AutoCAD and other CAD software.",
    url: "/files/sample_architectural_blueprint.dwg",
    downloadUrl: "/api/download?file=sample_architectural_blueprint.dwg&type=application/acad",
    contentType: "application/acad",
  },
  {
    id: "cad-dxf-1",
    name: "Engineering Schematic",
    extension: "dxf",
    category: "cad",
    size: "950 KB",
    exactSize: 972800,
    description: "A sample DXF CAD file with engineering schematics, widely supported across CAD applications.",
    url: "/files/sample_engineering_schematic.dxf",
    downloadUrl: "/api/download?file=sample_engineering_schematic.dxf&type=application/dxf",
    contentType: "application/dxf",
  },

  // Photoshop files
  {
    id: "design-psd-1",
    name: "Website Mockup",
    extension: "psd",
    category: "design",
    size: "4.5 MB",
    exactSize: 4718592,
    description: "A sample PSD file with a website mockup design, including layers and smart objects.",
    url: "/files/sample_website_mockup.psd",
    downloadUrl: "/api/download?file=sample_website_mockup.psd&type=image/vnd.adobe.photoshop",
    contentType: "image/vnd.adobe.photoshop",
  },
  {
    id: "design-sketch-1",
    name: "Mobile App UI Kit",
    extension: "sketch",
    category: "design",
    size: "3.2 MB",
    exactSize: 3355443,
    description: "A sample Sketch file with a mobile app UI kit, including components and symbols for app design.",
    url: "/files/sample_mobile_app_ui_kit.sketch",
    downloadUrl: "/api/download?file=sample_mobile_app_ui_kit.sketch&type=application/octet-stream",
    contentType: "application/octet-stream",
  },
]

export function getFilesByCategory(category: string): FileType[] {
  return files.filter((file) => file.category === category)
}

export function getAllFiles(): FileType[] {
  return files
}

export function getFileById(id: string): FileType | undefined {
  return files.find((file) => file.id === id)
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

export function getAllCategories() {
  return [
    { id: "document", name: "Document" },
    { id: "spreadsheet", name: "Spreadsheet" },
    { id: "presentation", name: "Presentation" },
    { id: "image", name: "Image" },
    { id: "audio", name: "Audio" },
    { id: "video", name: "Video" },
    { id: "code", name: "Code" },
    { id: "font", name: "Font" },
    { id: "ebook", name: "Ebook" },
    { id: "archive", name: "Archive" },
    { id: "executable", name: "Executable" },
    { id: "database", name: "Database" },
    { id: "config", name: "Configuration" },
    { id: "disk", name: "Disk Image" },
    { id: "vm", name: "Virtual Machine" },
    { id: "3d", name: "3D Models" },
    { id: "vector", name: "Vector Graphics" },
    { id: "subtitle", name: "Subtitles" },
    { id: "cad", name: "CAD Files" },
    { id: "design", name: "Design Files" },
  ]
}

export async function uploadFile(formData: FormData): Promise<{ name: string }> {
  // Simulate a successful upload
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const file = formData.get("file") as File
  return { name: file.name }
}
