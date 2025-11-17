import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const links = [
    {label:'Privacy', to:'/legal/privacy'},
    {label:'Terms', to:'/legal/terms'},
    {label:'Security', to:'/legal/security'},
  ]
  const nav = [
    {label:'Home', to:'/'},
    {label:'Technologies', to:'/technologies'},
    {label:'R&D', to:'/research'},
    {label:'About', to:'/about'},
    {label:'Careers', to:'/careers'},
    {label:'Partner Portal', to:'/partners'},
    {label:'Contact', to:'/contact'},
  ]
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-neon/20 ring-1 ring-neon/40" />
            <span className="font-semibold tracking-wide">Aetherion Dynamics</span>
          </div>
          <p className="mt-3 text-sm text-white/60">Quantum-integrated aerospace propulsion systems for the next century of flight.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-white/70">
              {nav.map(i=> <li key={i.to}><Link to={i.to} className="hover:text-white hover:underline underline-offset-4">{i.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/70">
              {links.map(i=> <li key={i.to}><Link to={i.to} className="hover:text-white hover:underline underline-offset-4">{i.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input aria-label="Email" placeholder="you@domain.com" className="flex-1 h-11 px-4 rounded-md bg-white/5 border border-white/15 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-neon"/>
            <button className="h-11 px-4 rounded-md bg-neon text-black font-medium">Subscribe</button>
          </form>
          <p className="mt-3 text-xs text-white/50">By subscribing, you agree to our privacy policy.</p>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-white/50 border-t border-white/10">© {new Date().getFullYear()} Aetherion Dynamics. All rights reserved.</div>
    </footer>
  )
}
