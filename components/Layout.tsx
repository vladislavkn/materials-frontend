import React, { PropsWithChildren } from 'react'
import Footer from './Footer'
import Nav from './Nav'

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-full flex flex-col">
    <Nav />
    <main className="container flex-grow">{children}</main>
    <Footer />
  </div>
)

export default Layout
