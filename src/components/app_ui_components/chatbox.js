import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Chatbox( props ) {
  return (
    <div className={`text-lt-dark-700 block w-max ${props.className} text-xs md:text-base h-full w-full`} style={{maxWidth: "750px", minHeight: "125px"}}>
      <div className={`flex ${props.reverse === true ? "flex-row-reverse" : null} items-start`}>
        <div className="flex-grow-0 flex justify-center items-center h-7 w-8 md:w-64 md:h-64 rounded-full bg-white shadow-lg" style={{maxWidth: "45px", maxHeight: "45px"}}>
          {
            props.type === "sms" ? <FontAwesomeIcon icon={['fas', 'comment']} className={`text-${props.color}`}/>
            : props.type === "email" ? <FontAwesomeIcon icon={['fas', 'envelope']} className={`text-${props.color}`}/> 
            : props.type === "comments" ? <FontAwesomeIcon icon={['fas', 'pen']} className={`text-${props.color}`}/>
            : <FontAwesomeIcon icon={['fas', 'bolt']} className={`text-${props.color}`}/>
          }
        </div>
        <div className={`flex-grow flex-auto shadow-lg rounded-sm bg-white border-${props.color} mx-4 ${props.reverse === true ? "border-r-4" : "border-l-4"}`}>
          <div className="p-4 pb-1 md:pb-2 border-b border-lt-dark-50 md:border-b-0">
            <p className="md:mb-2">
              <span className="font-bold">
                <span className="fa-layers fa-fw mr-2">
                  <FontAwesomeIcon icon="circle" className="text-lt-blue-100" size="lg"/>
                  {
                    props.name ? 
                    <span>
                      <FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" />
                    </span> 
                    : <span>
                        <FontAwesomeIcon icon="bell" className="text-lt-blue-500" inverse transform="shrink-5" />
                        <FontAwesomeIcon icon="bell" className="text-lt-blue-500 animate-ping" inverse transform="shrink-5" />
                      </span>
                  }
                </span>
                {props.name ? props.name : "LeadBot"}&nbsp;
              </span>
              <br className="md:hidden"/>
              <span className="text-lt-dark-400 md:text-lt-dark-700">{props.date ? props.date : "2020-01-01 9:37 PM PDT"}</span>
            </p>
          </div>
          <div className="p-4 border-b border-lt-dark-50 md:border-lt-dark-100">
            <p className="text-lt-dark-600">
              {props.text ? props.text : "New Lead Received. Follow-up with Jill Green right away!"}
            </p>
          </div>
          <div className="px-4 py-2 md:py-4 text-lt-dark-300 text-xs md:text-sm">
            {
              props.receipt === "delivered" ? <p className="text-emerald-500 font-bold capitalize">Delivered</p> 
              : props.receipt === "failed" ?  <p className="text-red-500 font-bold capitalize">Failed</p> 
              : props.receipt === "read" ?  <p></p> 
              : props.receipt === "reply" ? <p className="text-right"><FontAwesomeIcon icon="reply" transform="shrink-5"/> Reply</p>
              : <p><FontAwesomeIcon icon="eye" transform="shrink-5"/> Only visible to you</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatbox
