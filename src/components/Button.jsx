import React from 'react'
import { cn } from '../utils/cn'

export default function Button({ as: Comp = 'button', variant = 'primary', size = 'md', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-neon/90 hover:bg-neon text-black shadow-[0_0_24px_rgba(0,255,255,0.35)]',
    ghost: 'bg-transparent hover:bg-white/5 text-white',
    outline: 'border border-white/15 hover:border-white/30 text-white bg-white/0 hover:bg-white/5',
    subtle: 'bg-white/5 hover:bg-white/10 text-white/90',
  }
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-base',
    lg: 'h-12 px-6 text-lg',
  }
  return (
    <Comp className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  )
}
