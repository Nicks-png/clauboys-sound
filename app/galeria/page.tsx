export default function GaleriaPage() {
  const placeholders = [
    { label: 'Subwoofer instalado', featured: true },
    { label: 'Central multimídia' },
    { label: 'Módulo de potência' },
    { label: 'Fiação profissional' },
    { label: 'Acabamento interno' },
    { label: 'Sistema completo' },
    { label: 'Alto-falantes' },
    { label: 'Trabalho finalizado' },
  ]

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="section-eyebrow">Nosso trabalho</p>
          <h1>Galeria</h1>
          <p>Instalações realizadas pela equipe Clauboy's Sound. Em breve, fotos reais dos nossos trabalhos.</p>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="gallery-grid">
            {placeholders.map((p, i) => (
              <div key={i} className={`gallery-item${p.featured ? ' featured' : ''}`}>
                <div className="gallery-placeholder">
                  <div className="gallery-placeholder-icon">📸</div>
                  <div className="gallery-placeholder-text">{p.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '3rem', padding: '2rem', background: 'var(--card)',
            border: '1px solid var(--border)', borderRadius: 14, textAlign: 'center'
          }}>
            <p style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Em breve
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Estamos preparando as fotos dos nossos trabalhos. Enquanto isso, veja as avaliações no{' '}
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                Google
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
