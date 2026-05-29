'use client'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'

export default function ContatoPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">Fale com a gente</p>
          <h1>Contato & Orçamento</h1>
          <p>Manda sua dúvida ou pedido de orçamento. O Cláudio responde rápido.</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={18} /></div>
                  <div>
                    <div className="contact-info-label">Telefone</div>
                    <div className="contact-info-value">(11) 2901-6692</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MessageCircle size={18} /></div>
                  <div>
                    <div className="contact-info-label">WhatsApp</div>
                    <a
                      href="https://wa.me/5511290166922?text=Olá! Vim pelo site e quero um orçamento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-value"
                      style={{ color: '#25D366', fontWeight: 600 }}
                    >
                      Chamar no WhatsApp →
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={18} /></div>
                  <div>
                    <div className="contact-info-label">Endereço</div>
                    <div className="contact-info-value">R. Chico Pontes, 453 — Vila Guilherme, São Paulo - SP, 02067-000</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={18} /></div>
                  <div>
                    <div className="contact-info-label">Horário</div>
                    <div className="contact-info-value">Seg a Sáb, até as 18h</div>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <div className="map-placeholder-icon">📍</div>
                <div className="map-placeholder-text">Mapa em breve</div>
                <div className="map-placeholder-addr">R. Chico Pontes, 453 — Vila Guilherme, SP</div>
              </div>
            </div>

            <div className="contact-form">
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.75rem' }}>
                Solicitar Orçamento
              </p>

              <div className="form-group">
                <label className="form-label">Seu nome</label>
                <input className="form-input" type="text" placeholder="João Silva" />
              </div>

              <div className="form-group">
                <label className="form-label">WhatsApp</label>
                <input className="form-input" type="tel" placeholder="(11) 99999-9999" />
              </div>

              <div className="form-group">
                <label className="form-label">Veículo</label>
                <input className="form-input" type="text" placeholder="Ex: Honda Civic 2020" />
              </div>

              <div className="form-group">
                <label className="form-label">Serviço desejado</label>
                <select className="form-select">
                  <option value="">Selecione...</option>
                  <option>Alto-falantes / Subwoofer</option>
                  <option>Central Multimídia</option>
                  <option>Módulo de Potência</option>
                  <option>Viva-voz Bluetooth</option>
                  <option>Alarme / Rastreador</option>
                  <option>Revisão Elétrica</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea className="form-textarea" placeholder="Descreva o que você precisa..." />
              </div>

              <a
                href="https://wa.me/5511290166922?text=Olá! Quero um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                <MessageCircle size={15} />
                Enviar pelo WhatsApp
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                Você será redirecionado para o WhatsApp do Cláudio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
