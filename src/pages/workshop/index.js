import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import headingBg from './images/bg.jpg'
import emailWebinar from './images/email-webinar.svg'
import fred from './images/fred.jpg'
import lightBG from './images/light-bg.svg'
import optionDark from './images/optin-dark.svg'
import optinLight from './images/optin-light.svg'

const Workshop = () => {
  const data = useStaticQuery(graphql`
    query WorkshopQuery {
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

  return (
    <Layout navbar={false}>
      <Helmet>
        <title>{metadata.title} | Encore Registration</title>
        <script src="https://events.genndi.com/register.evergreen.extra.js" language="javascript" type="text/javascript" async></script>
      </Helmet>
      <nav className="fixed top-0 w-full px-4 py-8 bg-white shadow z-50">
        <Img 
          fluid={data.logo.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="h-8"
        />
      </nav>
      <header className="pb-16" style={{backgroundImage: `url(${headingBg})`}}>
        <div className="max-w-5xl mx-auto py-8 lg:py-12 text-center px-4">
          <p className="px-2 py-1 bg-yellow-400 rounded shadow font-bold text-lg lg:text-xl inline-block mb-4">Free Live Workshop Reveals...</p>
          <p className="text-xl lg:text-4xl font-bold text-white mb-4">How To Quickly Build A 10,000 Person Email List Without Using A Single Landing Page & Turn It Into Passive Cash Flow</p>
          <p className="text-yellow-400 text-lg lg:text-2xl">A Simple 3-Step System To Build A Hyper-Profitable Business With Just Emails - <br/><span className="underline font-bold">Save Your FREE Seat To Learn Now</span></p>
        </div>
      </header>
      <section className="points max-w-5xl mx-auto my-12 bg-white border-t-8 border-lt-dark-300 -mt-16 shadow-xl">
        <div className="grid grid-cols-12 gap-6 place-items-center p-8 border-b border-lt-blue-500">
          <div className="col-span-12 lg:col-span-5 place-self-center">
            <img src={emailWebinar} alt="lead ads graphic" className="h-40 lg:h-80"/>
          </div>
          <div className="col-span-12 lg:col-span-7 text-left">
            <h2 className="mb-3 font-bold text-2xl">In This FREE Workshop, You’ll Learn:</h2>
            <ul className="fa-ul text-lg">
              <li className="mb-8">
                <p><FontAwesomeIcon  icon={['fa', 'check']} listItem size="2x" className="text-yellow-400"/> The Untold Method To Quickly <b><u>Grow An Email List</u></b> Without Using A Landing Page</p>
              </li>
              <li className="mb-8">
                <p><FontAwesomeIcon  icon={['fa', 'check']} listItem size="2x" className="text-yellow-400"/> Case Study: How I Capture Hot Email Leads For As Little As <b><u>6 Cents Per Email</u></b></p>
              </li>
              <li className="mb-8">
                <p><FontAwesomeIcon  icon={['fa', 'check']} listItem size="2x" className="text-yellow-400"/> The 3 Underground Secrets To <b><u>Instantly Monetize With Your New Email List</u></b> And Never Worry About Products Or Websites</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8 bg-lt-blue-50">
          <div className="">
            <div className="text-center">
              <h3 className="font-bold text-2xl mb-6">Free Workshop Training - Pick Your Day!</h3>
              <button type="button" className="bg-lt-blue-500 text-white font-bold text-2xl py-2 px-24 inline-block text-center rounded-full shadow-2xl" title="regpopbox_169105139238450241_285ef06a95">
                <span>Register now</span><FontAwesomeIcon  icon={['fas', 'arrow-circle-right']} className="ml-2"/>
              </button>
            </div>
          </div>
        </div>
      </section> 
      <section className="-mb-16 px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center">
            <FontAwesomeIcon  icon={['fas', 'caret-down']} size="2x" className="text-lt-blue-500"/>
            <h2 className="font-extrabold mb-8 lg:mb-4 text-5xl font-sans"><b>LIVE LIST BUILDING <span className="highlight active">CHALLENGE</span></b></h2>
            <p className="text-xl mb-5">During this live workshop, I’m about to do something crazy yet nerve-wracking for me.I decided to put myself to a challenge to build an email list of <span className="highlight active"><b>100 subscribers live in-front of everyone</b></span>. Whether I make it or not, this will definitely be a once-in-a-lifetime experience for you to see the entire process on how I do it. You seriously don’t want to miss out on this!</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto py-10 lg:py-8 rounded-lg shadow-lg bg-lt-blue-900 text-white relative bg-cover" style={{backgroundImage: `url(${optionDark})`}}>
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
      <section className="pt-32 bg-cover pb-32 px-4" style={{backgroundImage: `url(${lightBG})`}}>
        <div className="messages">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-6 mb-8">
              <div className="col-span-12 lg:col-span-4">
                <div className="relative text-white">
                  <img src={fred} className="rounded shadow-sm w-full h-full object-cover" alt="Fred Lam"/>
                  <div className="absolute bottom-4 w-11/12">
                    <div className="body-text bg-lt-blue-500 bg-opacity-80 p-2">
                      <h5 className="text-xl font-bold mb-0">Fred Lam</h5>
                      <p className="text-xl">Founder Of iPro Academy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 pl-5 text-lg">
                <h2 className="mb-4 text-2xl font-bold">A Message From Fred Lam</h2>
                <p className="mb-4">Email is the #1 asset for any businesses.</p>
                <p className="mb-4">In fact, email plays a significant role in all my businesses and it has added <u><b>multiple 6-figures to my top-line revenue</b></u>.</p>
                <p className="mb-4">All it requires from me is each day, I wake up and spend as little a <u>15 minutes a day</u> to write a simple email to my subscribers. That’s it!</p>
                <p className="mb-4">In my businesses, I constantly look for new ways to <u>build a bigger email list</u>. The bigger the email list I own, the more profit I will make each year.</p>
                <p className="mb-4">Until recently, I discovered a groundbreaking method that I’ve secretly been using and it has allowed me to <b><u>capture an email subscriber for just 6 cents</u></b>!</p>
                <p className="mb-4">The best part is, it requires <u>no landing page or expensive software</u>.</p>
                <p className="mb-4">Finally, it’s time for me to reveal this and I urge you to secure your seat today and learn exactly how I do it - after all, <b><u>it doesn’t cost you anything to learn this</u></b>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 -mt-16">
        <div className="max-w-4xl mx-auto py-8 rounded-lg shadow-lg bg-white bg-cover" id="register" style={{backgroundImage: `url(${optinLight})`}}>
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
      <div className="max-w-5xl mx-auto text-center my-8 px-4 text-lt-dark-600">
        <p>Disclaimer: Results may not be typical nor expected for every person. Please note that all your results are based on your effort and dedication to what is taught in our workshop. We are not affiliated with Facebook™ in any way. All information provided on this website is based on best practices and for educational-purposes only.</p>
      </div>
      <img src="//events.genndi.com/tracker?action=registration-evergreen&webicode=285ef06a95&version=&memberid=169105139238450241" alt="" style={{visibility: "hidden", height: "0px", width: "0px", border: "none"}}/>
    </Layout>
  )
}

export default Workshop
