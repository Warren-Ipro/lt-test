import React from 'react'
import './accordion.css'

const Accordion = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className={`${props.wrapperClassName} accordion-wrapper ${props.wrapperBg ? props.wrapperBg : "bg-blue-gray-50"} text-lt-dark-700`}>
      <div
        className={`accordion-title p-4 ${isOpen ? "open" : ""} ${props.className} focus:ring-0`}
        onClick={() => setOpen(!isOpen)}
        onKeyDown={() => setOpen(!isOpen)}
        role="button"
        tabIndex={props.tabIndex}
      >
        {props.title}
      </div>
      <div className={`accordion-item ${props.bodyBg ? props.bodyBg : "bg-white"} ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content leading-loose px-4 py-8">{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;