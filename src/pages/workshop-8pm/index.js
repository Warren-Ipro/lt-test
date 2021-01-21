import React  from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import googleCal from './images/google.svg'
import iCal from './images/icalendar.svg'
import outlookCal from './images/outlook.svg'
import print from './images/print.svg'
import Flip from '../../components/flip'

const Workshop8pm = () => {
  const data = useStaticQuery(graphql`
    query Workshop8pmQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      logo: file(relativePath: {eq: "LT-logo-white.png"}) {
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

  return (
    <Layout navbar={false}>
      <Helmet>
        <title>{metadata.title} | Thank You</title>
        <meta name="description" content="How To Quickly Build A 10,000 Person Email List Without Using A Single Landing Page & Turn It Into Passive Cash Flow"></meta>
      </Helmet>
      <nav className="fixed top-0 w-full px-4 py-8 bg-lt-blue-500 shadow z-50">
        <Img 
          fluid={data.logo.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="h-8"
        />
      </nav>

      <section>
        <div className="max-w-5xl mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 pt-10 px-4">
            <div className="text-center">
              <p className="text-xl lg:text-3xl text-blue-600 font-bold mb-2">Congratulations, Your Seat Is Saved!</p>
              <p className="lg:font-bold text-base lg:text-xl mb-4">Go check your email for your join link!</p>
            </div>
            <div className="embed-responsive aspect-ratio-16/9 mb-8">
              <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/358170903" title="LeadsTunnel Sales Video"></iframe>
            </div>
            <div className="divide-y divide-dashed divide-lt-dark-500">
              <ul className="fa-ul p-4 ml-2">
                <li className="font-bold"><FontAwesomeIcon  icon={['fas', 'desktop']} listItem size="1x" className="md:mr-2"/>Title:</li>
                <p>How To Quickly Build A 10,000 Person Email List Without Using A Single Landing Page & Turn It Into Passive Cash Flow</p>
              </ul>
              <ul className="fa-ul p-4 ml-2">
                <li className="font-bold"><FontAwesomeIcon  icon={['far', 'user']} listItem size="1x" className="md:mr-2"/>Presenter:</li>
                <p>Fred Lam</p>
              </ul>
              <ul className="fa-ul p-4 ml-2">
                <li className="font-bold"><FontAwesomeIcon  icon={['far', 'calendar']} listItem size="1x" className="md:mr-2"/>Time:</li>
                <p>Wednesday, September 25th @ 8pm EST</p>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 bg-gray-100 pt-10">
            <div className="text-center text-xl lg:text-2xl font-bold mb-4">
              <p className="text-blue-gray-700">Join The Live Workshop</p>
              <p className="text-blue-gray-700">Wednesday, September 25th @ 8pm EST</p>
            </div>
            <div className="countdown py-2 px-4">
              <Flip value={"2019-09-25T20:00:00-04:00"}/>
            </div>
            <div className="bg-lt-blue-500 text-white p-4 text-center mb-2">
              <p className="font-bold text-xl lg:text-2xl">What To Do Now <br/> <span className="uppercase">STEP #1: MARK YOUR CALENDAR</span></p>
            </div>
            <div className="p-4 px-16">
              <div className="grid grid-cols-2 gap-2">
                  <a href="https://www.addevent.com/event/NP3878465+google" target="_blank" rel="noreferrer">
                    <img className="w-full" src={googleCal} alt="Add to Google"/>
                  </a>
                  <a href="https://www.addevent.com/event/NP3878465+apple" target="_blank" rel="noreferrer">
                    <img className="w-full" src={iCal} alt="Add to iCalendar"/>
                  </a>
                  <a href="https://www.addevent.com/event/NP3878465+outlook" target="_blank" rel="noreferrer">
                    <img className="w-full" src={outlookCal} alt="Add to Outlook Calendar"/>
                  </a>
                  <button onClick={() => {window.print()}}>
                    <img className="w-full" src={print} alt="Print"/>
                  </button>
              </div>
            </div>
            <div className="bg-lt-blue-500 text-white p-4 text-center mb-2">
              <p className="font-bold text-xl lg:text-2xl"><span className="uppercase">STEP #2: BE THERE LIVE!</span></p>
            </div>
            <div className="p-4">
              <p className="text-center text-xl font-bold text-blue-gray-700">On Wednesday, September 25th @ 7:45PM EST, check your email for your join link to join us live!</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center my-8 px-4 text-lt-dark-600">
          <p>Disclaimer: Results may not be typical nor expected for every person. Please note that all your results are based on your effort and dedication to what is taught in our workshop. We are not affiliated with Facebook™ in any way. All information provided on this website is based on best practices and for educational-purposes only.</p>
        </div>
      </section>
      
    </Layout>
  )
}

export default Workshop8pm
