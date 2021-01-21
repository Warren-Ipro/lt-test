import React, { Component } from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';

import Img from 'gatsby-image';
import Button from './button';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileNavToggled: false,
    }
  }

  toggleMenu = () => {
    this.state.mobileNavToggled === true ? this.setState({mobileNavToggled: false}) : this.setState({mobileNavToggled: true});
  }

  links = [
    {
      name: 'Features',
      path: '/features'
    },
    {
      name: 'Integrations',
      path: '/integrations'
    },
    {
      name: 'Pricing',
      path: '/pricing'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Blog',
      path: 'https://blog.leadstunnel.com/'
    },
  ]
  
  render() {

    const isToggled = this.state.mobileNavToggled;
    let menuButton;
    if(isToggled) {
      menuButton = <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    } else {
      menuButton = <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
    }

    return (
      <div className="w-full absolute lg:fixed top-0 z-50 bg-white">
        <nav className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center py-5 lg:py-7 px-4 lg:px-12 text-sm border-b border-blue-gray-200 relative">
            <div className="flex justify-between lg:justify-self-start">
              <a href="/" className="h-10 w-16">
                <StaticQuery
                  query={graphql`
                    query {
                      file(relativePath: {eq: "LT-icon.png"}) {
                        id
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `  
                  }
                  render={ data => (
                    <Img 
                      className="h-10 object-left bg-left"
                      imgStyle={{objectFit: 'contain'}} 
                      fluid={data.file.childImageSharp.fluid}
                    />
                  )}
                />
              </a>
              <div className="lg:hidden justify-self-end">
                <button id="mobile-nav-toggle" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={() => {this.toggleMenu()}}>
                  <span className="sr-only">Open main menu</span>
                  {menuButton}
                </button>
              </div>
            </div>
            <div className="hidden lg:block md:justify-self-cente">
              <ul className="md:flex">
                {this.links.map(( link, i ) => {
                  if( link.path.startsWith('/') === true ) {
                    return (<li key={i} className="p-2 mx-2 hover:text-lt-blue-600"><Link to={`${link.path}`} activeClassName="font-bold">{link.name}</Link></li>)
                  } else {
                    return (<li key={i} className="p-2 mx-2 hover:text-lt-blue-600"><a href={`${link.path}`}>{link.name}</a></li>)
                  }
                })}
              </ul>
            </div>
            <div className="hidden lg:block md:justify-self-end">
              <ul className="md:flex">
                <li className="p-2 mx-2 hover:text-lt-blue-600"><a href="https://app.leadstunnel.net/users/sign_in">Sign In</a></li>
                <li className="">
                  <Button 
                    text="Start Free Trail" 
                    path="/pricing"
                  />
                </li>
              </ul>
            </div>
            {/* mobile nav Button and dropdown */}
            <div id="mobile-menu" className={`lg:hidden pt-4 w-full absolute top-16 left-0 bg-white border-b border-blue-gray-200 pb-2 shadow-lg z-50 overflow-hidden transition-max-h duration-1000 ease-in-out max-h-0`} style={{ maxHeight: `${this.state.mobileNavToggled !== false ? "9999px" : "0px"}` }}>
              <div className="lg:justify-self-center">
                <ul className="lg:flex">
                  {this.links.map(( link, i ) => {
                    if( link.path.startsWith('/') === true ) {
                      return (<li key={i} className="p-4 mx-2 hover:text-lt-blue-600"><Link to={`${link.path}`} activeClassName="font-bold">{link.name}</Link></li>)
                    } else {
                      return (<li key={i} className="p-4 mx-2 hover:text-lt-blue-600"><a href={`${link.path}`}>{link.name}</a></li>)
                    }
                  })}
                </ul>
              </div>
              <div className="lg:justify-self-end">
                <ul className="lg:flex">
                  <li className="p-4 mx-2 hover:text-lt-blue-600"><a href="https://app.leadstunnel.net/users/sign_in">Sign In</a></li>
                  <li className="my-2 mx-4">
                    <Button 
                      text="Start Free Trail" 
                      path="/pricing/"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;