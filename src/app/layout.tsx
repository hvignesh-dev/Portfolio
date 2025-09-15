import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Portfolio - Software Developer',
  description: 'Professional portfolio showcasing modern web development projects and skills',
  keywords: 'portfolio, software developer, web development, React, Next.js, TypeScript',
  authors: [{ name: 'Developer' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}