import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Section, TwoCol } from '../components/Sections'
import Button from '../components/Button'

function Login(){
  return (
    <div className="p-6 rounded-lg bg-white/5 border border-white/10">
      <h3 className="font-semibold mb-3">Partner Login</h3>
      <form className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" aria-label="Email" placeholder="partners@aetherion.ai" className="w-full h-11 px-3 rounded bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-neon" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" aria-label="Password" className="w-full h-11 px-3 rounded bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-neon" />
        </div>
        <Button className="w-full">Sign In</Button>
      </form>
    </div>
  )
}

function DashboardMock(){
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="p-5 rounded-lg bg-white/5 border border-white/10 lg:col-span-2">
        <h4 className="font-semibold mb-2">Project Status</h4>
        <div className="space-y-3">
          {[
            ['Q-Flux Integration',82],
            ['Ion Shaper Rev C',46],
            ['Photonic Lattice Thermal',61],
            ['Chrono-Core Firmware',28],
          ].map(([label,p])=> (
            <div key={label}>
              <div className="flex justify-between text-sm mb-1"><span>{label}</span><span>{p}%</span></div>
              <div className="h-2 bg-white/10 rounded">
                <div className="h-2 rounded bg-neon" style={{width:`${p}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-lg bg-white/5 border border-white/10">
        <h4 className="font-semibold mb-2">Secure Messages</h4>
        <div className="space-y-3 text-sm text-white/80">
          <p><span className="text-neon">[Encrypted]</span> Telemetry escrow link updated for Flight-27.</p>
          <p><span className="text-neon">[Encrypted]</span> NDA v3.4 countersigned. Access tier raised to Beta.</p>
        </div>
      </div>
      <div className="p-5 rounded-lg bg-white/5 border border-white/10 lg:col-span-3">
        <h4 className="font-semibold mb-2">Download Center</h4>
        <ul className="list-disc list-inside text-sm text-white/80">
          <li>Whitepaper: Quantum-Layer Thrust Fundamentals (PDF)</li>
          <li>Interface Spec: Tachyon Flight Controller (PDF)</li>
          <li>Environmental Report: Thermal Vacuum Procedures (PDF)</li>
        </ul>
      </div>
    </div>
  )
}

export default function Partners(){
  const [authed] = useState(false)
  return (
    <Layout>
      <Section kicker="Partner Portal" title="A shared window into development">
        <TwoCol 
          left={<Login />}
          right={authed ? <DashboardMock /> : <div className="p-6 rounded-lg bg-white/5 border border-white/10"><p className="text-white/80">Sign in to view dashboards, download whitepapers, and exchange secure messages. The portal supports telemetry escrow and role-based access.</p></div>} 
        />
      </Section>
    </Layout>
  )
}
