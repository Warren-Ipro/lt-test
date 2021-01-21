import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Button from './button';

const JumboCard = ( props ) => {
  return (
    <section className="px-4">
      <div className="container mx-auto rounded-xl overflow-hidden text-white bg-gradient-to-r from-blue-gray-900 via-blue-gray-700 to-blue-gray-900 shadow-xl">
        <div className="grid grid-cols-1 auto-rows-max md:grid-cols-5">
          <div className="col-span-1 md:col-span-1 lg:col-span-2 h-full overflow-hidden">
            {
              props.image
              ? <Img fluid={props.image} className="transform md:scale-150 lg:scale-125 origin-right h-full w-full object-cover object-right" imgStyle={{ objectFit: "contain" }} />
              : null
            }
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-3 p-8 lg:flex lg:flex-col lg:justify-center lg:py-8 xl:py-16 text-center md:text-left">
            {
              props.heading 
              ? <p className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">{props.heading}</p>
              : null
            }
            {
              props.subHeading
              ? <p className="lg:text-xl mb-6">{props.subHeading}</p>
              : null
            }
            {
              props.button
              ? <Button text={props.button.text} path={props.button.path} email={props.button.email} target={props.button.target}/>
              : null
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default JumboCard

JumboCard.propTypes = {
  image: PropTypes.object,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  button: PropTypes.object,
}