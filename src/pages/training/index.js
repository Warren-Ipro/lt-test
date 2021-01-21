import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bodyBG from './images/studio-bg.jpg'
import fred from './images/0V0A0248.jpg'


const Training = () => {
  const [isToggle, setToggle] = useState(false);

  const data = useStaticQuery(graphql`
    query TrainingQuery {
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
    console.log(isToggle)
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
        <nav className="-mt-20 w-full px-4 py-8">
          <Img 
            fluid={data.logo.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            className="h-8"
          />
        </nav>

        <section className="max-w-6xl mx-auto px-4 md:py-8 mb-4">
          <p className="text-2xl md:text-5xl font-bold text-center mb-4">The 3 Simple Steps To Generate Highly-Qualified Leads For Your Business For Pennies On The Dollar <br/> <span className="text-light-blue-500 italic">Fully Automated!</span></p>
          <p className="text-xl md:text-2xl text-center mb-6">We’ve Even Used This To Generate $6.29 Per Buyer Lead For BMW And It Works For ANY Industry</p>
          <div className="text-center mb-6">
            <button onClick={() => toggleModal()}><p className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-center text-2xl font-bold rounded ring ring-emerald-600 ring-offset-0 transform hover:-translate-y-1 transition-all duration-100 ease-in-out inline-block">Register Your Free Seat Now</p></button>
          </div>
          <div className="md:flex flex-row-reverse mb-4 items-center">
            <div className="md:w-1/2 mb-4 bg-white p-6 shadow-inner">
              <p className="text-2xl font-bold text-cool-gray-900 mb-4 text-center">In This Free Webinar, You Will Learn:</p>
              <ul className="fa-ul text-cool-gray-700">
                <li className="my-4"><FontAwesomeIcon  icon={['fas', 'check-square']} size="1x" listItem className="text-lt-blue-600"/>How You Can Finally <b><u>Stop Cold-Calling Dead Leads</u></b> And Forever End Your Struggle To <u>Generate High-Quality Leads For Your Business On Auto-Pilot</u></li>
                <li className="my-4"><FontAwesomeIcon  icon={['fas', 'check-square']} size="1x" listItem className="text-lt-blue-600"/>The <b><u>3-Step Automated Lead Machine</u></b> That Any Businesses Can Clone To Generate Leads For <u>Pennies On The Dollar</u></li>
                <li className="my-4"><FontAwesomeIcon  icon={['fas', 'check-square']} size="1x" listItem className="text-lt-blue-600"/>FULL DEMO: See How Our Automated Lead Machine Requires <b><u>No Fancy Website</u></b> To Constantly Generate A Flood Of <u>Highly-Qualified Leads To Fill Your Sales Pipeline</u></li>
              </ul>
            </div>
            <div className="md:w-1/2 mb-4">
              <img className="mb-2 border-4 border-white shadow-lg" src={fred} alt="Fred Lam"/>
              <p className="italic">Fred Lam is the founder of LeadsTunnel and iPro Academy and has helped businesses making over $43 million in sales.</p>
            </div>
          </div>
          <button onClick={() => toggleModal()} className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-center text-3xl font-bold rounded ring ring-emerald-600 ring-offset-0 transform hover:-translate-y-1 transition-all duration-100 ease-in-out block mx-auto"><p>Register Your Seat For This Free Training Now</p></button>
        </section>

        <div id="modal" className={`${isToggle !== true ? "hidden" : null } fixed z-10 inset-0 overflow-y-auto transition ease-in-out duration-200`}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
            
            <div className="fixed inset-0 transition-opacity modal-toggle">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out duration-200 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div style={{width: "100%", height: "1000px"}}><iframe style={{width: "100%", height: "100%", border: "0"}} src="https://joinnow.live/embed/s/Tsp30Z?layout=styled-0" title="opt-in"></iframe></div>
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

export default Training
