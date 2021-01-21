import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image';
import AutoScale from 'react-auto-scale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import Layout from '../components/layout';
import Button from '../components/button';
import CampaignComponent from '../components/app_ui_components/campaignComponent';
import AboutComponent from '../components/app_ui_components/campaignAboutComponent';
import Chatbox from '../components/app_ui_components/chatbox';
import ContactCardSmall from '../components/app_ui_components/contactCardSmall';
import LeadCallingComponent from '../components/app_ui_components/leadCallingComponent';

const Index = ({data}) => {
  const metadata = data.site.siteMetadata
  return (
    <Layout style={{height: "fit-content"}}>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <main className="overflow-x-hidden">
        <Header data={data} />
        <section className="mb-16">
          <VideoSection />
        </section>
        <section className="mb-12 lg:mb-24">
          <FeatureSection1 data={data} />
          <FeatureSection2 data={data} />
          <FeatureSection3 data={data} />
          <FeatureSection4 data={data} />
          <FeatureSection5 data={data} />
        </section>
        <section className="mb-12 lg:mb-24">
          <IntegrationSection data={data} />
        </section>
        <section>
          <CtaSection data={data} />
        </section>
      </main>
    </Layout>
  )
}

const Header = (props) => {
  return (
    <BackgroundImage
      Tag="header"
      className={`pt-12 lg:pt-20 pb-10 bg-center bg-cover px-4`}
      fluid={props.data.header.childImageSharp.fluid}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-4xl lg:text-5xl mb-4">Powerful Lead Automation Tool For Your Digital Sales Funnels</h1>
        <p className="text-base lg:text-xl text-lt-dark-500 mb-4">Easily manage and connect with your leads in real-time.</p>
        <Button
          text='Get Started Today'
          path='/pricing'
        />
      </div>
    </BackgroundImage>
  )
}

const VideoSection = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl mx-auto rounded-2xl px-4">
        <motion.div className="embed-responsive aspect-ratio-16/9 shadow-2xl rounded-xl" 
          initial={{transform: `perspective(800px) rotateX(35deg)`}}
          animate={{transform: `perspective(800px) rotateX(0deg)`}}
        >
          <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/360380655" title="LeadsTunnel Sales Video"></iframe>
        </motion.div>
      </div>
      <div className="absolute w-1/2 pt-2 border-b-4 border-lt-blue-500 border-dotted block h-px right-0 top-1/2 -z-10"></div>
      <div className="absolute w-1/2 pt-2 border-b-4 border-lt-blue-500 border-dotted block h-px left-0 top-1/2 -z-10"></div>
    </div>
  )
}

const FeatureSection1 = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-12">
      <div className="text-center mb-8 px-4">
        <p className="text-lg uppercase tracking-widest font-bold text-lt-blue-700 mb-2">Features</p>
        <p className="text-4xl font-bold mb-4">Let’s Automate Your Lead Generation Efforts</p>
        <p className="text-xl text-lt-dark-500 mb-4">Improve pipeline, nurture high-intent sales leads, drive better results</p>
        <Button
            text='See All Features'
            path='/features'
          />
      </div>
      {/* Feature Title */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 md:gap-x-12 gap-y-6 items-center px-4">
        <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-span-6 grid grid-cols-12 auto-rows-auto">
          <div className="col-start-2 col-span-6 row-start-1 row-span-2 z-10 place-items-auto">
            <div className="w-full h-full min-w-min transform scale-50 lg:scale-75 origin-left lg:origin-top-left">
              <Chatbox color="lt-dark-400" />
            </div>
          </div>
          <div className="col-start-1 col-span-12 row-start-2 row-span-4">
            <div className="shadow-2xl">
              <AutoScale>
                <CampaignComponent />
              </AutoScale>
            </div>
          </div>
          <div className="col-start-9 col-span-4 row-start-5 row-span-2 z-10">
            <div className="w-full h-full shadow-lg">
              <AutoScale>
                <AboutComponent />
              </AutoScale>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-span-12 md:col-start-1 md:col-span-12 lg:col-span-6 grid lg:grid-cols-5 auto-rows-max gap-y-4 text-lt-dark-700">
          <Img className="h-8 w-8" fluid={props.data.sectionIconTime.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
          <p className="row-start-2 col-span-5 text-4xl font-bold mb-4 text-black">Automate Your Lead Capture Mechanism In Real-Time</p>
          <p className="row-start-3 col-span-4">Here’s the truth: if you’re not first, then you’re last. Research has shown that 50% of leads choose to work with businesses that reach out to them first. </p>
          <p className="row-start-4 col-span-4">This means if you don’t establish a connection with your prospects the moment they come in contact with you, you’ve already given away half your leads to your competitors. </p>
          <p className="row-start-5 col-span-4">We understand that speed to lead matters, that’s why we can automatically transfer all leads that come through your marketing funnels into your pipeline in real-time so that you can engage with them right away. </p>
        </div>
      </div>
    </div>
  )
}

const FeatureSection2 = (props) => {
  var sliderNotifications = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    initialSlide: 1,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
    swipeToSlide: true,
    arrows: false,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          vertical: true,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
        }
      }
    ]
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-12 bg-gradient-to-b from-blue-gray-900 md:via-black to-black" >
      <div className="max-w-7xl mx-auto grid grid-cols-12 auto-rows-auto gap-y-8 lg:gap-y-24 px-4">
        <div className="col-span-12 md:col-span-6 lg:col-start-3 lg:col-span-8 grid auto-rows-max gap-y-4 text-white">
          <Img className="h-8 w-8" fluid={props.data.sectionIconBell.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
          <p className="text-4xl font-bold mb-4">Get Instant Notification On Inbound Leads</p>
          <p className="">The speed of your lead response can make or break your close rate. To ensure you can engage with your prospects within the first five minutes of them showing interest in your business, we have got you covered with instant lead notification. </p>
          <p className="">Simply receive a SMS and email alert the moment you capture new leads, so that you can reach out to them immediately before they turn ice cold or worse, have your competitors beat you to them first.</p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-start-2 lg:col-span-10">
          <div className="fade-sides-dark h-32 md:h-full">
            <Slider {...sliderNotifications}>
              <div className="h-full w-full lg:px-6">
                <div className="notificaion bg-gray-50 rounded-2xl p-4 bg-opacity-90 shadow-2xl transform scale-75 lg:scale-100" style={{width: "100%", minWidth: "300px", maxWidth: "500px"}}>
                  <div className="w-full flex justify-between mb-2">
                    <div className="flex items-baseline">
                      <span className="w-7 h-7 bg-emerald-500 p-1 text-center text-white rounded">
                        <FontAwesomeIcon icon="comment" size="1x"/>
                      </span>
                      <p className="opacity-90 uppercase text-lg text-lt-dark-700 tracking-wide ml-2">Messages</p>
                    </div>
                    <p className="opacity-90 text-lg text-lt-dark-700">5m ago</p>
                  </div>
                  <p className="font-bold">LeadsTunnel</p>
                  <p className="text-lt-dark-700">Local Coffee Shop Campaign just received a new lead</p>
                </div>
              </div>
              <div className="h-full w-full lg:px-6">
                <div className="notificaion bg-gray-50 rounded-2xl p-4 bg-opacity-90 shadow-2xl transform scale-75 lg:scale-100" style={{width: "100%", minWidth: "300px", maxWidth: "500px"}}>
                  <div className="w-full flex justify-between mb-2">
                    <div className="flex items-baseline">
                      <span className="w-7 h-7 bg-blue-500 p-1 text-center text-white rounded">
                        <FontAwesomeIcon icon="envelope" size="1x"/>
                      </span>
                      <p className="opacity-90 uppercase text-lg text-lt-dark-700 tracking-wide ml-2">Email</p>
                    </div>
                    <p className="opacity-90 text-lg text-lt-dark-700">now</p>
                  </div>
                  <p className="font-bold">LeadsTunnel</p>
                  <p className="text-lt-dark-700">Online Ecommerce Store Campaign just received a new lead</p>
                </div>
              </div>
              <div className="h-full w-full lg:px-6">
                <div className="notificaion bg-gray-50 rounded-2xl p-4 bg-opacity-90 shadow-2xl transform scale-75 lg:scale-100" style={{width: "100%", minWidth: "300px", maxWidth: "500px"}}>
                  <div className="w-full flex justify-start mb-2">
                    <div className="flex items-baseline text-light-blue-400 mr-2">
                      <FontAwesomeIcon icon="comment" size="1x"/>
                      <p className="text-lg ml-2">Messages</p>
                    </div>
                    <p className="text-lg text-lt-dark-700">22:29</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">LeadsTunnel</p>
                      <p className="text-lt-dark-700">Small Shop Bop Campaign just received a new lead</p>
                    </div>
                    <span className="w-12 h-12 bg-light-blue-500 p-2 text-white rounded-lg ml-2">
                      <FontAwesomeIcon icon="comment" size="2x"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-full w-full lg:px-6">
                <div className="notificaion bg-gray-50 rounded-2xl p-4 bg-opacity-90 shadow-2xl transform scale-75 lg:scale-100" style={{width: "100%", minWidth: "300px", maxWidth: "500px"}}>
                  <div className="w-full flex justify-start mb-2">
                    <div className="flex items-baseline text-red-400 mr-2">
                      <FontAwesomeIcon icon="envelope" size="1x"/>
                      <p className="text-lg ml-2">Messages</p>
                    </div>
                    <p className="text-lg text-lt-dark-700">23:05</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">LeadsTunnel</p>
                      <p className="text-lt-dark-700">Local Car Dealership  Campaign just received a new lead</p>
                    </div>
                    <span className="w-12 h-12 bg-red-500 p-2 text-white rounded-lg ml-2">
                      <FontAwesomeIcon icon="envelope" size="2x"/>
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureSection3 = (props) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-12" >
      <div className="max-w-7xl mx-auto grid grid-cols-12 md:gap-x-12 gap-y-4 px-4">
        <div className="col-span-12 md:col-span-6 grid lg:grid-cols-5 auto-rows-max gap-y-4 text-lt-dark-700">
          <Img className="h-8 w-8" fluid={props.data.sectionIconFlame.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
          <p className="row-start-2 col-span-5 text-4xl font-bold mb-4 text-black">Identify High-Intent Leads For Sales Opportunities</p>
          <p className="row-start-3 col-span-4">Rather than pursuing leads randomly or following up with leads chronologically, our proprietary lead scoring system can help you maximize your time by focusing on leads that matter most to your business.</p>
          <p className="row-start-4 col-span-4">Each new lead is scored as cold, warm, or hot on a scale of 0 to 100 based on the prospect’s actions such as providing a legitimate phone number or opening your email. </p>
          <p className="row-start-5 col-span-4">The higher the score, the hotter the leads, the quicker you should follow up with them over less qualified leads.</p>
        </div>
        <div className="col-span-12 md:col-span-6 grid gap-6 auto-rows-auto items-center relative place-items-center">
          <ContactCardSmall
            name="Diane Fox"
            scoring="hot"
            email="d.fox@email.com"
            tags={['potential', 'success']}
            company="Hover Vehicle Gas Tune"
            assigned="Jordyn Siphron"
          />
          <ContactCardSmall
            name="Gregory Richards"
            scoring="warm"
            email="gregory.r@email.com"
            tags={['potential', 'waiting', 'follow up']}
            company="Small Shop Bop"
            assigned="Zain Philips"
          />
          <ContactCardSmall
            name="Georgia McLaughin"
            scoring="cold"
            email="g_laughin@email.com"
            tags={['potential', 'waiting']}
            company="Local Brewery"
            assigned="Anika Mango"
          />
          <div className="absolute left-0 md:-top-1/3 lg:-bottom-1/2 -z-10" style={{height: "200%", width: "100%"}}>
            <Img className="w-full h-full" fluid={props.data.sectionGraphBG.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }}  />
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureSection4 = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-12 bg-gradient-to-b from-blue-gray-900 to-lt-dark-900" >
      <div className="mb-16 hidden md:block">
        <div className="grid grid-cols-12 gap-4 lg:gap-6 place-items-stretch">
          <div className="col-start-2 col-span-10 lg:col-start-2 lg:col-span-6 xl:col-start-5 xl:col-span-3 row-start-1 lg:place-self-start z-20">
            <Chatbox
              color="lt-dark-400"
            />
          </div>
          <div className="col-start-2 col-span-10 lg:col-start-5 lg:col-span-6 xl:col-start-6 xl:col-span-3 row-start-2 place-self-start z-20">
            <Chatbox
              reverse={true}
              type="email"
              color="yellow-500"
              name="Me"
              text="Hi Jill, Thank you for choosing us. We're excited to do business with you. Best, Jaydon Siphron"
              receipt="delivered"
            />
          </div>
          <div className="relative col-start-6 col-span-7 row-start-1 z-10">
            <div className="absolute w-full pt-1 border-b-2 border-lt-blue-500 border-dotted block h-px right-0 top-1/2" />
          </div>
          <div className="relative col-start-1 col-span-6 row-start-2 z-10">
            <div className="absolute w-full pt-1 border-b-2 border-lt-blue-500 border-dotted block h-px right-0 top-1/2" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-12 auto-rows-max gap-y-24">
        <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 grid auto-rows-max gap-y-4 text-white">
          <Img className="h-8 w-8" fluid={props.data.sectionIconBolt.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
          <p className="text-4xl font-bold mb-4">Rapid-Response Lead Nurturing On Auto-Pilot</p>
          <p className="">Customers generally want things now rather than later. This is why the chances of qualifying a lead is much higher within the first few minutes versus a few hours later. </p>
          <p className="">Our automated messages allow you to send an automatic email and SMS to your lead the moment they come through your pipeline so that they know what to expect next. This is important because customers nowadays don’t just buy for the products or services that you have to offer, they also buy for the experience they are going to receive. </p>
          <p className="">Imagine what kind of impression your business will have on your prospects when they receive a message from you right away - it’s definitely nothing but a great one. </p>
        </div>
      </div>
    </div>
  )
}

const FeatureSection5 = (props) => {
  var settings3 = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-12 md:gap-x-12 auto-rows-max gap-y-12 lg:items-center">
        <div className="col-span-12 md:col-span-6 grid lg:grid-cols-5 auto-rows-max gap-y-4 px-4 text-lt-dark-700">
          <Img className="h-8 w-8" fluid={props.data.sectionIconChat.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }} />
          <p className="row-start-2 col-span-5 text-4xl font-bold mb-4 text-black">Create Conversations That Lead To Lasting Relationships</p>
          <p className="row-start-3 col-span-4">Whether you want to follow-up with your prospects for a quick response, or provide valuable information to build rapport, you can use our in-app messaging features to send a text message and email directly within our platform. </p>
          <p className="row-start-4 col-span-4">Not only can you create conversations, you can also save all information about your prospects, so that even if you don’t have a CRM you can manage your leads all in one place and have everything ready for an effective sales pitch. </p>
        </div>
        <div className="hidden lg:block h-full w-screen px-4">
          <div className="h-full w-1/2 shadow-2xl rounded-lg overflow-hidden">
            <AutoScale>
              <LeadCallingComponent/>
            </AutoScale>
          </div>
        </div>
        <div className="lg:hidden block mt-4 md:mt-8 fade-sides-light-vertical md:max-w-xl mx-auto">
          <Slider {...settings3}>
            <div className="w-full">
              <Chatbox 
                className="mb-6"
                color="lt-dark-400"
                text="New Lead Received. Follow-up with Gregory Richards right away!"
              />
            </div>
            <div className="w-full">
              <Chatbox
                className="mb-6 self-end" 
                reverse={true}
                name="Me"
                color="yellow-500"
                type="sms"
                text="Hello Gregory! I wanted to reach out to you today to answer any questions you might have about our service."
                receipt="delivered"
              />
            </div>
            <div className="w-full">
              <Chatbox 
                className="mb-6"
                name="Gregory Richards"
                type="sms"
                color="yellow-500"
                text="Thank you. I am interested in your service. Can I get more information about the offer?"
                receipt="read"
              />
            </div>
            <div className="w-full">
              <Chatbox 
                className="mb-6 self-end"
                reverse={true}
                name="Me"
                color="yellow-500"
                receipt="delivered"
                text="No problem. Do you have time for a brief phone call? I can give you all the details and answer any questions or concerns."
                type="sms"
              />
            </div>
            <div className="w-full">
              <div className="w-full grid grid-cols-11 my-8">
                <div className="col-start-1 col-span-5 relative"><div className="border-b border-lt-blue-500 absolute top-1/2 pb-1 w-full"></div></div>
                <p className="col-start-6 col-span-1 text-lt-blue-500 text-center">New</p>
                <div className="col-start-7 col-span-5 relative"><div className="border-b border-lt-blue-500 absolute top-1/2 pb-1 w-full"></div></div>
              </div>
            </div>
            <div className="w-full">
              <Chatbox 
                className="mb-6"
                name="Gregory Richards"
                type="sms"
                color="yellow-500"
                text="Yes! That sounds wonderful."
                receipt="reply"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-center my-24">
        <p className="text-lg text-lt-dark-700 mb-4 font-bold">Go In-depth With More Features To Offer</p>
        <Button path="/features" text="See All Features"/>
      </div>
    </div>
  )
}

const IntegrationSection = (props) => {
  var slideLeftSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    initialSlide: 1,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    arrows: false,
    slidesPerRow: 1,
  };
  var slideRightSetting = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    initialSlide: 1,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    arrows: false,
    slidesPerRow: 1,
    rtl: true
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="">
          <p className="text-lg uppercase tracking-widest font-bold text-lt-blue-700 mb-2">Integrations</p>
          <p className="text-4xl font-bold mb-4">Connect and Sync Your Leads With Over 20 Email Service Providers and CRMs In Real-Time</p>
          <p className="text-xl text-lt-dark-500 mb-4">Or simply use Leadstunnel’s built-in leads manager to store lead data, organize and nurture leads for the sales pipeline.</p>
          <Button
            text='Explore Our Supported Integrations'
            path='/integrations'
          />
        </div>
      </div>
      <div className="container mx-auto fade-sides-light">
        <div className="mb-8 lg:mb-16">
          <Slider {...slideLeftSetting}>
            {
              props.data.images.nodes.slice(0, 16).map((image, i) =>
                <div key={i} className="h-12 mx-6">
                  <Img key={i} fluid={image.childImageSharp.fluid} className="h-full w-24 lg:w-48" imgStyle={{ objectFit: "contain" }} />
                </div>
              )
            }
          </Slider>
        </div>
        <div className="mb-8 lg:mb-16">
          <Slider {...slideRightSetting}>
            {
              props.data.images.nodes.slice(17, 33).map((image, i) =>
              <div key={i} className="h-12 mx-6">
                  <Img key={i} fluid={image.childImageSharp.fluid} className="h-full w-24 lg:w-48" imgStyle={{ objectFit: "contain" }} />
                </div>
              )
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

const CtaSection = (props) => {
  return (
    <div className="bg-gradient-to-t from-blue-gray-900 to-black pt-16 lg:pt-32 pb-24 md:pb-52 relative overflow-hidden">
      <BackgroundImage fluid={props.data.header.childImageSharp.fluid}>
        <div className="max-w-5xl mx-auto text-white text-center z-10 px-4">
          <p className="text-4xl lg:text-7xl font-bold mb-6">Automate Your Lead Generation Today</p>
          <p className="text-lg lg:text-2xl mb-6">Never miss a lead and capture the golden window of opportunity to convert your qualified prospects to loyal customers with LeadsTunnel.</p>
          <Button
            path="/pricing"
            text="Start Your 7 Days Free Trial"
          />
        </div>
      </BackgroundImage>
      <div className="w-full h-full grid grid-cols-8 absolute lg:-bottom-4/5 2xl:-bottom-1/2">
        <div className="col-start-1 col-span-8 lg:col-start-3 lg:col-span-4">
          <div className="rounded-xl overflow-hidden opacity-90" style={{transform: `perspective(800px) rotateX(35deg)`}}>
            <AutoScale>
              <CampaignComponent />
            </AutoScale>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql` 
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    images: allFile (filter: {relativeDirectory: {eq: "brands"}}) {
      nodes {
        base
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    header: file(relativePath: {eq: "bg-plus.png"}) {
      id
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    brandIcon: file(relativePath: {eq: "LT-icon.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sectionIconTime: file(relativePath: {eq: "home/fa_regular_clock.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sectionIconBell: file(relativePath: {eq: "home/fa_regular_bell.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sectionIconFlame: file(relativePath: {eq: "home/ion_flame_outline.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sectionIconBolt: file(relativePath: {eq: "home/ion_flash_outline.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sectionIconChat: file(relativePath: {eq: "home/ion_chatbubble_ellipses_outline.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
    sectionGraphBG: file(relativePath: {eq: "home/bg_graph.png"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default Index