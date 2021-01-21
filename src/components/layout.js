import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas , far , fab )

const Layout = ({ children, navbar }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-20 lg:pt-24">
      {navbar === false ? null : <Navbar />}
      <div className="mb-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
