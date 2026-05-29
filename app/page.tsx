import Link from 'next/link'
import { MessageCircle, Star, ChevronRight, Zap, Volume2, Radio } from 'lucide-react'

const services = [
  { icon: '🔊', name: 'Alto-falantes', desc: 'Instalação de woofers, tweeters e subwoofers das melhores marcas do mercado.' },
  { icon: '📺', name: 'Central Multimídia', desc: 'Centrais Android com GPS, Bluetooth, espelhamento e câmera de ré.' },
  { icon: '⚡', name: 'Módulos de Potência', desc: 'Amplificadores e módulos para graves e médios com instalação técnica.' },
  { icon: '🎙️', name: 'Viva-voz', desc: 'Kits Bluetooth mãos-livres para ligações seguras no trânsito.' },
  { icon: '🔧', name: 'Revisão Elétrica', desc: 'Diagnóstico e revisão do sistema elétrico de som do veículo.' },
  { icon: '🛡️', name: 'Alarmes & Travas', desc: 'Instalação de alarmes, trava elétrica e rastreadores veiculares.' },
]

const reviews = [
  { text: 'Sempre faço todos os meus serviços de instalação no carro aqui. Qualidade e confiança garantidas.', author: 'Umilson Bien' },
  { text: 'Melhor loja de som e acessórios em Vila Guilherme. Super recomendo, atendimento excelente!', author: 'Bruno Ferreira' },
  { text: 'Ótimo atendimento, procure o Cláudio, dono do estabelecimento. Ótima pessoa, trabalho impecável.', author: 'Ychson Araujo' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">
              <Zap size={10} />
              Som Automotivo Profissional · Vila Guilherme, SP
            </div>
            <h1 className="hero-title">
              Som que você<br />
              <span className="line-gold">sente</span> no peito
            </h1>
            <p className="hero-tagline">
              "Potência não é nada sem controle." — Instalação técnica, produtos de qualidade
              e o atendimento pessoal do Cláudio para seu veículo soar do jeito certo.
            </p>
            <div className="hero-actions">
              <a
                href="https://wa.me/5511290166922?text=Olá! Vim pelo site da Clauboy's Sound e gostaria de um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <MessageCircle size={15} />
                Pedir Orçamento
              </a>
              <Link href="/servicos" className="btn btn-outline">
                Ver Serviços
                <ChevronRight size={14} />
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">4,7</div>
                <div className="hero-stat-label">Google Reviews</div>
              </div>
              <div>
                <div className="hero-stat-value">125+</div>
                <div className="hero-stat-label">Avaliações</div>
              </div>
              <div>
                <div className="hero-stat-value">15+</div>
                <div className="hero-stat-label">Anos no mercado</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-card-icon">🔊</div>
              <div className="hero-card-title">Instalação Profissional</div>
              <p className="hero-card-desc">
                Cada fio, cada parafuso no lugar certo. Técnicos experientes que
                respeitam seu carro e entregam o melhor resultado.
              </p>
            </div>
            <div className="hero-cards-row">
              <div className="hero-card-sm">
                <div className="hero-card-sm-icon"><Volume2 size={22} color="var(--gold)" /></div>
                <div className="hero-card-sm-label">Subwoofers</div>
              </div>
              <div className="hero-card-sm">
                <div className="hero-card-sm-icon"><Radio size={22} color="var(--gold)" /></div>
                <div className="hero-card-sm-label">Multimídia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">O que fazemos</p>
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-desc">
              Do subwoofer à central multimídia, instalamos com cuidado e técnica
              para seu carro soar exatamente como você quer.
            </p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.name} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/servicos" className="btn btn-outline">
              Ver todos os serviços
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALERIA PREVIEW */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Nosso trabalho</p>
            <h2 className="section-title">Galeria</h2>
            <p className="section-desc">
              Cada instalação é única. Veja alguns dos trabalhos que já realizamos.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item featured">
              <div className="gallery-placeholder">
                <div className="gallery-placeholder-icon">📸</div>
                <div className="gallery-placeholder-text">Foto em destaque</div>
              </div>
            </div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="gallery-item">
                <div className="gallery-placeholder">
                  <div className="gallery-placeholder-icon">🚗</div>
                  <div className="gallery-placeholder-text">Trabalho {i}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href="/galeria" className="btn btn-outline">
              Ver galeria completa
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">O que dizem os clientes</p>
            <h2 className="section-title">4,7 no Google</h2>
            <p className="section-desc">125 avaliações de clientes que confiaram no Cláudio e na equipe.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map(r => (
              <div key={r.author} className="review-card">
                <div className="review-stars">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">{r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2 className="cta-band-title">
            Pronto para<br />
            <span style={{ color: 'var(--gold)' }}>transformar</span> seu som?
          </h2>
          <p className="cta-band-sub">
            Fale com o Cláudio agora mesmo e receba um orçamento personalizado para o seu carro.
          </p>
          <div className="cta-band-actions">
            <a
              href="https://wa.me/5511290166922?text=Olá! Vim pelo site e quero um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              <MessageCircle size={16} />
              Chamar no WhatsApp
            </a>
            <Link href="/contato" className="btn btn-outline">
              Enviar mensagem
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
