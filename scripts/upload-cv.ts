import { put } from '@vercel/blob'

// Fetch the PDF directly from the original blob URL
const PDF_BLOB_URL = 'https://blobs.vusercontent.net/blob/CV%20Youssef%20Jouini%20-%20Stage%20Fullstack%20web%20Ascanio-odmUEb6WGTKoIXAXS0wQKjR0izzREt.pdf'

async function uploadCV() {
  console.log('[v0] Fetching PDF from source URL...')
  const response = await fetch(PDF_BLOB_URL)
  if (!response.ok) {
    throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const fileBuffer = Buffer.from(arrayBuffer)
  console.log('[v0] PDF fetched, size:', fileBuffer.byteLength, 'bytes')

  const file = new File([fileBuffer], 'CV-Youssef-Jouini-Fullstack-Web.pdf', {
    type: 'application/pdf',
  })

  console.log('[v0] Uploading to Vercel Blob...')
  const blob = await put('CV-Youssef-Jouini-Fullstack-Web.pdf', file, {
    access: 'public',
    addRandomSuffix: false,
  })

  console.log('[v0] Upload successful!')
  console.log('[v0] Public URL:', blob.url)
}

uploadCV().catch((err) => {
  console.error('[v0] Upload failed:', err)
  process.exit(1)
})
