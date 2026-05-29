'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-name">Clauboy's Sound</span>
          <span className="nav-logo-sub">Som Automotivo · SP</span>
        </Link>

        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/galeria">Galeria</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>

        <div className="nav-cta">
          <Link href="/contato" className="btn btn-outline" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}>
            Orçamento
          </Link>
          <a
            href="https://wa.me/5511290166922?text=Olá! Vim pelo site da Clauboy's Sound e gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
