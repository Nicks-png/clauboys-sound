import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">Clauboy's Sound</div>
            <div className="footer-brand-sub">Som Automotivo · São Paulo</div>
            <p className="footer-tagline">"Potência não é nada sem controle."</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 600 }}
            >
              📷
              @clauboyssound
            </a>
          </div>

          <div>
            <p className="footer-col-title">Navegação</p>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/galeria">Galeria</Link></li>
              <li><Link href="/contato">Contato & Orçamento</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Onde Estamos</p>
            <div className="footer-info">
              <div className="footer-info-item">
                <MapPin size={14} />
                R. Chico Pontes, 453 — Vila Guilherme, São Paulo - SP
              </div>
              <div className="footer-info-item">
                <Phone size={14} />
                (11) 2901-6692
              </div>
              <div className="footer-info-item">
                <Clock size={14} />
                Seg a Sáb · até 18h
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Clauboy's Sound — Todos os direitos reservados.</span>
          <span>Site por <a href="https://lumien.dev" target="_blank" rel="noopener noreferrer">Lumien</a></span>
        </div>
      </div>
    </footer>
  )
}
