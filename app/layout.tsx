import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Storybook Nextjs_13 Test',
  description: 'Storybook Nextjs_13 Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
