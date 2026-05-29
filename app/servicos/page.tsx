import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const services = [
  {
    icon: '🔊',
    name: 'Alto-falantes & Subwoofers',
    desc: 'Instalação de alto-falantes coaxiais, componentes, woofers e subwoofers das principais marcas. Seu som com graves precisos e médios cristalinos.',
    items: ['Alto-falantes coaxiais', 'Sistemas componentes', 'Subwoofers e caixas', 'Tweeters de alta potência'],
  },
  {
    icon: '📺',
    name: 'Central Multimídia',
    desc: 'Centrais Android com tela sensível ao toque, GPS integrado, Bluetooth, espelhamento de celular (Android Auto / CarPlay) e câmera de ré.',
    items: ['Android Auto & Apple CarPlay', 'GPS integrado', 'Bluetooth e USB', 'Câmera de ré inclusa'],
  },
  {
    icon: '⚡',
    name: 'Módulos de Potência',
    desc: 'Amplificadores e módulos stand-alone para graves poderosos e médios com clareza. Instalação com cabeamento de qualidade para zero ruído.',
    items: ['Módulos 1 canal (mono)', 'Amplificadores multicanal', 'Cabeamento premium', 'Ajuste técnico do som'],
  },
  {
    icon: '🎙️',
    name: 'Viva-voz Bluetooth',
    desc: 'Kits mãos-livres para chamadas seguras enquanto dirige. Compatível com todos os smartphones, fácil de usar e instalação limpa.',
    items: ['Pareamento automático', 'Microfone de alta clareza', 'Compatível Android e iOS', 'Instalação invisible'],
  },
  {
    icon: '🔧',
    name: 'Revisão Elétrica de Som',
    desc: 'Diagnóstico completo do sistema de áudio do seu veículo. Identificamos chiados, falhas e problemas elétricos para seu som funcionar perfeitamente.',
    items: ['Diagnóstico de ruídos', 'Revisão de fiação', 'Troca de fusíveis e relés', 'Teste completo do sistema'],
  },
  {
    icon: '🛡️',
    name: 'Alarmes & Rastreadores',
    desc: 'Proteção para o seu veículo com alarmes de última geração, travas elétricas e rastreadores com monitoramento em tempo real.',
    items: ['Alarmes com sensor de presença', 'Trava elétrica nas portas', 'Rastreadores GPS', 'Bloqueador de ignição'],
  },
]

export default function ServicosPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">O que oferecemos</p>
          <h1>Nossos Serviços</h1>
          <p>Instalação técnica e produtos de qualidade para transformar o som do seu carro.</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {services.map(s => (
              <div key={s.name} className="service-card" style={{ padding: '2rem' }}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc" style={{ marginBottom: '1.25rem' }}>{s.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {s.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 800 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Não encontrou o que procura? Entre em contato e veja o que podemos fazer pelo seu carro.
            </p>
            <a
              href="https://wa.me/5511290166922?text=Olá! Vim pelo site e quero um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={15} />
              Pedir Orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
