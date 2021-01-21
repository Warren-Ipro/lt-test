import React from 'react';
import { Link } from 'gatsby';

function compliantLinkSidebar() {
  return (
    <div className="flex flex-col sticky top-32">
      <p className="font-bold text-black uppercase tracking-wider px-4 mb-3 ">Compliance Pages</p>
      <Link to="/affiliate-terms" activeClassName="text-lt-blue-400 bg-lt-blue-50 rounded-lg rounded-br-none"  className="hover:text-lt-blue-500 px-4 py-3">Affiliate Terms</Link>
      <Link to="/anti-spam" activeClassName="text-lt-blue-400 bg-lt-blue-50 rounded-lg rounded-br-none"  className="hover:text-lt-blue-500 px-4 py-3">Anti Spam</Link>
      <Link to="/dmca-notice"  activeClassName="text-lt-blue-400 bg-lt-blue-50 rounded-lg rounded-br-none" className="hover:text-lt-blue-500 px-4 py-3">DMCA Notice</Link>
      <Link to="/privacy-policy"  activeClassName="text-lt-blue-400 bg-lt-blue-50 rounded-lg rounded-br-none" className="hover:text-lt-blue-500 px-4 py-3">Privacy Policy</Link>
      <Link to="/terms-of-use"  activeClassName="text-lt-blue-400 bg-lt-blue-50 rounded-lg rounded-br-none" className="hover:text-lt-blue-500 px-4 py-3">Terms Of Use</Link>
    </div>
  )
}

export default compliantLinkSidebar
