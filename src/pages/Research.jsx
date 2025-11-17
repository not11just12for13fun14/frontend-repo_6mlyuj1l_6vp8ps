import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Section } from '../components/Sections'
import Button from '../components/Button'

const timeline = [
  { year: '2018', event: 'Casimir cavity stability exceeds 12 minutes in vacuum micro-lab.' },
  { year: '2019', event: 'Phase-coherent resonance achieved across triple toroid array.' },
  { year: '2020', event: 'First micro-impulse recorded with null propellant exchange.' },
  { year: '2021', event: 'Ion shaper maintains coherence through 9g maneuver in parabolic flight.' },
  { year: '2022', event: 'Photonic thrust lattice demonstrates net momentum in thermal vacuum chamber.' },
  { year: '2023', event: 'Dark-vacuum energy harvester powers full avionics stack for 6 hours.' },
  { year: '2024', event: 'Chrono-core corrects relativistic drift in LEO testbed to 13 picoseconds.' },
  { year: '2025+', event: 'Field trials on uncrewed high-altitude platforms.' },
]

const pubs = Array.from({length:6}).map((_,i)=>({
  title: `Field Dynamics in Quantum-Layer Thrust ${i+1}`,
  authors: 'S. Halden, R. Kaito, M. Vance',
  abstract: 'We report on cross-domain coupling mechanisms enabling macroscopic impulse from sub-thermal vacuum fluctuations. Results indicate stable thrust vectors under cryogenic constraints.',
}))

function Ethics(){
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg">
      <button onClick={()=>setOpen(!open)} className="w-full text-left px-4 py-3 flex items-center justify-between">
        <span className="font-medium">Ethics & Safety Board</span>
        <span className="text-sm text-white/60">{open? 'Hide' : 'Read charter'}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-white/80 text-sm">
          Our board enforces non-weaponization clauses, environmental isolation standards, and multi-party review for any test exceeding 1 kN effective impulse. We require reversible experiments and transparent telemetry escrow with independent auditors.
        </div>
      )}
    </div>
  )
}

export default function Research(){
  return (
    <Layout>
      <Section kicker="Research & Development" title="Breakthroughs on a measured timeline">
        <div className="relative">
          <div className="border-l border-white/10 ml-2 pl-6 space-y-6">
            {timeline.map(t => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[11px] top-1 h-2 w-2 rounded-full bg-neon shadow-[0_0_16px_rgba(0,255,255,0.6)]" />
                <div className="text-sm text-white/60">{t.year}</div>
                <div className="font-medium">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section title="Governance">
        <Ethics />
      </Section>
      <Section title="Publications">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pubs.map((p,i)=> (
            <article key={i} className="p-5 rounded-lg bg-white/5 border border-white/10">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-xs text-white/60">{p.authors}</p>
              <p className="mt-3 text-sm text-white/80">{p.abstract}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg">Request Research Access</Button>
        </div>
      </Section>
    </Layout>
  )
}
