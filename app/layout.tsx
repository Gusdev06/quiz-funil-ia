import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-heading'
});
const _inter = Inter({
  subsets: ["latin"],
  variable: '--font-body'
});
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Crie sua Influenciadora de IA | Método Validado',
  description: 'Crie uma influenciadora de IA que vende por você — sem aparecer, sem gravar, sem complicação. Método passo a passo para criar modelos hiper-realistas que geram conteúdo e faturam.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* VTurb Performance Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`
          }}
        />
        {/* VTurb Preloads */}
        <link rel="preload" href="https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/697f7ab5fa239aff03b3c0bd/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/697f7aabfa239aff03b3c07a/main.m3u8" as="fetch" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body className={`${_spaceGrotesk.variable} ${_inter.variable} ${_jetbrainsMono.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
