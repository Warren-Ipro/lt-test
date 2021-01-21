import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function SimpleNav() {
  
  const data = useStaticQuery(graphql`
    query SimpleNavQuery {
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
  return (
    <div className="fixed top-0 w-full px-4 py-8 bg-white shadow z-50">
      <Img 
        fluid={data.logo.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        className="h-8"
      />
    </div>
  )
}

export default SimpleNav
