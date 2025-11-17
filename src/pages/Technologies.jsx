import React from 'react'
import Layout from '../components/Layout'
import { Section } from '../components/Sections'

const tech = [
  {
    name: 'Q-Flux Propulsion Matrix',
    stage: 'Field-Tested',
    summary: 'Nested resonators lock phase with local vacuum modes, converting quantum fluctuations into directional momentum exchange.',
    diagram: 'Concentric toroidal rings with counter-rotating phase coils; central cavity with tunable Casimir plates.',
  },
  {
    name: 'Entangled Ion Stabilizer',
    stage: 'Beta',
    summary: 'Entanglement-based feedback synchronizes ion phase-space, preventing decoherence during high-acceleration maneuvers.',
    diagram: 'Dual ion traps connected via photonic entanglement channels; error-correction nodes at vertices.',
  },
  {
    name: 'Photonic Thrust Lattice',
    stage: 'Prototype',
    summary: 'Photonic crystal array redirects momentum via Brillouin scattering, producing net thrust with minimal waste heat.',
    diagram: 'Hexagonal lattice waveguides with gradient index; phase shifters along edges.',
  },
  {
    name: 'Dark-Vacuum Energy Harvester',
    stage: 'Prototype',
    summary: 'Parametric coupling harvests energy differentials across vacuum domains, stabilizing onboard systems without solar dependency.',
    diagram: 'Broadband metamaterial panel with embedded Josephson junction mesh.',
  },
  {
    name: 'Chrono-Aligned Guidance Core',
    stage: 'Research',
    summary: 'Time-indexed sensor fusion aligns navigation frames across local temporal gradients, reducing drift in relativistic corridors.',
    diagram: 'Ring of atomic clocks around a central predictive core; multi-path Kalman integrators.',
  },
]

function ComparisonTable(){
  const headers = ['System','Stage','Power Draw','Thermal Signature','Response Latency']
  const rows = [
    ['Q-Flux Propulsion Matrix','Field-Tested','1.2 MW','Ultra-low','< 3 µs'],
    ['Entangled Ion Stabilizer','Beta','350 kW','Low','< 6 µs'],
    ['Photonic Thrust Lattice','Prototype','500 kW','Moderate','< 8 µs'],
    ['Dark-Vacuum Energy Harvester','Prototype','Self-optimizing','Negligible','n/a'],
    ['Chrono-Aligned Guidance Core','Research','120 kW','Low','< 2 µs'],
  ]
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-separate border-spacing-y-2">
        <thead className="text-white/70">
          <tr>
            {headers.map(h=> <th key={h} className="text-left px-4 py-2">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=> (
            <tr key={i} className="bg-white/5 hover:bg-white/10 transition">
              {r.map((c,j)=> <td key={j} className="px-4 py-3">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Technologies(){
  return (
    <Layout>
      <Section kicker="Technologies" title="Proprietary systems with measurable anomalies">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map(t => (
            <article key={t.name} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-white/70">{t.summary}</p>
              <p className="mt-3 text-xs text-white/60"><span className="text-white/80">Diagram concept:</span> {t.diagram}</p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-wide px-2 py-1 rounded bg-neon/15 text-neon border border-neon/30">{t.stage}</span>
            </article>
          ))}
        </div>
      </Section>
      <Section title="System comparison">
        <ComparisonTable />
      </Section>
    </Layout>
  )
}
