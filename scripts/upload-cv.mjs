import { put } from '@vercel/blob'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pdfPath = join(__dirname, '../public/CV-Youssef-Jouini-Fullstack-Web.pdf')

async function uploadCV() {
  console.log('[v0] Reading PDF from:', pdfPath)
  const fileBuffer = readFileSync(pdfPath)
  const file = new File([fileBuffer], 'CV-Youssef-Jouini-Fullstack-Web.pdf', {
    type: 'application/pdf',
  })

  console.log('[v0] Uploading to Vercel Blob...')
  const blob = await put('CV-Youssef-Jouini-Fullstack-Web.pdf', file, {
    access: 'public',
  })

  console.log('[v0] Upload successful!')
  console.log('[v0] Public URL:', blob.url)
}

uploadCV().catch((err) => {
  console.error('[v0] Upload failed:', err)
  process.exit(1)
})
