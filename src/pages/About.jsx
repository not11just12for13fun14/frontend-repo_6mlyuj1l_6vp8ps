import React from 'react'
import Layout from '../components/Layout'
import { Section, TwoCol } from '../components/Sections'

const leaders = [
  { name:'Dr. Selene Halden', role:'Founder & CEO', bio:'Former quantum systems lead at Orbital North. Pioneered phase-locked vacuum engines and authored 40+ papers on coherent field dynamics.' },
  { name:'Ryo Kaito', role:'Chief Architect', bio:'Designed flight control stacks for hypersonic demonstrators. Specializes in predictive guidance through high-gradient environments.' },
  { name:'Mara Vance, PhD', role:'Head of Materials', bio:'Expert in metamaterials and cryo-ceramics. Led the fabrication of our Q-Flux toroid arrays.' },
  { name:'Anika Sorensen', role:'VP Ethics & Compliance', bio:'Space law scholar and biosafety advocate ensuring responsible deployment across all theaters.' },
  { name:'Ilan Duarte', role:'Director of Flight Systems', bio:'Built avionics for autonomous stratospheric platforms; focuses on resilient telemetry and fail-safe redundancy.' },
]

export default function About(){
  return (
    <Layout>
      <Section kicker="Origin Story" title="Founded to answer a simple question: what if thrust didn’t need fuel?">
        <TwoCol 
          left={<p className="text-white/80">Aetherion Dynamics began in a borrowed lab with a vacuum chamber, a stack of rejected superconducting coils, and a refusal to accept propulsion as a solved problem. We pursued an unfashionable hypothesis: that vacuum fluctuations could be phase-aligned to produce macroscopic impulse. After years of null results, a 2 a.m. calibration error produced an anomaly we could not explain away. We have been explaining—and engineering—it ever since.</p>}
          right={<p className="text-white/70">Today, our platforms integrate quantum-layer field control with aerospace-grade reliability. We focus on silent, precise, and energy-aware thrust, enabling flight regimes from microgravity formation to high-altitude pseudo-orbital corridors. We build for measurable outcomes, independent verification, and a future where access to the sky is as clean as it is routine.</p>}
        />
      </Section>
      <Section title="Leadership">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map(l => (
            <article key={l.name} className="p-6 rounded-lg bg-white/5 border border-white/10">
              <h3 className="font-semibold">{l.name}</h3>
              <p className="text-sm text-white/60">{l.role}</p>
              <p className="mt-3 text-sm text-white/80">{l.bio}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Principles">
        <div className="grid md:grid-cols-3 gap-6">
          <article className="p-6 rounded-lg bg-white/5 border border-white/10"><h4 className="font-semibold mb-2">Mission</h4><p className="text-white/80 text-sm">Deliver clean, controllable thrust at any scale by engineering the quantum substrate of space.</p></article>
          <article className="p-6 rounded-lg bg-white/5 border border-white/10"><h4 className="font-semibold mb-2">Vision</h4><p className="text-white/80 text-sm">Make precision flight ubiquitous—from satellites that sip power to aircraft that whisper across the stratosphere.</p></article>
          <article className="p-6 rounded-lg bg-white/5 border border-white/10"><h4 className="font-semibold mb-2">Scientific Principles</h4><p className="text-white/80 text-sm">Reproducibility, energy accountability, fail-safe design, and independent verification before claims.</p></article>
        </div>
      </Section>
    </Layout>
  )
}
