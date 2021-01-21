import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import content1 from './images/content1.jpg'
import content2 from './images/content2.jpg'
import content3 from './images/content3.jpg'
import email from './images/email-webinar.svg'
import optinDark from './images/optin-dark.svg'
import website from './images/website.svg'


const LtStrategy1 = () => {
  const data = useStaticQuery(graphql`
    query LtStrategy1Query {
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
        <title>{metadata.title} | LT Strategy</title>
        <meta name="description" content="Beginner-Friendly Way To Quickly Build An Email List To Profit Online Without Using A Landing Page"></meta>
        <script src="https://events.genndi.com/register.evergreen.extra.js" language="javascript" type="text/javascript" async></script>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v4.0"></script>
      </Helmet>
      <nav className="fixed top-0 w-full px-4 py-8 bg-lt-blue-500 shadow z-50">
        <Img 
          fluid={data.logo.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="h-8"
        />
      </nav>
      <section className="py-8" style={{background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='390' height='390' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' fill-opacity='0.22' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E")`}}>
        <div className="max-w-6xl mx-auto mb-4 px-4">
          <div className="text-center mb-4 py-4">
            <p className="font-bold text-xl lg:text-5xl mb-4 leading-relaxed">Beginner-Friendly Way To Quickly Build An Email List To Profit Online <span class="highlight active">Without Using A Landing Page</span></p>
            <p class="mb-4 text-base lg:text-2xl">Follow The Step-By-Steps In This Free Video Training To Start Building Your Email Empire Even If You Have Never Done So Before - Guaranteed!</p>
            <button type="button" className="block lg:hidden mx-auto" title="regpopbox_169105139238450241_285ef06a95">
              <div className="dates">
                <p className="text-lt-blue-500 font-bold uppercase underline text-lg">Yes! Save My Free Seat</p>
              </div>
            </button>
          </div>
          <div className="grid grid-cols-12 gap-2 lg:gap-6 auto-rows-fr">
            <div className="col-span-12 lg:col-span-9 row-span-3 row-start-1">
              <div className="embed-responsive aspect-ratio-16/9 mb-2">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/358170903" title="LeadsTunnel Sales Video"></iframe>
              </div>
              <div className="bg-blue-200 rounded border border-blue-300 overflow-hidden flex flex-row items-center">
                <div className="bg-blue-600 h-12 w-12 flex justify-center items-center text-white mr-4">
                  <FontAwesomeIcon  icon={['fas', 'bell']} size="1x" className=""/>
                </div>
                <p className="text-blue-700 text-base lg:text-lg">
                  Watch This Free Video - Do The Assignment & Watch Your Email Business Grow
                </p>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-3 row-start-4 lg:row-start-1 row-span-2 lg:row-span-1 relative">
              <div className="w-full h-full flex justify-center items-center absolute">
                <FontAwesomeIcon  icon={['fas', 'play-circle']} size="3x" className="text-lt-blue-600"/>
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full object-cover" src={content1} alt="content 1"/>
              </div>
              <div className="p-1 text-white bg-lt-blue-500 text-center text-xs lg-text-base absolute bottom-0 w-full">
                <p>#1 - Email List Building Secret</p>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-3 row-start-4 lg:row-start-2 row-span-2 lg:row-span-1 relative">
              <div className="w-full h-full flex justify-center items-center absolute">
                <FontAwesomeIcon  icon={['fas', 'play-circle']} size="3x" className="text-lt-blue-600"/>
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full object-cover" src={content2} alt="content 1"/>
              </div>
              <div className="p-1 text-white bg-lt-blue-500 text-center text-xs lg-text-base absolute bottom-0 w-full">
                <p>#2 - 3 Ways To Profit With Emails</p>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-3 row-start-4 lg:row-start-3 row-span-2 lg:row-span-1 relative">
              <button type="button" title="regpopbox_169105139238450241_285ef06a95">
                <div className="dates">
                  <div className="w-full h-full flex flex-col justify-center items-center absolute">
                    <img className="mb-2" src={website} alt="Click to sign up"/>
                    <p className="text-white text-cetner">Register To See Live Demo</p>
                  </div>
                  <div className="w-full h-full">
                    <img className="w-full h-full object-cover" src={content3} alt="content 1"/>
                  </div>
                  <div className="p-1 text-black bg-yellow-400 text-center text-xs lg-text-base absolute bottom-0 w-full">
                    <p>#3 - LIVE Business-Building Demo</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8 mb-12">
        <div className="text-center">
          <p className="uppercase text-xl lg:text-3xl font-bold text-lt-dark-600 mb-4">LIVE EMAIL INCOME WORKSHOP</p>
          <p className="text-2xl lg:text-5xl font-bold">A Simple 3-Step System To Build A <span className="highlight active">Hyper-Profitable</span> Business With Just Emails</p>
        </div>
        <div className="grid grid-cols-12 gap-6 place-items-center my-12">
          <div className="col-span-12 lg:col-span-5 place-self-center">
            <img src={email} alt="lead ads graphic" className="h-40 lg:h-64"/>
          </div>
          <div className="col-span-12 lg:col-span-7 text-left">
            <h2 className="mb-3 font-bold text-2xl">In This FREE Workshop, You’ll Learn:</h2>
            <ul className="fa-ul text-lg">
              <li className="mb-8">
                <p><FontAwesomeIcon  icon={['fa', 'check']} listItem size="2x" className="text-yellow-400"/> How To <b>Build An Email List</b> From Scratch <u>Without A Landing Page</u> & Turn It Into Passive Income - Beginner-Friendly!</p>
              </li>
              <li className="mb-8">
                <p><FontAwesomeIcon  icon={['fa', 'check']} listItem size="2x" className="text-yellow-400"/> <b>3 Underground Secrets</b> To Monetize With Emails Without A Product Or Website</p>
              </li>
              <li className="mb-8">
                <p><FontAwesomeIcon  icon={['fa', 'check']} listItem size="2x" className="text-yellow-400"/> <b>Case Study:</b> How I Built A 833-Person Email List With Less Than $50 And How You Too Can Do The Same <u>Without Prior Experience</u></p>
              </li>
            </ul>
          </div>
        </div> 
        <div className="max-w-4xl mx-auto py-10 lg:py-8 rounded-lg shadow-lg bg-lt-blue-900 text-white relative bg-cover" style={{backgroundImage: `url(${optinDark})`}}>
          <div className="dates">
            <div className="text-center">
              <h3 className="font-bold text-3xl mb-6">Free Workshop Training - Pick Your Day!</h3>
              <button type="button" className="bg-lt-blue-500 text-white font-bold text-2xl py-2 px-24 inline-block text-center rounded-full shadow-2xl" title="regpopbox_169105139238450241_285ef06a95">
                <span>Register now</span><FontAwesomeIcon  icon={['fas', 'arrow-circle-right']} className="ml-2"/>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4">
        <div class="comments max-w-4xl mx-auto">
          <div id="fb-root"></div>
          <div class="">
            <h2 class="text-center text-xl lg:text-3xl font-semibold mb-4">Leave A Comment Below, Share This Free Video & Get A Chance To Win Some Amazing Prizes</h2>
            <div class="fb-comments" data-href="https://www.iproacademy.com/lt-strategy1" data-width="100%" data-numposts="15" data-order-by="reverse_time"></div>
            <div class="fb-share-button" data-href="https://www.iproacademy.com/lt-strategy1" data-layout="button" data-size="small"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.iproacademy.com%2Flt-strategy1&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center my-8 px-4 text-lt-dark-600">
          <p>Disclaimer: Results may not be typical nor expected for every person. Please note that all your results are based on your effort and dedication to what is taught in our workshop. We are not affiliated with Facebook™ in any way. All information provided on this website is based on best practices and for educational-purposes only.</p>
        </div>
      </section>
      <img src="//events.genndi.com/tracker?action=registration-evergreen&webicode=285ef06a95&version=&memberid=169105139238450241" alt="" style={{visibility: "hidden", height: "0px", width: "0px", border: "none"}}/>
    </Layout>
  )
}

export default LtStrategy1
