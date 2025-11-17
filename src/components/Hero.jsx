import React from 'react'
import Spline from '@splinetool/react-spline'
import Button from './Button'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="text-neon/80 tracking-widest text-xs uppercase mb-4">Aetherion Dynamics</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Redefining Propulsion Through
            <span className="block text-neon drop-shadow-[0_0_24px_rgba(0,255,255,0.35)]">Quantum-Layer Engineering.</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl">We integrate quantum-scale field dynamics with aerospace architectures to deliver thrust profiles previously considered non-physical. The result: precision, silence, and delta-v on demand.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="/technologies" size="lg">Explore Technologies</Button>
            <Button as="a" href="/partners" variant="outline" size="lg">Partner With Us</Button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
    </section>
  )
}
