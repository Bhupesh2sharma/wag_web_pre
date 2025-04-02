import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Waglogy Tech LLP - Website Developers in Sikkim',
  description: 'Waglogy Tech LLP offers affordable website development, travel website solutions, and graphic design services in Sikkim. Get low-budget, high-quality websites tailored to your needs.',
  keywords: [
    'website developer in Sikkim',
    'low budget website designer in Sikkim',
    'Sikkim website development',
    'travel website development',
    'graphic designer in Sikkim',
    'web development',
    'mobile apps',
    'digital solutions',
    'software development',
    'Waglogy Tech',
    'affordable website design',
    'Sikkim IT solutions',
    'website maintenance',
    'e-commerce website development',
    'responsive web design'
  ],
  authors: [{ name: 'Waglogy Tech LLP' }],
  openGraph: {
    title: 'Waglogy Tech LLP - Website Developers in Sikkim',
    description: 'Waglogy Tech LLP offers affordable website development, travel website solutions, and graphic design services in Sikkim.',
    url: 'https://www.waglogy.in',
    siteName: 'Waglogy Tech LLP',
    images: [
      {
        url: 'https://www.waglogy.in/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waglogy Tech LLP - Website Developers in Sikkim',
    description: 'Waglogy Tech LLP offers affordable website development, travel website solutions, and graphic design services in Sikkim.',
    images: ['https://www.waglogy.in/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
