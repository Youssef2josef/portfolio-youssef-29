import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Youssef Jouini – Développeur Fullstack Web',
  description:
    "Portfolio de Youssef Jouini, étudiant ingénieur à l'Ensimag, spécialisé en développement fullstack web avec Java, Spring Boot, Angular, React. Disponible pour stage de 4 mois à partir du 25 mai 2026.",
  generator: 'v0.app',
  keywords: [
    'développeur fullstack',
    'Java',
    'Spring Boot',
    'Angular',
    'React',
    'Ensimag',
    'stage',
    '2026',
    'microservices',
    'API REST',
  ],
  authors: [{ name: 'Youssef Jouini' }],
  openGraph: {
    title: 'Youssef Jouini – Développeur Fullstack Web',
    description:
      "Étudiant ingénieur à l'Ensimag, disponible pour stage fullstack web à partir du 25 mai 2026.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
