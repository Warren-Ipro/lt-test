import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import JumboCard from '../components/jumboCard'

const AboutPage = ({ data }) => {
  const metadata = data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <title>{metadata.title} | About</title>
      </Helmet>
      <main className="relative overflow-x-hidden">
        <Header data={data} />
        <MissionSection data={data} />
        <div className="w-full h-12 lg:h-24 flex justify-start align-middle my-8"><div className="border-l border-blue-gray-200 border-dashed mx-auto"></div></div>
        <section className="my-24">
          <StorySection data={data} />
        </section>
        <div className="w-full h-12 lg:h-24 flex justify-start align-middle my-8"><div className="border-l border-blue-gray-200 border-dashed mx-auto"></div></div>
        <section className="my-24">
          <EcosystemSection data={data} />
        </section>
          <JumboCard
            image={data.blogcard.childImageSharp.fluid}
            heading="Learn More About Us On Our Blog"
            subHeading="Keep up with us on our latest blog articles!"
            button={{
              text: "Visit Blog",
              path: "https://blog.leadstunnel.com/",
              target: true,
            }}
          />
        <div className="w-screen absolute -top-1/2 -right-1/2 -z-10">
          <Img 
            fluid={data.bgblob1.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain"}}
          />
        </div>
        <div className="w-screen  absolute bottom-96 -left-1/2 -z-10">
          <Img 
            fluid={data.bgblob2.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain"}}
          />
        </div>
      </main>
    </Layout>
  )
}

const Header = (props) => {
  return (
    <header className="my-16 lg:my-24 px-4">
      <Img 
        fluid={props.data.logo.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        className="h-20 mb-24 hidden lg:block"
      />
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest font-bold text-lt-blue-500 mb-2">About Our Company</p>
        <p className="text-4xl font-bold mb-4">Bridging The Gap Between Marketing And Sales <span className="text-lt-blue-500">Through Automation</span></p>
        <p className="text-lt-dark-500 mb-4">LeadsTunnel is a lead automation and management software designed for businesses of any niche and size to overcome their lead generation challenges and scale their sales efforts in a streamlined yet effective approach. </p>
      </div>
    </header>
  )
}

const MissionSection = (props) => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 mb-8 leading-relaxed text-lt-dark-700">
        <p className="text-5xl lg:text-6xl uppercase tracking-widest font-bold text-lt-dark-300 mb-4">Mission</p>
        <p>While lead generation has been the lifeline for any business to grow, the way businesses generate leads have evolved as technology and the buying process of consumers have become more sophisticated than ever before. At LeadsTunnel our mission is to help businesses keep up with their lead generation strategies by providing smart automation solutions to streamline their efforts for maximum efficiency and results.</p>
      </div>
      <div className="max-w-3xl mx-auto mb-12">
        <Img 
          fluid={props.data.globe.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          style={{WebkitMaskImage: "linear-gradient(to bottom, #3068F4, transparent 100%)", maskImage: "linear-gradient(to bottom, #3068F4, transparent 100%)", filter: "opacity(0.5) drop-shadow(0 0 0 #54C6FF)"}}
        />
      </div>
    </div>
  )
}

const StorySection = (props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-8 leading-relaxed text-lt-dark-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-24 place-content-center">
        <div className="col-span-1 lg:col-span-4">
          <Img
            fluid={props.data.story.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            className="w-full h-full"
          />
        </div>
        <div className="col-span-1 lg:col-span-8">
          <p className="text-5xl lg:text-6xl uppercase tracking-widest font-bold text-lt-dark-300 mb-4">Story</p>
          <p className="mb-4">LeadsTunnel started when Facebook launched its new lead-generating technology with Facebook Lead Ad. While the new ad medium allows advertisers to capture lead information directly within the Facebook platform, there is no system in place for advertisers to communicate with the leads immediately upon contact. Instead advertisers would need to manually download the leads from Facebook, and then import it to a CRM before reaching out to the leads.</p> 
          <p className="mb-4">This is a major flaw because every second matters when it comes to lead response time. In fact, studies have shown that the longer it takes to respond to a lead, the chance of qualifying the lead into a customer drops exponentially. </p>
          <p className="mb-4">To solve this issue, we created LeadsTunnel which literally acts as a tunnel to transfer all the leads collected from Facebook into one or more CRMs and email service providers of choice in real-time without any manual intervention. </p>
          <p className="mb-4">Since then, we have focused all our heart and energy to create solutions that will help businesses generate more qualified leads, reduce bottlenecks in the sales pipeline, and convert more prospects into loyal customers.</p>
        </div>
      </div>
    </div>
  )
}

const EcosystemSection = (props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-24">
      <div className="col-span-5 mb-16 leading-relaxed text-lt-dark-700">
        <p className="text-5xl lg:text-6xl uppercase tracking-widest font-bold text-lt-dark-300 mb-4">Ecosystem</p>
        <p className="text-base lg:text-lg mb-4">Whether you are a solopreneur, a large business corporation or anything in between, we have created different solutions to meet your lead generation goals. </p>
      </div>
      <div className="col-span-7 text-lt-dark-700">
        <div className="grid grid-cols-1 lg:grid-cols-1 auto-rows-auto gap-12">
          <div className="">
            <Img
              fluid={props.data.logos.edges[2].node.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain", objectPosition: "left" }}
              className="w-full h-12 mb-4"
            />
            <p className="mb-4">LeadsTunnel is our proprietary software to automate your lead generation efforts in real-time. Start your free trial today. </p>
          </div>
          <div className="">
            <Img
              fluid={props.data.logos.edges[3].node.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain", objectPosition: "left" }}
              className="w-full h-12 mb-4"
            />
            <p className="mb-4">LeadsTunnel University is a full training program to help you master lead generation through digital marketing. </p>
          </div>
          <div className="">
            <Img
              fluid={props.data.logos.edges[0].node.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain", objectPosition: "left" }}
              className="w-full h-12 mb-4"
            />
            <p className="mb-4">LeadsHunter For Business is a done-for-you training program to build your own automated lead machine for qualified leads. Schedule a free strategy session with one of our team now.</p>
          </div>
          <div className="">
            <Img
              fluid={props.data.logos.edges[1].node.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain", objectPosition: "left" }}
              className="w-full h-12 mb-4"
            />
            <p className="mb-4">LeadsHunter Directory gives you access to our Certified Lead Generation Specialists who you can hire to generate leads for your business</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query AboutQuery {
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
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    globe: file(relativePath: {eq: "about/img_globe.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    story: file(relativePath: {eq: "about/story_graphic.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    blogcard: file(relativePath: {eq: "about/img_blog_cards.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bgblob1: file(relativePath: {eq: "about/bg_shape_1.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bgblob2: file(relativePath: {eq: "about/bg_shape_2.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    logos: allFile(filter: {relativeDirectory: {eq: "about/logos"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          id
        }
      }
    }
  }
`

export default AboutPage
