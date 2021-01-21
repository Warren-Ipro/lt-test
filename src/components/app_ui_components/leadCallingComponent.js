import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ltLogo from '../../images/LT-logo-white.svg'
import ltIcon from '../../images/LT-icon.svg'
import ltuLogo from '../../images/about/logos/ltu_logo_primary.png'
import Chatbox from './chatbox'

const LeadCallingComponent = () => {
  return (
    <div style={{width: "1920px", height: "100%", maxHeight: "1316px"}}>
      <section className="bg-blue-gray-100 w-full h-full flex">
        <aside  className="sidebar flex flex-col justify-between bg-lt-blue-600 text-white" style={{width: '275px'}}>
          <div>
            <div className="mx-3 py-6">
              <img className="w-4/5" src={ltLogo} alt="Leadstunnel Logo"/>
            </div>
            <div className="mb-3 mx-3">
              <button className="text-left bg-lt-blue-500 rounded-lg px-2 py-3 w-full text-white flex flex-row justify-between items-center">
                <div>
                  <span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100" size="lg"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-4" /></span>
                  frank@gmail.com
                </div>
                <FontAwesomeIcon icon={['fa', 'chevron-down']} size="xs"/>
              </button>
            </div>
            <div className="mx-3">
              <div className="text-left bg-lt-blue-600 rounded-lg py-3 w-full text-white flex flex-row justify-between items-center">
                <div className="flex align-middle items-center">
                  <span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100" size="lg"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-4" /></span>
                  <div>
                    <p className="font-medium">Mitchell Howard</p>
                    <p className="text-sm">(207)-555-0117</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={['fa', 'external-link-alt']} size="xs"/>
              </div>
              <div className="text-left bg-lt-blue-600 rounded-lg py-3 w-full text-white flex flex-row justify-between items-center">
                <div className="flex">
                  <div className="transform scale-50">
                    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input id="toogleA" type="checkbox" className="hidden" />
                        <div className="toggle__line w-10 h-4 bg-lt-blue-300 rounded-full shadow-inner" ></div>
                        <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" ></div>
                      </div>
                    </label>
                  </div>
                  <span className="text-xs">Record This Call</span>
                </div>
                <button className="bg-red-500 text-white rounded-full text-xs uppercase font-medium p-1"><FontAwesomeIcon icon="phone" rotation={90} transform="shrink-4" /> End Call</button>
              </div>
            </div>
            <div className="border-b border-lt-blue-400">
              <div className="m-3">
                <div className="flex flex-row justify-between items-center py-2">
                  <div><FontAwesomeIcon icon={['fas', 'chart-line']} className="mr-2"/>Campaigns</div>
                  <span className="fa-layers fa-fw"><FontAwesomeIcon icon={['far', 'circle']} className="text-lt-blue-100"/><FontAwesomeIcon icon="plus" inverse transform="shrink-8" /></span>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><FontAwesomeIcon icon={['fas', 'bullhorn']} className="mr-2"/>SMS Broadcasts</div>
                  <span className="fa-layers fa-fw"><FontAwesomeIcon icon={['far', 'circle']} className="text-lt-blue-100"/><FontAwesomeIcon icon="plus" inverse transform="shrink-8" /></span>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><FontAwesomeIcon icon={['fas', 'bookmark']} className="mr-2"/>Template Manager</div>
                  <span className="fa-layers fa-fw"><FontAwesomeIcon icon={['far', 'circle']} className="text-lt-blue-100"/><FontAwesomeIcon icon="plus" inverse transform="shrink-8" /></span>
                </div>
              </div>
            </div>
            <div className="border-b border-lt-blue-400">
              <div className="m-3">
                <p className="uppercase py-2 text-xs">Recent Campaigns</p>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><FontAwesomeIcon icon={['fab', 'google']} className="mr-2"/>Local Coffee Shop</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><FontAwesomeIcon icon={['fab', 'facebook-square']} className="mr-2"/>Online Jewerly Brand</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><FontAwesomeIcon icon={['fab', 'google']} className="mr-2"/>Real Estate Client</div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="my-3">
                <p className="uppercase py-2 px-3 text-xs">Conversations</p>
                <div className="flex flex-row justify-between items-center py-2 px-3">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="bell" className="text-lt-blue-500" inverse transform="shrink-5" /></span>LeadsBot</div>
                  <span className="text-xs h-4 w-4 text-center rounded-sm bg-yellow-400">1</span>
                </div>
                <div className="flex flex-row justify-between items-center py-2 px-3 bg-lt-blue-700">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Gregory Richards</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2 px-3">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Pat Henery</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2 px-3">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Dwight Flores</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2 px-3">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Tyrone Williamson</div>
                </div>
              </div>
            </div>
          </div>
          <div className="university">
            <div className="mb-3 mx-3">
              <button className="text-left bg-white rounded px-2 py-3 w-full text-black flex flex-row justify-between items-center">
                <div className="logo h-6 object-contain">
                  <img className="h-full" src={ltuLogo} alt="LeadsTunnel University Logo"/>
                </div>
                <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
              </button>
            </div>
          </div>
        </aside>
        {/* sidebar */}
        <div className="w-full h-full relative">
          <header className="flex flex-row justify-between align-top p-6 bg-white border-b border-lt-dark-100">
            <div className="">
              <div className="flex items-center">
                <div className="rounded-full bg-lt-blue-200 border border-lt-blue-300 flex justify-center items-center mr-2" style={{minWidth: "45px", minHeight: "45px"}}>
                  <FontAwesomeIcon icon="user" className="text-lt-blue-500" transform="shrink-0" />
                </div>
                <p className="font-bold text-lt-dark-700">Gregory Richards &nbsp; <span className="uppercase font-medium text-red-400"><FontAwesomeIcon icon={['fa', 'thermometer-full']}/> <span className="text-xs">Hot</span></span></p>
              </div>
            </div>
            <div className="">
              <button className="bg-lt-blue-500 rounded-full uppercase font-medium text-white py-1 px-4">Lead Profile</button>
            </div>
          </header>
          {/* header */}
          <section className="bg-white">
            <div className="flex flex-row">
              <div className="w-full h-full flex flex-col">
                <div className="flex flex-col px-8 mb-8">
                  <Chatbox 
                    className="mb-6"
                    color="lt-dark-400"
                    text="New Lead Received. Follow-up with Gregory Richards right away!"
                  />
                  <Chatbox
                    className="mb-6 self-end" 
                    reverse={true}
                    name="Me"
                    color="yellow-500"
                    type="sms"
                    text="Hello Gregory! I wanted to reach out to you today to answer any questions you might have about our service."
                    receipt="delivered"
                  />
                  <Chatbox 
                    className="mb-6"
                    name="Gregory Richards"
                    type="sms"
                    color="yellow-500"
                    text="Thank you. I am interested in your service. Can I get more information about the offer?"
                    receipt="read"
                  />
                  <Chatbox 
                    className="mb-6 self-end"
                    reverse={true}
                    name="Me"
                    color="yellow-500"
                    receipt="delivered"
                    text="No problem. Do you have time for a brief phone call? I can give you all the details and answer any questions or concerns."
                    type="sms"
                  />
                  <div className="w-full grid grid-cols-11 my-8">
                    <div className="col-start-1 col-span-5 relative"><div className="border-b border-lt-blue-500 absolute top-1/2 pb-1 w-full"></div></div>
                    <p className="col-start-6 col-span-1 text-lt-blue-500 text-center">New</p>
                    <div className="col-start-7 col-span-5 relative"><div className="border-b border-lt-blue-500 absolute top-1/2 pb-1 w-full"></div></div>
                  </div>
                  <Chatbox 
                    className="mb-6"
                    name="Gregory Richards"
                    type="sms"
                    color="yellow-500"
                    text="Yes! That sounds wonderful."
                    receipt="reply"
                  />
                </div>
                <div className="w-full border-t border-lt-dark-100">
                  <div className="flex flex-row -mt-4 px-8">
                    <div className="rounded-full bg-lt-dark-400 flex justify-center items-center mr-2" style={{minWidth: "30px", minHeight: "30px"}}>
                      <FontAwesomeIcon icon="pen" className="text-white" transform="shrink-0" />
                    </div>
                    <div className="rounded-full bg-lt-dark-400 flex justify-center items-center mr-2" style={{minWidth: "30px", minHeight: "30px"}}>
                      <FontAwesomeIcon icon="envelope" className="text-white" transform="shrink-0" />
                    </div>
                    <div className="rounded-full bg-lt-dark-400 flex justify-center items-center mr-2" style={{minWidth: "30px", minHeight: "30px"}}>
                      <FontAwesomeIcon icon="comment" className="text-white" transform="shrink-0" />
                    </div>
                    <div className="rounded-full bg-lt-blue-500 flex justify-center items-center mr-2" style={{minWidth: "30px", minHeight: "30px"}}>
                      <FontAwesomeIcon icon="phone" className="text-white" transform="shrink-0" rotation={90}/>
                    </div>
                    <div className="rounded-full bg-lt-dark-400 flex justify-center items-center mr-2" style={{minWidth: "30px", minHeight: "30px"}}>
                      <FontAwesomeIcon icon="plus" className="text-white" transform="shrink-0" />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-8 text-lt-dark-700 p-8">
                    <div className="col-start-1 col-span-1">
                      <div className="w-full mb-4">
                        <p className="font-medium mb-3">Calling</p>
                        <div className="flex justify-between border-b border-lt-dark-100">
                          <p className="text-sm pb-2">(270) 555-0117</p>
                          <FontAwesomeIcon icon={['fa', 'caret-down']} size="xs"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-2 col-span-2">
                      <div className="flex">
                        <div className="transform scale-50">
                          <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                            <div className="relative">
                              <input id="toogleA" type="checkbox" className="hidden" />
                              <div className="toggle__line w-10 h-4 bg-lt-dark-100 rounded-full shadow-inner" ></div>
                              <div className="toggle__dot absolute w-6 h-6 bg-white border border-lt-dark-50 rounded-full shadow inset-y-0 left-0" ></div>
                            </div>
                          </label>
                        </div>
                        <span className="text-xs text-lt-dark-300">Record This Call</span>
                      </div>
                      <p className="text-lt-dark-300 text-sm">Enable this before you start the call if you want to record your conversation</p>
                    </div>
                    <div className="col-start-4 col-span-1 flex justify-end items-center align-middle">
                      <p className="text-sm mr-4 text-lt-dark-400"><FontAwesomeIcon icon="microphone-slash" transform="shrink-0" />&nbsp;03:45:07</p>
                      <button className="bg-red-600 rounded-full text-white px-3 py-1"><FontAwesomeIcon icon="phone" rotation={90} transform="shrink-4" /> End Call</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* conversation window */}
              <div className="border-l border-lt-dark-100 text-lt-dark-600" style={{width: "100%", maxWidth: "426px"}}>
                <div className="p-4 bg-lt-dark-100 flex justify-between">
                  <p className="font-bold">Lead Profile</p>
                  <FontAwesomeIcon icon="times" className="text-gray-500" transform="shrink-0" />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="flex">
                    <div className="rounded-full bg-lt-blue-200 border border-lt-blue-300 flex justify-center items-center mr-2" style={{minWidth: "45px", minHeight: "45px"}}>
                      <FontAwesomeIcon icon="user" className="text-lt-blue-500" transform="shrink-0" />
                    </div>
                    <div>
                      <p className="font-bold text-lt-dark-700">Gregory Richards &nbsp; <span className="uppercase font-medium text-red-400"><FontAwesomeIcon icon={['fa', 'thermometer-full']}/> <span className="text-xs">Hot</span></span></p>
                      <div className="flex">
                        <span className="bg-lt-blue-500 px-3 text-white text-xs rounded-sm mx-1">Potential</span>
                        <span className="bg-emerald-500 px-3 text-white text-xs rounded-sm mx-1">Success</span>
                        <span className="bg-yellow-500 px-3 text-white text-xs rounded-sm mx-1">Waiting</span>
                        <span className="bg-light-blue-400 px-3 text-white text-xs rounded-sm mx-1">Follow</span>
                      </div>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
                </div>
                <div className="px-4 pb-8 border-b border-lt-dark-100">
                  <div className="w-full mb-4">
                    <p className="font-medium mb-3">Assigned To</p>
                    <p className="text-sm pb-2 border-b border-lt-dark-100">Aubrey Mckinney</p>
                  </div>
                  <div className="w-full mb-4">
                    <p className="font-medium mb-3">First Name</p>
                    <p className="text-sm pb-2 border-b border-lt-dark-100">Gregory</p>
                  </div>
                  <div className="w-full mb-4">
                    <p className="font-medium mb-3">Last Name</p>
                    <p className="text-sm pb-2 border-b border-lt-dark-100">Richards</p>
                  </div>
                  <div className="w-full mb-4">
                    <p className="font-medium mb-3">Primary Email</p>
                    <p className="text-sm pb-2 border-b border-lt-dark-100">g.richards@email.com</p>
                  </div>
                  <div className="w-full mb-4">
                    <p className="font-medium mb-3">Primary Phone</p>
                    <p className="text-sm pb-2 border-b border-lt-dark-100">(270) 555-0117</p>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-white px-3 py-1 mx-1 uppercase text-lt-blue-500 border border-lt-blue-500 font-bold text-xs rounded-full"><FontAwesomeIcon icon={['fa', 'code-branch']} size="sm"/> &nbsp; Merge Leads</button>
                    <button className="bg-lt-blue-500 px-3 py-1 mx-1 uppercase text-white font-bold text-xs rounded-full">Edit</button>
                  </div>
                </div>
                <div>
                  <div className="p-4 border-b border-lt-dark-100 flex justify-between items-center">
                    <p className="font-bold">Lead Score</p>
                    <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
                  </div>
                  <div className="p-4 border-b border-lt-dark-100 flex justify-between items-center">
                    <p className="font-bold">Tags</p>
                    <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
                  </div>
                  <div className="p-4 border-b border-lt-dark-100 flex justify-between items-center">
                    <p className="font-bold">Files</p>
                    <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
                  </div>
                  <div className="p-4 border-b border-lt-dark-100 flex justify-between items-center">
                    <p className="font-bold"><FontAwesomeIcon icon={['fab', 'google']} size="sm"/>&nbsp;Google Campaign</p>
                    <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
                  </div>
                  <div className="p-4 border-b border-lt-dark-100 flex justify-between items-center">
                    <p className="font-bold"><FontAwesomeIcon icon={['fab', 'facebook-square']} size="sm"/>&nbsp;Facebook Campaign</p>
                    <FontAwesomeIcon icon={['fa', 'chevron-right']} size="xs"/>
                  </div>
                </div>
              </div>
              {/* lead profile */}
            </div>
          </section>
          {/* body */}
          <footer className="w-full bg-white py-3 px-6 flex flex-row justify-between items-center text-lt-dark-400 text-xs shadow-lg">
            <div className="flex flex-row items-center justify-around">
              <p className="mx-2">FAQ</p>
              <p className="mx-2">Privacy Policy</p>
              <p className="mx-2">Refund Policy</p>
              <p className="mx-2">Terms Of Use</p>
              <p className="mx-2">Anti-Spam</p>
            </div>
            <div className="flex flex-row items-center">
              <p>© 2019. LeadsTunnel All rights reserved</p>
              <img className="h-6 ml-2" src={ltIcon} alt="LeadsTunnel Icon"/>
            </div>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default LeadCallingComponent
