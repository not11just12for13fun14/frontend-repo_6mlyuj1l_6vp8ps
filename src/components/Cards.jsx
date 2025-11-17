import React from 'react'

export function TechCard({ title, summary, stage }){
  return (
    <article className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon/40 transition overflow-hidden">
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(600px_circle_at_var(--x,_50%)_var(--y,_50%),rgba(0,255,255,0.15),transparent_40%)]" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/70 mb-4">{summary}</p>
      <span className="inline-flex items-center text-[11px] uppercase tracking-wide px-2 py-1 rounded bg-neon/15 text-neon border border-neon/30">{stage}</span>
    </article>
  )
}

export function CardGrid({ children }){
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
}
