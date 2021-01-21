import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layout';
import JumboCard from '../components/jumboCard';

const Integrations = ({ data }) => {
  const [filter, setFilter] = useState({
    type: 'ALL',
    desc: 'All Integrations'
  });
  const integrations = data.allIntegrationsJson.edges.map(({ node }) => {
    const { id, name, type, image } = node;
    return {
      id,
      name,
      type,
      image: image.childImageSharp.fluid,
    };
  });
  const metadata = data.site.siteMetadata

  const handleFilterChange = (newFilter) => {
    switch (newFilter) {
      case "ALL" :
        setFilter({type: 'ALL', desc: 'All Integrations'})
        break;
      case "CRM" :
        setFilter({type: 'CRM', desc: 'Customer Relationship Management'})
        break;
      case "ESP" :
        setFilter({type: 'ESP', desc: 'Email Service Provider'})
        break;
      default :
        setFilter({type: 'ALL', desc: 'All Integrations'})
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>{metadata.title} | Features</title>
      </Helmet>
      <main>
        <Header 
          data={data} 
          onChange={handleFilterChange} 
          filter={filter} 
        />
        <section className="px-4 mb-16">
          <IntegrationList 
            data={data} 
            integrations={integrations} 
            filter={filter} 
          />
        </section>
        <JumboCard
          image={data.request.childImageSharp.fluid}
          heading="Don't See Your Integration On Our List?"
          subHeading="Our team is always looking to integrat tools that you are familiar with."
          button={{
            text: "Request an Integration",
            email: "support@leadstunnel.com",
          }}
        />
      </main>
    </Layout>
  )
}

const Header = (props) => {
  const handleFilterChange = (event) => {
    props.onChange(event.target.value)
  }
  return (
    <BackgroundImage
      Tag="header"
      className={`pt-16 lg:pt-20 pb-4 lg:pb-10 bg-center bg-cover px-4`}
      fluid={props.data.header.childImageSharp.fluid}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest font-bold text-lt-blue-500 mb-2">Integrate With All Your Needs</p>
        <p className="text-3xl lg:text-4xl font-bold mb-4">Connect and Sync Your Leads With <span className="text-lt-blue-500">Over 20 Autoresponders and CRMs</span> In Real-Time</p>
        <p className="lg:text-lg text-lt-dark-500 mb-4">Or use Leadstunnel’s built-in leads manager to store lead data, organize and nurture leads for the sales pipeline.</p>
        <div className="inline-flex flex-row mx-auto text-bold text-lt-dark-400 mb-4 lg:mb-12">
          <button onClick={(event) => (handleFilterChange(event))} value="ALL" className={`text-sm font-bold tracking-wide border border-lt-dark-300 py-2 px-8 lg:px-12 rounded-lg rounded-r-none focus:ring-0 ${props.filter.type === 'ALL' ? 'bg-lt-blue-500 text-white' : null }`}>All</button>
          <button onClick={(event) => (handleFilterChange(event))} value="CRM" className={`text-sm font-bold tracking-wide border border-lt-dark-300 py-2 px-8 lg:px-12 border-l-0 border-r-0 focus:ring-0 ${props.filter.type === 'CRM' ? 'bg-lt-blue-500 text-white' : null }`}>CRM</button>
          <button onClick={(event) => (handleFilterChange(event))} value="ESP" className={`text-sm font-bold tracking-wide border border-lt-dark-300 py-2 px-8 lg:px-12 rounded-lg rounded-l-none focus:ring-0 ${props.filter.type === 'ESP' ? 'bg-lt-blue-500 text-white' : null }`}>ESP</button>
        </div>
        <div className="">
          <p id="inte-title" className="text-lt-dark-600 font-bold tracking-wide uppercase">{props.filter.type}</p>
          <p id="inte-desc" className="text-lt-dark-500">{props.filter.desc}</p>
        </div>
      </div>
    </BackgroundImage>
  )
}

const integrationCard = (props) => {
  return (
    <div key={props.id} className={`p-4 lg:p-6 text-center border border-lt-dark-100 rounded-xl flex flex-col items-center justify-center shadow-lg type-${props.type}`}>
      <Img
        fluid={props.image}
        imgStyle={{ objectFit: "contain" }}
        className="mb-3 h-12 w-32"
      />
      <p className="uppercase font-bold text-lt-dark-700">{props.type}</p>
      <p className="hidden lg:block text-lt-dark-600">{props.name}</p>
    </div>
  )
}

const IntegrationList = (props) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 lg:gap-6">
        {
          props.filter.type === 'CRM' ?
            props.integrations.filter(integration => integration.type.includes('CRM')).map(({ id, name, type, image  }) => (
              integrationCard({id, name, type, image})
            ))
          : props.filter.type === 'ESP' ? 
            props.integrations.filter(integration => integration.type.includes('ESP')).map(({ id, name, type, image  }) => (
              integrationCard({id, name, type, image})
            ))
          : 
            props.integrations.map(({ id, name, type, image  }) => (
              integrationCard({id, name, type, image})
          ))
        }
      </div>
    </div>
  )
}

export const query = graphql` 
  query IntegrationQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allIntegrationsJson {
      edges {
        node {
          id
          name
          type
          image {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    header: file(relativePath: {eq: "bg-plus.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    request: file(relativePath: {eq: "integrations/integration-graphics.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Integrations