import React from 'react'
import Header from './header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </div>
  )
}

export default Layout