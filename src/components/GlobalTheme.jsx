import React from 'react'

export default function GlobalTheme({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070A12] to-[#0A0F1E] text-white selection:bg-neon/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(0,120,255,0.05),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(0,40,120,0.06),transparent_35%)]" />
      </div>
      {children}
    </div>
  )
}
