import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Clauboy's Sound — Som Automotivo em São Paulo",
  description: "Loja de som e acessórios automotivos em Vila Guilherme, São Paulo. Instalação profissional, alto-falantes, centrais multimídia e muito mais.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
