import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import { Section } from './components/Sections'
import { TechCard, CardGrid } from './components/Cards'

function HomePage(){
  return (
    <>
      <Hero />
      <Section kicker="Flagship Systems" title="Architectures that bend the flight equation">
        <CardGrid>
          <TechCard title="Quantum Drive Engine" stage="Field-Tested" summary="A phase-coherent thrust core that modulates vacuum polarization to generate non-reactive impulse without propellant mass exchange." />
          <TechCard title="Zero-Gravity Ion Shaper" stage="Beta" summary="Electrostatic topology controller that sculpts charged particle streams into laminar thrust filaments for micro-g maneuvers." />
          <TechCard title="Tachyon Flight Controller" stage="Prototype" summary="Predictive control MCU leveraging subspace latency maps to pre-empt turbulence vectors before they manifest in classical space." />
        </CardGrid>
      </Section>
    </>
  )
}

export default function App(){
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}
