import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout';
import Button from '../components/button';
import Accordion from '../components/accordion';

const Pricing = ({ data }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState({
    plan: 'MONTHLY',
  });
  const metadata = data.site.siteMetadata

  const handlePaymentPlanFilter = (newFilter) => {
    switch (newFilter) {
      case "MONTHLY" :
        setPaymentPlan({plan: 'MONTHLY' })
        break;
      case "YEARLY" :
        setPaymentPlan({plan: 'YEARLY' })
        break;
      default :
        setPaymentPlan({plan: 'MONTHLY' })
    }
  }

  const handleToggle = (toggled) => {
    setIsOpened(toggled)
  }

  return (
    <Layout>
      <Helmet>
        <title>{metadata.title} | Pricing</title>
      </Helmet>
      <main>
        <Header filter={paymentPlan} onChange={handlePaymentPlanFilter} />
        <section className="max-w-7xl mx-auto px-4">
          <PaymentTierSection data={data} filter={paymentPlan} />
        </section>
        <section id="plan-table" className="px-4 mb-16">
          <TierCompareTable toggle={isOpened} data={data} onChange={handleToggle} />
        </section>
        <section>
          <FaqSection />
        </section>
      </main>
    </Layout>
  )
}

const Header = (props) => {
  const handlePaymentPlanFilter = (event) => {
    props.onChange(event.target.value)
  }
  return (
    <header className="pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest font-bold text-lt-blue-500 mb-2">Plans That Fits Your Needs</p>
        <p className="text-4xl font-bold mb-4">Automate Your Lead Generation Efforts In <span className="text-lt-blue-500">Real-Time</span></p>
        <p className="text-lg text-lt-dark-500 mb-4">Choose A Plan That Works For You</p>
        <div className="inline-flex flex-row mx-auto text-bold text-lt-dark-400 lg:mb-12">
          <button onClick={(event) => (handlePaymentPlanFilter(event))} value="MONTHLY" className={`text-sm font-bold tracking-wide uppercase border border-lt-dark-500 py-2 px-12 rounded-lg rounded-r-none focus:ring-0 ${props.filter.plan === 'MONTHLY' ? 'bg-lt-blue-500 text-white' : null }`}>Monthly</button>
          <button onClick={(event) => (handlePaymentPlanFilter(event))} value="YEARLY" className={`text-sm font-bold tracking-wide uppercase border border-lt-dark-300 py-2 px-12 rounded-lg rounded-l-none focus:ring-0 ${props.filter.plan === 'YEARLY' ? 'bg-lt-blue-500 text-white' : null }`}>Yearly</button>
        </div>
      </div>
    </header>
  )
}

const PaymentTierSection = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-y-4">
      {props.data.allPricingJson.edges.map((edge) => {
        let tier = edge.node
        return (
          <div className="col-span-1 group">
            <div key={tier.id} className="grid grid-col-1 auto-rows-max gap-y-4 h-full w-full border border-lt-dark-100 rounded-lg p-8 group-hover:shadow-xl bg-gradient-to-b from-white to-lt-blue-50 lg:transform group-hover:-translate-y-2 ease-in-out duration-200">
              <div>
                <div className="flex flex-row-reverse justify-between lg:justify-start lg:flex-col items-center lg:items-start">
                  <Img
                    fluid={tier.icon.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className="w-16 lg:w-10 lg:mb-2 mr-2 h-full"
                  />
                  <div>
                    <p className="text-sm font-bold uppercase text-lt-blue-600 tracking-wider mb-1 lg:mb-2">{tier.name}</p>
                    <p className="text-3xl lg:text-4xl font-bold text-black mb-2">{props.filter.plan === 'MONTHLY' ? `${tier.price.monthly}/mo` : `${tier.price.yearly}/yr`}</p>
                    <p className="text-lt-dark-700">{tier.desc}</p>
                  </div>
                </div>
              </div>
              <div className="mb-1 lg:my-2">
                <Button
                  text={tier.button.text}
                  path={props.filter.plan === "MONTHLY" ? tier.button.path.monthly : tier.button.path.yearly}
                />
              </div>
              <div className="border-b border-lt-dark-100 lg:pb-4">
                {
                  tier.caps.length > 1 
                  ? tier.caps.map((cap, i) => (<p key={i} className="text-lt-dark-800 mb-2"><FontAwesomeIcon  icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>{cap}</p>))
                  : <div><p className="text-lt-dark-700 mb-3"><FontAwesomeIcon icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>{tier.caps[0]}</p><p className="mb-2">&nbsp;</p></div>
                }
              </div>
              <div className="hidden lg:block">
                <p className="font-bold text-black mb-4">{tier.features.text}</p>
                {tier.features.list.map((feature, i) => (
                  <p key={i} className="text-lt-dark-700 mb-3">
                    <FontAwesomeIcon icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>
                    {feature}
                  </p>
                ))}
              </div>
              <div className="block lg:hidden">
                <Accordion 
                  title={`View ${tier.features.text}`} 
                  tabIndex={tier.id} 
                  wrapperClassName="text-black px-0"
                  wrapperBg="bg-transparent"
                  bodyBg="bg-transparent px-0"
                  className="px-0"
                >
                  {tier.features.list.map((feature, i) => (
                    <p key={i} className="text-lt-dark-700 mb-2">
                      <FontAwesomeIcon icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>
                      {feature}
                    </p>
                  ))} 
                </Accordion>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const TierCompareTable = (props) => {
  const handleToggle = () => {
    props.onChange(!props.toggle)
  }
  return (
    <div className="max-w-6xl mx-auto">
      <button onClick={() => (handleToggle())} className="bg-lt-blue-500 rounded-full border border-lt-blue-600 px-8 lg:px-16 py-4 lg:py-2 text-white mx-auto block my-4 lg:my-16">
        Still Not Sure Which Plan Is Right For You? <span className="font-bold">Compare Features</span> <FontAwesomeIcon icon={['fa', 'chevron-down']} />
      </button>
      <div className={`grid grid-col-1 gap-1 overflow-hidden transition-max-h duration-1000 ease-in-out`} style={{ maxHeight: `${props.toggle ? "9999px" : "0px" }`}}>
        <div className="grid grid-cols-4 gap-1">
          <div className="bg-blue-gray-50 text-left py-3 px-4">
            <p className="font-bold tracking-wider uppercase text-xs lg:text-base">Feature</p>
          </div>
          <div className="bg-blue-gray-50 text-center py-3 px-4">
            <p className="font-bold tracking-wider uppercase text-xs lg:text-base">Starter</p>
          </div>
          <div className="bg-blue-gray-50 text-center py-3 px-4">
            <p className="font-bold tracking-wider uppercase text-xs lg:text-base">Pro</p>
          </div>
          <div className="bg-blue-gray-50 text-center py-3 px-4">
            <p className="font-bold tracking-wider uppercase text-xs lg:text-base">Business</p>
          </div>
        </div>
        {
          props.data.allFeaturesCompareJson.edges.map((features, i) => {
            let feat = features.node
            return (
              <div key={i} className="grid grid-cols-4 gap-1 text-xs lg:text-base">
                <div className={`text-left py-3 px-4 ${feat.starter ? "null" : "col-span-4 font-bold"} ${i % 2 ? "bg-blue-gray-50" : null}`}>
                  <p>{feat.name}</p>
                </div>
                {
                  feat.starter ? 
                    <div className={`text-center py-3 px-4 flex justify-center items-center ${i % 2 ? "bg-blue-gray-50" : null}`}>
                      {
                        feat.starter === "true" ? <FontAwesomeIcon icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>
                        : feat.starter === "false" ? null
                        : <p>{feat.starter}</p>
                      }
                    </div>
                  : null
                }
                {
                  feat.pro ?
                    <div className={`text-center py-3 px-4 flex justify-center items-center ${i % 2 ? "bg-blue-gray-50" : null}`}>
                      {
                        feat.pro === "true" ? <FontAwesomeIcon icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>
                        : feat.pro === "false" ? null
                        : <p>{feat.pro}</p>
                      }
                    </div>
                  : null
                }
                {
                  feat.business ?
                    <div className={`text-center py-3 px-4 flex justify-center items-center ${i % 2 ? "bg-blue-gray-50" : null}`}>
                      {
                        feat.business === "true" ? <FontAwesomeIcon icon={['fa', 'check']} className="text-lt-blue-500 mr-2"/>
                        : feat.business === "false" ? null
                        : <p>{feat.business}</p>
                      }
                    </div>
                  : null
                }
              </div>
            )
          })
        }
        <div className="grid grid-cols-4 gap-1 text-xs lg:text-base">
          <div className="bg-white text-left py-3 px-4"></div>
          <div className="bg-white text-center py-3 lg:px-4">
            <Button text="Try For Free" path="/" className="px-4 py-2"/>
          </div>
          <div className="bg-white text-center py-3 lg:px-4">
            <Button text="Get Started" path="/" className="px-4 py-2"/>
          </div>
          <div className="bg-white text-center py-3 lg:px-4">
            <Button text="Get Started" path="/" className="px-4 py-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}

const FaqSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</p>
      <div className="mb-16">
        <Accordion title="What does LeadsTunnel do?" tabIndex="0" wrapperClassName="mb-4">
          LeadsTunnel is a powerful lead automation and management tool that instantly transfers leads directly from your lead source such as Facebook and Google to your CRM or your email service provider of choice in real-time. It is equipped with features like in-app messaging, instant lead notification, and lead scoring to improve your lead follow-up strategy and better qualify leads for increased sales opportunities. 
        </Accordion>
        <Accordion title="Can I try LeadsTunnel for free?" tabIndex="0" wrapperClassName="mb-4">
          Absolutely! Sign up with our Starter Plan to get a 7-day free trial. You will be asked to enter your billing information upon sign up, however, you will not be charged until the 7-day is over.
        </Accordion>
        <Accordion title="Are there other costs in addition to the plan pricing? " tabIndex="0" wrapperClassName="mb-4">
          This depends on how you will be using LeadsTunnel. If you use our SMS automation, instant SMS lead notification, and/or in-app SMS messaging features, you will be charged each time a SMS is received or sent out according to the pricing of our 3rd party communication service, <a href="https://www.twilio.com/sms/pricing/us" target="_blank" rel="noreferrer" className="text-blue-500 underline hover:text-blue-700">Twilio</a>, rounded to the nearest cent. For instance it will cost an additional $0.01 cent for each SMS received and sent to the United States. However, with our Growth and Business account, you will be given free SMS credits to be used each month. Once the free credits are used up for the month, then you will be charged. You will also be charged an additional $10 USD for each $1,000 leads above the lead syncs per month limit available for your selected plan. 
        </Accordion>
        <Accordion title="What happens if I go over the leads per month limit?" tabIndex="0" wrapperClassName="mb-4">
          A lead refers to any newly generated contact from your lead generation campaigns. Each plan has a lead syncs per month limit. If you go above the limit during your billing cycle, you will be charged an additional $10 USD for every 1,000 leads. For Yearly Plans, the lead sync per year limit will be the monthly lead sync limit multiplied by 12 months (i.e. if the monthly plan limit is 3,000 lead syncs per month, then the yearly limit will be 3,000 leads x 12 months = 36,000 per year) 
        </Accordion>
        <Accordion title="What if I don’t have a CRM or Email Service Provider?" tabIndex="0" wrapperClassName="mb-4">
          We got you covered! Even if you do not currently use a CRM or Email Service, you can store and manage all your leads inside LeadsTunnel. Our built-in Leads Manager allows you to manage your leads with lead scoring, lead tagging, in-app email and SMS capabilities and so much more. You can even export and download your leads to be used elsewhere in your sales funnel. 
        </Accordion>
        <Accordion title="Can I make a CRM or Email Service integration request?" tabIndex="0" wrapperClassName="mb-4">
          We welcome integration requests so that we can become an all-inclusive solution for you no matter which CRM or Email Service provider you are using. If you want to make an integration request, please contact us at <a href="mailto:support@leadstunnel.com" className="text-blue-500 underline hover:text-blue-700">support@leadstunnel.com</a>. 
        </Accordion>
        <Accordion title="What are SMS credits?" tabIndex="0" wrapperClassName="mb-4">
          For our Growth and Business plans, we offer free SMS credits of $5 and $10 respectively to be used towards our in-app SMS messaging, SMS automation, and SMS lead notification features. If you have used up the free credits during your billing cycle, you will be charged per SMS message based on the pricing listed <a href="https://www.twilio.com/sms/pricing/us" target="_blank" rel="noreferrer" className="text-blue-500 underline hover:text-blue-700">here</a>. In the next billing cycle, the free credits will be issued again. Any unused credits will not be carried over to the next billing cycle.
        </Accordion>
        <Accordion title="Is SMS messaging supported for all countries?" tabIndex="0" wrapperClassName="mb-4">
          SMS messaging is supported by most countries. Click <a href="https://help.leadstunnel.com/en/articles/3341773-which-countries-are-supported-for-sms-notifications" target="_blank" rel="noreferrer" className="text-blue-500 underline hover:text-blue-700">here</a> for a list of supported countries.
        </Accordion>
        <Accordion title="What is your cancellation policy?" tabIndex="0" wrapperClassName="mb-4">
          We would absolutely hate to see you go because that means we’re not doing our job right! However, you can definitely cancel your subscription at any time you wish. If you cancel your subscription mid cycle, you will still have access to your LeadsTunnel account until the end of the billing cycle.
        </Accordion>
        <Accordion title="What if I have more questions?" tabIndex="0" wrapperClassName="mb-4">
          If you have more questions, please feel free to tap on the chat icon located on the bottom right of this page or email us at <a href="mailto:support@leadstunnel.com" className="text-blue-500 underline hover:text-blue-700">support@leadstunnel.com</a>. Our <a href="http://support.leadstunnel.com" target="_blank" rel="noreferrer" className="text-blue-500 underline hover:text-blue-700">knowledge center</a> also contains many helpful articles to answer your questions!
        </Accordion>
      </div>
      <div className="text-center px-4">
        <p className="text-lg text-lt-dark-600 mb-4">Got A Large Volume Of Leads? Contact Us For Enterprise Pricing.</p>
        <Button email="support@leadstunnel.com" text="Contact Us"/>
      </div>
    </div>
  )
}

export const query = graphql` 
  query PricingQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPricingJson {
      edges {
        node {
          id
          icon {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          price {
            monthly
            yearly
          }
          desc
          button {
            text
            path {
              monthly
              yearly
            }
          }
          caps
          features {
            text
            list
          }
        }
      }
    }
    allFeaturesCompareJson {
      edges {
        node {
          id
          name
          starter
          pro
          business
        }
      }
    }
  }
`

export default Pricing
