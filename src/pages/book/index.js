import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'

const Book = () => {
  const data = useStaticQuery(graphql`
    query BookQuery {
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
        <title>{metadata.title} | Book</title>
        <script src="https://events.genndi.com/register.evergreen.extra.js" language="javascript" type="text/javascript" async></script>
      </Helmet>
      <nav className="fixed top-0 w-full px-4 py-8 bg-white shadow z-50">
        <Img 
          fluid={data.logo.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="h-8"
        />
      </nav>
      <div className="bg-gradient-to-b from-blue-gray-50 to-white py-8 lg:py-16">
        <section className="max-w-4xl mx-auto text-blue-gray-800 mb-4 px-4">
          <p className="text-lg md:text-3xl font-bold mb-2 text-center">Schedule Your FREE Strategy Session With Our Team To Learn How LeadsTunnel University Can Help You Generate High-Quality Leads For Pennies On The Dollar</p>
          <iframe src="https://app.acuityscheduling.com/schedule.php?owner=20530778&appointmentType=17564724" title="Schedule Appointment" width="100%" height="1000" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </section>
      </div>
    </Layout>
  )
}

export default Book
