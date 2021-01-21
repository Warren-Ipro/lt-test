import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactCardSmall( props ) {
  return (
    <div className="bg-white border border-lt-dark-100 rounded-xl shadow-2xl p-4 text-sm" style={{maxWidth: "550px", width: "100%"}}>
      <div className="flex flex-row justify-center items-start">
        <div className="rounded-full bg-lt-blue-200 border border-lt-blue-300 flex justify-center items-center p-2 mr-2" style={{maxWidth: "45px", maxHeight: "45px"}}>
          <FontAwesomeIcon icon="user" className="text-lt-blue-500" transform="shrink-0" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto auto-cols-auto w-full">
          <p className="col-start-1 col-span-2 font-bold text-lt-dark-600 align-middle">
            {props.name} &nbsp;
            {
              props.scoring === "hot" ? <span className="uppercase font-medium text-red-400"><span className="fa-layers fa-fw"><FontAwesomeIcon icon={['fa', 'thermometer-full']}/> <FontAwesomeIcon className="animate-ping" icon={['fa', 'thermometer-full']}/></span> <span className="text-xs">Hot</span></span>
              : props.scoring === "warm" ? <span className="uppercase font-medium text-yellow-400"><span className="fa-layers fa-fw"><FontAwesomeIcon icon={['fa', 'thermometer-half']}/> <FontAwesomeIcon className="animate-ping" icon={['fa', 'thermometer-half']}/></span> <span className="text-xs">Warm</span></span>
              : <span className="uppercase font-medium text-lt-dark-400"><span className="fa-layers fa-fw"><FontAwesomeIcon icon={['fa', 'thermometer-empty']}/> <FontAwesomeIcon className="animate-ping" icon={['fa', 'thermometer-empty']}/></span> <span className="text-xs">Cold</span></span>
            }
          </p>
          <p className="col-start-1 text-lt-dark-300 mb-1">{props.email}</p>
          <div className="col-start-1 lg:col-start-2 mb-2 flex flex-row lg:justify-end">
            {
              props.tags ? 
              props.tags.map((tag, i) => 
                tag === "potential" ? <span key={i} className="bg-lt-blue-500 px-3 py-1 text-white text-xs rounded-sm mr-1">Potential</span>
                : tag === "success" ? <span key={i} className="bg-emerald-400 px-3 py-1 text-white text-xs rounded-sm mr-1">Success</span>
                : tag === "waiting" ? <span key={i} className="bg-yellow-500 px-3 py-1 text-white text-xs rounded-sm mr-1">Waiting</span>
                : tag === "follow up" ? <span key={i} className="bg-light-blue-400 px-3 py-1 text-white text-xs rounded-sm mr-1">Follow</span>
                : null
              ) : null
            }
          </div>
          <div className="col-start-1 col-span-2 flex flex-col lg:flex-row justify-between">
            <p className="text-lt-blue-500 font-medium">{props.company}</p>
            <p className="text-lt-dark-400 lg:text-right">Assigned To: {props.assigned}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCardSmall
