import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Home' },
    { to: '/technologies', label: 'Technologies' },
    { to: '/research', label: 'R&D' },
    { to: '/about', label: 'About' },
    { to: '/careers', label: 'Careers' },
    { to: '/partners', label: 'Partner Portal' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-neon/20 ring-1 ring-neon/40 shadow-[0_0_24px_rgba(0,255,255,0.35)]" />
          <span className="font-semibold tracking-wide">Aetherion Dynamics</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({isActive}) => `relative text-sm text-white/80 hover:text-white transition ${isActive ? 'text-neon' : ''}`}>
              <span className="hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">{l.label}</span>
            </NavLink>
          ))}
          <Button variant="outline" size="sm">Request Access</Button>
        </div>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-white/10">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={()=>setOpen(false)} className="block py-2 text-white/80 hover:text-white">{l.label}</NavLink>
          ))}
          <Button className="w-full" variant="outline" size="sm">Request Access</Button>
        </div>
      )}
    </header>
  )
}
