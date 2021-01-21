import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby';

const footerLinks = [
  {
    category: 'Company',
    links: [
      {
        name: 'About Leadstunnel',
        path: '/about',
      },
      {
        name: 'Partner With Us',
        path: '/',
      },
      {
        name: 'Contact Us',
        path: 'mailto:support@leadstunnel.com',
      },
    ],
  },
  {
    category: 'Compliance',
    links: [
      {
        name: 'Affiliate Terms',
        path: '/affiliate-terms',
      },
      {
        name: 'Anti Spam',
        path: '/anti-spam',
      },
      {
        name: 'DMCA Notice',
        path: '/dmca-notice',
      },
      {
        name: 'Privacy Policy',
        path: '/privacy-policy',
      },
      {
        name: 'Terms Of Use',
        path: '/terms-of-use',
      },
    ],
  },
  {
    category: 'Resources',
    links: [
      {
        name: 'Help Center',
        path: 'https://help.leadstunnel.com/en/',
      },
      {
        name: 'Blog',
        path: 'https://blog.leadstunnel.com/',
      },
      {
        name: 'Become A LeadsHunter',
        path: 'https://leadshunter.com/',
      },
      {
        name: 'LeadsHunter Directory',
        path: 'https://leadshunter.com/',
      },
    ],
  }
]

const Footer = () => {
  return (
    <footer className="container mx-auto border-t border-blue-gray-200 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-4 gap-y-6 items-start py-16 px-4 lg:px-12 text-sm">
        <div className="lg:col-span-2 lg:col-start-1 lg:col-end-4">
        <a href="/" className="h-10 w-16">
          <StaticQuery
            query={graphql`
              query {
                file(relativePath: {eq: "LT-logo-primary.png"}) {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `  
            }
            render={ data => (
              <Img 
                className="h-10 mb-4 align-start flex justify-start"
                imgStyle={{objectFit: 'contain', objectPosition: 'left'}} 
                objectPosition="left"
                fluid={data.file.childImageSharp.fluid}
              />
            )}
          />
        </a>
        <p className="text-gray-800">LeadsTunnel. © Copyright 2021. All Rights Reserved. Subsidiary of iPro Academy</p>
      </div>
        {
          footerLinks.map(( footerLink, i ) => (
            <div key={i} className="">
              <p className="font-bold mb-2">{footerLink.category}</p>
              <ul>
                {
                footerLink.links.map(( link, i ) => {
                  if( link.path.startsWith('/') === true ) {
                    return (<li key={i} className="mb-2"><Link to={`${link.path}`} className="hover:text-lt-blue-500">{link.name}</Link></li>)
                  } else {
                    return (<li key={i} className="mb-2"><a href={`${link.path}`} className="hover:text-lt-blue-500">{link.name}</a></li>)
                  }
                })
                }
              </ul>
            </div>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer
