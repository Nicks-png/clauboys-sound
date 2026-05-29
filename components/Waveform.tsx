'use client'

const BARS = [0.35, 0.65, 1, 0.75, 0.5, 0.85, 0.45, 0.9, 0.6, 0.4, 0.7, 0.55]

export default function Waveform() {
  return (
    <div className="waveform" aria-hidden="true">
      {BARS.map((h, i) => (
        <div
          key={i}
          className="waveform-bar"
          style={{
            height: `${h * 28}px`,
            animationName: 'wave-bar',
            animationDuration: `${0.6 + (i % 4) * 0.15}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${i * 0.07}s`,
            opacity: 0.7 + h * 0.3,
          }}
        />
      ))}
    </div>
  )
}
