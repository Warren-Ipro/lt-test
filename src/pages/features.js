import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AutoScale from 'react-auto-scale';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from '../components/layout';
import Campaign from '../components/app_ui_components/campaignComponent';

const FeaturesPage = ({ data }) => {
  const featureList = data.allFeatureListJson.nodes
  const metadata = data.site.siteMetadata

  return (
    <Layout>
      <Helmet>
        <title>{metadata.title} | Features</title>
      </Helmet>
      <main className="overflow-x-hidden overflow-y-auto h-full">
        <Header data={data} />
        <FeatureSection1 data={featureList} />
        <FeatureSection2 data={data} list={featureList} />
        <FeatureSection3 data={data} list={featureList} />
      </main>
    </Layout>
  )
}

const Header = (props) => {
  return (
    <header className="bg-gradient-to-b from-white via-lt-blue-50 to-white mb-64 lg:mb-24">
      <div className="max-w-7xl mx-auto py-16 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max lg:gap-16 place-items-center relative px-4 h-96">
          <div className="col-span-1 col-start-1 row-start-1 row-span-1 lg:py-12">
            <p className="text-sm uppercase tracking-widest font-bold text-lt-blue-500 mb-2">Lets Talk Features</p>
            <p className="text-5xl font-bold mb-4">The New Automated Approach To <span className="text-lt-blue-500">Lead Generation</span></p>
            <p className="text-lg text-lt-dark-500 mb-4">We Have Got You Covered With Features That Will Keep Your Pipeline Healthy At All Times</p>
          </div>
          <div className="col-span-1 col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 row-span-1 h-full w-full">
            <div className="w-full h-full relative">
              <div className="grid grid-cols-12 auto-rows-auto gap-2 w-full h-full lg:skew-x-29 lg:-rotate-30 scale-125 transform lg:origin-left absolute xl:-right-1/4 2xl:-right-1/4 xl:top-1/2">
                <div className="col-start-7 col-span-5 row-start-2 row-span-3">
                  <Img
                    fluid={props.data.featureImg7.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className=""
                  />
                </div>
                <div className="col-start-2 col-span-5 row-start-5 row-span-4">
                  <Img
                    fluid={props.data.featureImg6.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className=""
                  />
                </div>
                <div className="col-start-2 col-span-5 row-start-1 row-span-3">
                  <Img
                    fluid={props.data.featureImg5.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    className=""
                  />
                </div>
                <div className="col-start-7 col-span-5 row-start-6 row-span-4">
                  <Img
                    fluid={props.data.featureImg4.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className=""
                  />
                </div>
                <div className="col-start-1 col-span-4 row-start-4 row-span-2">
                  <Img
                    fluid={props.data.featureImg3.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className=""
                  />
                </div>
                <div className="col-start-10 col-span-3 row-start-4 row-span-2">
                  <Img
                    fluid={props.data.featureImg2.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className=""
                  />
                </div>
                <div className="col-start-4 col-span-6 row-start-3 row-span-4">
                  <Img
                    fluid={props.data.featureImg1.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    className="shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full absolute -right-1/2">
            <Img 
              fluid={props.data.bgblob3.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain"}}
              style={{maxHeight: '788'}}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

const FeatureSection1 = (props) => {
  return (
    <section className="2xl:container mx-auto px-4 mb-24 lg:mb-40">
      <div className="grid lg:grid-cols-6 gap-16 lg:mb-8">
        <div className="col-span-4 relative hidden lg:block">
          <AutoScale>
            <Campaign/>
          </AutoScale>
        </div>
        <div className="col-span-2 place-self-center">
          <p className="text-5xl font-bold tracking-wide mb-8">We Created Useful Tools To Help You Manage</p>
          {props.data.slice( 0, 2 ).map((feature, i) => 
            <div key={i} className="lg:py-8 lg:border-0 border-l-4 border-lt-blue-500 px-4 mb-8">
              <p className="text-lt-dark-800 text-2xl font-bold mb-3">{feature.title}</p>
              <p className="text-lt-dark-700">{feature.description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-6">
        {props.data.slice( 2, 6 ).map(( feature, i ) => 
          <div key={i} className="group text-lt-dark-700 rounded-xl border border-lt-dark-100 p-6 transition-all duration-200 ease-in-out">
            <div className="flex items-center lg:items-start lg:flex-col">
              <Img fluid={feature.image.childImageSharp.fluid} imgStyle={{ objectFit: "contain"}} className="h-6 w-6 mb-3 mr-2 group-hover:animate-bounce" />
              <p className="text-lt-dark-800 font-bold mb-2 group-hover:text-lt-blue-500">{feature.title}</p> 
            </div>
            <p>{feature.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}

const FeatureSection2 = (props) => {
  return (
    <section className="px-4 bg-gradient-to-b from-white to-lt-blue-50 pb-16">
      <div className="2xl:container mx-auto 2xl:min-h-screen 2xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 lg:mb-10 auto-rows-auto place-content-center">
          <p className="lg:col-start-2 lg:col-span-11 font-bold text-5xl place-content-center text-right lg:text-left mb-8">Get Organized With Your Leads</p>
          <div className="lg:col-span-7 flex justify-center items-center relative z-10">
            <div className="grid grid-cols-12 auto-rows-fr auto-cols-fr w-full">
              <div className="col-start-1 lg:col-start-1 col-span-12 lg:col-span-10 row-start-3 lg:row-start-1 row-span-5">
                <Img
                  fluid={props.data.featureImg9.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain"}} 
                  className="shadow-lg rounded-lg"
                />
              </div>
              <div className="col-start-1 lg:col-start-9 col-span-4 lg:col-span-3 row-start-1 lg:row-start-4 row-span-4">
                <Img
                  fluid={props.data.featureImg10.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain", objectPosition: "top"}} 
                  className="shadow-2xl"
                />
              </div>
              <div className="col-start-4 lg:col-start-10 col-span-6 lg:col-span-3 row-start-2 lg:row-start-3 row-span-4 lg:row-span-2">
                <Img
                  fluid={props.data.featureImg11.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain", objectPosition: "top"}} 
                  className="shadow-xl"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 -z-10">
              <svg width="629" height="533" viewBox="0 0 629 533" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.02" fillRule="evenodd" clipRule="evenodd" d="M68.7913 503.588C23.9354 461.494 43.3267 387.023 32.2715 326.51C21.6658 268.458 -12.0154 211.655 5.14198 155.191C22.582 97.7973 69.6694 50.4877 123.921 24.8962C174.33 1.11776 232.029 24.2839 287.714 21.8979C341.314 19.6012 399.292 -16.8972 445.034 11.1371C490.977 39.2951 478.417 111.335 507.578 156.649C540.22 207.373 612.287 230.879 624.461 289.957C637.112 351.341 617.398 423.79 571.406 466.366C526.02 508.38 454.22 491.953 393.51 503.754C344.258 513.328 298.42 529.212 248.245 529.186C186.573 529.155 113.763 545.791 68.7913 503.588Z" fill="#132A62"/>
              </svg>
            </div>
          </div>
          <div className="lg:col-span-4 z-20">
            <div className="grid grid-col-1 auto-rows-auto gap-6 lg:gap-0 lg:divide-y lg:divide-lt-dark-100">
              {
                props.list.slice( 6, 9 ).map((feature, i) => 
                  <div key={i} className="p-4 lg:py-6 border-l-4 border-lt-blue-500 lg:border-0">
                    <p className="text-lt-dark-800 text-2xl font-bold mb-3">{feature.title}</p>
                    <p className="text-lt-dark-600">{feature.description}</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-start-1 lg:col-start-2 lg:col-span-4 place-self-center">
            <div className="grid grid-col-1 auto-rows-auto gap-6 lg:gap-0 lg:divide-y lg:divide-lt-dark-100">
              {
                props.list.slice( 9, 12 ).map((feature, i) => 
                  <div key={i} className="p-4 lg:py-6 border-l-4 border-lt-blue-500 lg:border-0">
                    <p className="text-lt-dark-800 text-2xl font-bold mb-3">{feature.title}</p>
                    <p className="text-lt-dark-600">{feature.description}</p>
                  </div>
                )
              }
            </div>
          </div>
          <div className="hidden col-span-1 lg:col-span-7 lg:flex justify-center items-center">
            <div className="grid grid-cols-12 auto-rows-fr auto-cols-fr w-full">
              <div className="col-start-1 col-span-10 row-start-2 row-span-3">
                <Img
                  fluid={props.data.featureImg12.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain"}} 
                />
              </div>
              <div className="col-start-4 col-span-9 row-start-5 row-span-4">
                <Img
                  fluid={props.data.featureImg13.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain"}} 
                />
              </div>
              <div className="col-start-10 col-span-1 row-start-2 row-span-4 border-r-2 border-lt-blue-500 border-dotted"></div>
              <div className="col-start-2 col-span-1 row-start-4 row-span-5 border-r-2 border-lt-blue-500 border-dotted"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureSection3 = (props) => {
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
  return (
    <section className="bg-gradient-to-b from-blue-gray-900 to-black text-white py-16 lg:py-52">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-5xl font-bold mb-24">Seamlessly Integrate With Your Current Workflow</p>
        {props.list.slice( 12, 16 ).map((feature, i) => 
          <div key={i} className="grid grid-cols-8 lg:grid-cols-6 gap-6 mb-24 place-content-start">
            <div className="col-span-2">
                {
                  feature.image != null 
                  ? <div className="flex flex-col justify-center align-middle items-center lg:bg-white rounded-lg lg:shadow-lg h-full lg:h-56 w-full lg:w-56">
                      <Img
                        fluid={feature.image.childImageSharp.fluid}
                        imgStyle={{ objectFit: "contain"}} 
                        className="lg:h-20 lg:w-20 lg:mb-8 h-full w-full"
                      />
                      <p className="text-sm text-lt-dark-800 font-bold hidden lg:block ">{feature.imgText}</p>
                    </div>
                  : null
                }
            </div>
            <div key={i} className="col-span-6 lg:col-span-4 lg:p-8">
              <p className="text-2xl font-bold mb-3">{feature.title}</p>
              <p>{feature.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-3xl mx-auto text-center px-4 mb-4">
        <p className="text-2xl font-bold mb-3">{props.list[16].title}</p>
        <p className="mb-6">{props.list[16].description}</p>
        <Link to="/integrations" className="text-xl text-lt-blue-500 hover:underline">Explore Our List Of Integrations <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/></Link>
      </div>
      <div className="max-w-4xl mx-auto lg:py-16 bg-gradient-to-b from-black via-blue-gray-900 to-black fade-sides-dark">
        <Slider {...slideLeftSetting}>
          {props.data.brands.nodes.map((brand, i) => 
            <div key={i} className="h-16 mx-4 lg:px-0">
              <Img fluid={brand.childImageSharp.fluid} className="h-full w-12 lg:w-24" imgStyle={{ objectFit: "contain" }} />
            </div>
          )}
        </Slider>
      </div>
    </section>
  )
}

export const query = graphql`
  query FeatureQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allFeatureListJson {
      nodes {
        title
        description
        imgText
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    bgblob3: file(relativePath: {eq: "feature/bg_shape_3.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg1: file(
      name: {eq: "feature_header_img_01"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg2: file(
      name: {eq: "feature_header_img_02"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg3: file(
      name: {eq: "feature_header_img_03"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg4: file(
      name: {eq: "feature_header_img_04"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg5: file(
      name: {eq: "feature_header_img_05"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg6: file(
      name: {eq: "feature_header_img_06"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg7: file(
      name: {eq: "feature_header_img_07"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg8: file(
      name: {eq: "feature_img_08"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg9: file(
      name: {eq: "feature_img_09"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg10: file(
      name: {eq: "feature_img_10"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg11: file(
      name: {eq: "feature_img_11"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg12: file(
      name: {eq: "feature_img_12"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    featureImg13: file(
      name: {eq: "feature_img_13"},
      extension: {eq: "png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    brands: allFile (filter: {relativeDirectory: {eq: "brands/icons"}}) {
      nodes {
        base
        id
        childImageSharp {
          fluid ( maxWidth: 75 ){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default FeaturesPage