import React from 'react'
import Layout from '../components/Layout'
import { Section, TwoCol } from '../components/Sections'
import Button from '../components/Button'

function Form(){
  return (
    <form className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input aria-label="Full Name" className="w-full h-11 px-3 rounded bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-neon"/>
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" aria-label="Email" className="w-full h-11 px-3 rounded bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-neon"/>
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea aria-label="Message" rows={5} className="w-full px-3 py-2 rounded bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-neon" />
      </div>
      <Button size="md">Send</Button>
    </form>
  )
}

function Locations(){
  const locs = [
    { city:'Neo-Seattle Flight Campus', desc:'Stratospheric test corridor with cryo-hardened hangars and a 3-km thermal vacuum tunnel.' },
    { city:'LunaGate Ops Node', desc:'Cislunar mission control mockup with relativistic timing lab and cold-atom clock arrays.' },
    { city:'Atacama Altitude Range', desc:'High desert facility for low-pressure avionics trials and silent flight demonstrations.' },
  ]
  return (
    <ul className="space-y-3 text-sm text-white/80">
      {locs.map(l => (<li key={l.city}><span className="font-medium text-white/90">{l.city}:</span> {l.desc}</li>))}
    </ul>
  )
}

export default function Contact(){
  return (
    <Layout>
      <Section kicker="Contact" title="Let’s align vectors">
        <TwoCol 
          left={<Form />}
          right={<div className="space-y-6">
            <div className="aspect-video w-full rounded bg-white/5 border border-white/10 flex items-center justify-center text-white/60">Map placeholder with orbital tracks</div>
            <Locations />
            <div className="p-4 rounded bg-white/5 border border-white/10">
              <h4 className="font-semibold">Emergency R&D Hotline</h4>
              <p className="text-sm text-white/80">For test anomalies or safety events, call +1-800-AETHER-24. Logged and monitored 24/7.</p>
            </div>
          </div>} 
        />
      </Section>
    </Layout>
  )
}
