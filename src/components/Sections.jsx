import React from 'react'

export function Section({ title, kicker, children, className='' }){
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {kicker && <p className="text-xs uppercase tracking-widest text-neon/80 mb-3">{kicker}</p>}
        {title && <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

export function TwoCol({ left, right }){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}
