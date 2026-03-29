import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "CV-Youssef-Jouini-Fullstack-Web.pdf")
    const fileBuffer = await readFile(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV-Youssef-Jouini-Fullstack-Web.pdf"',
        "Content-Length": fileBuffer.byteLength.toString(),
      },
    })
  } catch {
    return new NextResponse("CV non trouvé", { status: 404 })
  }
}
