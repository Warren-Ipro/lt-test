import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout';
import freeTrainingStyles from './freetraining.module.css'

import bodyBG from './images/studio-bg.jpg'

const LtuWebReg = () => {
  const [isToggle, setToggle] = useState(false);

  const data = useStaticQuery(graphql`
    query LtuWebRegQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      logo: file(relativePath: {eq: "LT-logo-primary.png"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const metadata = data.site.siteMetadata

  const toggleModal = () => {
    setToggle( toggle => !toggle )
  }

  const escFunction = (event) => {
    if(isToggle === true ) {
      if(event.keyCode === 27) {
        setToggle( toggle => !toggle )
      }
    } else {
      return(null)
    }
  }
  
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });
  
  return (
    <section className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bodyBG})` }}>
      <Layout navbar={false}>
        <Helmet>
          <title>{metadata.title} | LeadsTunnel Univeristy Webinar Registration</title>
          <meta name="description" content="How To Create Your Automated Lead Machine In 3 Simple Steps"></meta>
        </Helmet>
        <nav className="fixed top-0 w-full px-4 py-8">
          <Img 
            fluid={data.logo.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            className="h-8"
          />
        </nav>
        <section className="container mx-auto flex justify-center items-center px-4 py-8">
          <div className="box max-w-2xl mx-auto overflow-hidden rounded-lg text-center text-white shadow-xl">
            <div className="header bg-gray-900 p-4 border-b-4 border-blue-100">
              <h2 className="font-bold text-xl">FREE WEBINAR</h2>
            </div>
            <div className="body bg-gray-800 py-6 px-4">
              <h1 className={`${freeTrainingStyles.headingtext} text-3xl lg:text-5xl font-bold leading-none mb-6 tracking-in-expand`}>How To Create Your Automated Lead Machine In 3 Simple Steps</h1>
              <p className="text-lg lg:text-xl leading-tight font-medium mb-2">This Automated Lead Machine Is Proven To Flood Your Sales Pipeline With Highly-Quality Leads On Auto-Pilot To Skyrocket Your Sales During These Unprecedented Times</p>
              <p className="text-xs lg:text-sm text-cyan-400 mb-4">(Yes, It’s Real And It’s Easy. Sign Up For Our Next Webinar To Learn How)</p>
              <button onClick={() => toggleModal()} className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-center text-2xl font-bold rounded ring ring-emerald-600 ring-offset-0 transform hover:-translate-y-1 transition-all duration-100 ease-in-out block mx-auto"><p>Register Your Seat For This Free Training Now</p></button>
            </div>
          </div>
        </section>
        <div id="modal" className={`${isToggle !== true ? "hidden" : null} fixed z-10 inset-0 overflow-y-auto transition ease-in-out duration-200`}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity modal-toggle">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out duration-200 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div style={{width: "100%", height: "1000px"}}>
                    <iframe style={{width: "100%", height: "100%", border: "0"}} src="https://joinnow.live/embed/s/Tsp30Z?layout=styled-0" title="form"></iframe>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button onClick={() => toggleModal()} type="button" className="modal-toggle inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center my-8 px-4 text-lt-dark-600">
          <p>Disclaimer: Results may not be typical nor expected for every person. Please note that all your results are based on your effort and dedication to what is taught in our workshop. We are not affiliated with Facebook™ in any way. All information provided on this website is based on best practices and for educational-purposes only.</p>
        </div>
      </Layout>
    </section>
  )
}

export default LtuWebReg
