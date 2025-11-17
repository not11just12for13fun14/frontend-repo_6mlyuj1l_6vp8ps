import React from 'react'
import GlobalTheme from './GlobalTheme'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }){
  return (
    <GlobalTheme>
      <Navbar />
      <main className="relative z-0">{children}</main>
      <Footer />
    </GlobalTheme>
  )
}
