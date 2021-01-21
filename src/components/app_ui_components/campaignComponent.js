import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AboutComponent from './campaignAboutComponent'
import ltLogo from '../../images/LT-logo-white.svg'
import ltIcon from '../../images/LT-icon.svg'
import ltuLogo from '../../images/about/logos/ltu_logo_primary.png'
import graph from '../../images/components/dashboard/img_graph.png'

const CampaignComponent = () => {
  return (
    <div style={{width: "1920px", height: "100%", maxHeight: "1316px"}}>
      <section className="bg-blue-gray-100 w-full h-full flex">
        <aside className="sidebar flex flex-col justify-between bg-lt-blue-600 text-white" style={{width: '275px'}}>
          <div>
            <div className="mx-3 py-6">
              <img className="w-4/5" src={ltLogo} alt="Leadstunnel Logo"/>
            </div>
            <div className="mb-3 mx-3">
              <button className="text-left bg-lt-blue-500 rounded-xl px-2 py-3 w-full text-white flex flex-row justify-between items-center">
                <div>
                  <span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100" size="lg"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-4" /></span>
                  frank@gmail.com
                </div>
                <FontAwesomeIcon icon={['fa', 'chevron-down']} size="xs"/>
              </button>
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
              <div className="m-3">
                <p className="uppercase py-2 text-xs">Conversationss</p>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="bell" className="text-lt-blue-500" inverse transform="shrink-5" /></span>LeadsBot</div>
                  <span className="text-xs h-4 w-4 text-center rounded-sm bg-yellow-400">1</span>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Gregory Richards</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Pat Henery</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
                  <div><span className="fa-layers fa-fw mr-2"><FontAwesomeIcon icon="circle" className="text-lt-blue-100"/><FontAwesomeIcon icon="user" className="text-lt-blue-500" inverse transform="shrink-5" /></span>Dwight Flores</div>
                </div>
                <div className="flex flex-row justify-between items-center py-2">
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
        <div className="w-full h-full relative">
          <section className="py-14 px-24">
            <header className="flex flex-row justify-between align-top mb-6">
              <div className="">
                <div className="flex">
                  <p className="font-bold text-2xl text-lt-dark-800">Local Coffee Shop</p>
                  <div className="flex ml-4">
                    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input id="toogleA" type="checkbox" className="hidden" />
                        <div className="toggle__line w-10 h-4 bg-lt-blue-200 rounded-full shadow-inner" ></div>
                        <div className="toggle__dot absolute w-6 h-6 bg-lt-dark-300 rounded-full shadow inset-y-0 left-0" ></div>
                      </div>
                    </label>
                    <span className="text-red-600 uppercase text-sm ml-3"><FontAwesomeIcon icon={['fa', 'trash']} size="xs" className="mr-2"/>Delete Campaign</span>
                  </div>
                </div>
                <p className="text-lt-blue-500">Campaigns/</p>
              </div>
              <div className="">
                <button className="bg-lt-blue-500 rounded-full uppercase font-medium text-white py-1 px-4">Campaign Settings</button>
              </div>
            </header>
            <section className="grid grid-cols-6 gap-6 mb-6">
              <div className="bg-white text-lt-dark-700 shadow-lg col-span-4">
                <div className="border-b border-lt-dark-100 p-6">
                  <div className="flex justify-between items-baseline">
                    <p  className="font-bold">Campaign Overview</p>
                    <p className="text-sm text-lt-dark-500">Date: <span className="underline">01/01/2020 - 01/08/2020</span> <FontAwesomeIcon icon={['fa', 'caret-down']} size="xs" className="mr-2"/></p>
                  </div>
                </div>
                <div className="px-6 pt-16 pb-8">
                  <img src={graph} alt="table graph"/>
                </div>
              </div>
              <div className="col-span-2">
                <AboutComponent />
              </div>
            </section>
            <section>
              <div className="bg-white text-lt-dark-700 shadow-lg col-span-4">
                <div className="border-b border-lt-dark-100 p-6">
                  <div className="flex justify-between items-baseline">
                    <div className="flex">
                      <p className="font-bold mr-4">Leads</p>
                      <p className="text-lt-dark-200 border-b border-lt-dark-200 pb-1 w-64"><FontAwesomeIcon icon={['fa', 'search']} size="sm"/> Search</p>
                    </div>
                    <div className="">
                      <button className="bg-white border border-lt-dark-400 text-lt-dark-400 rounded-full uppercase font-medium py-1 px-4 mx-2">Merge Leads</button>
                      <button className="bg-white border border-lt-dark-400 text-lt-dark-400 rounded-full uppercase font-medium py-1 px-4 mx-2">Export Leads</button>
                    </div>
                  </div>
                </div>
                <div className="">
                <table className="border-collapse border border-lt-dark-100 w-full">
                  <thead>
                    <tr>
                      <th className="border border-lt-dark-100 p-2 text-left">Action</th>
                      <th className="border border-lt-dark-100 p-2 text-left w-1/12">Score <FontAwesomeIcon icon={['fa', 'question-circle']} size="sm" className="text-lt-dark-200"/></th>
                      <th className="border border-lt-dark-100 p-2 text-left w-2/12">First Name <span className="float-right"><FontAwesomeIcon icon={['fa', 'exchange-alt']} rotation={90} className="text-lt-dark-200"/></span></th>
                      <th className="border border-lt-dark-100 p-2 text-left w-2/12">Last Name <span className="float-right"><FontAwesomeIcon icon={['fa', 'exchange-alt']} rotation={90} className="text-lt-dark-200"/></span></th>
                      <th className="border border-lt-dark-100 p-2 text-left w-2/12">Email <span className="float-right"><FontAwesomeIcon icon={['fa', 'exchange-alt']} rotation={90} className="text-lt-dark-200"/></span></th>
                      <th className="border border-lt-dark-100 p-2 text-left w-3/12">Tags <FontAwesomeIcon icon={['fa', 'question-circle']} size="sm" className="text-lt-dark-200"/> <span className="float-right"><FontAwesomeIcon icon={['fa', 'exchange-alt']} rotation={90} className="text-lt-dark-200"/></span></th>
                      <th className="border border-lt-dark-100 p-2 text-left w-2/12">Assigned To <span className="float-right"><FontAwesomeIcon icon={['fa', 'exchange-alt']} rotation={90} className="text-lt-dark-200"/></span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-light-blue-50">
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-lt-dark-400"><FontAwesomeIcon icon={['fa', 'thermometer-empty']}/> Cold</td>
                      <td className="p-2 border ">Georgia</td>
                      <td className="p-2 border ">McLaughin</td>
                      <td className="p-2 border ">g.mclaughin@gmail.com</td>
                      <td className="">
                        <span className="bg-yellow-400 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Follow</span>
                        <span className="bg-lt-blue-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Working</span>
                      </td>
                      <td className="p-2 border ">Dave</td>
                    </tr>
                    <tr>
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-red-400"><FontAwesomeIcon icon={['fa', 'thermometer-full']}/> Hot</td>
                      <td className="p-2 border ">James</td>
                      <td className="p-2 border ">Botosh</td>
                      <td className="p-2 border ">j.botosh@email.com</td>
                      <td className="">
                        <span className="bg-lt-blue-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Working</span>
                        <span className="bg-cyan-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Closing</span>
                        <span className="bg-emerald-400 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Success</span>
                      </td>
                      <td className="p-2 border ">Lucy</td>
                    </tr>
                    <tr className="bg-light-blue-50">
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-red-400"><FontAwesomeIcon icon={['fa', 'thermometer-full']}/> Hot</td>
                      <td className="p-2 border ">Mira</td>
                      <td className="p-2 border ">Septimus</td>
                      <td className="p-2 border ">mira-s@email.com</td>
                      <td className="">
                        <span className="bg-yellow-400 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Follow</span>
                        <span className="bg-cyan-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Closing</span>
                      </td>
                      <td className="p-2 border ">Dave</td>
                    </tr>
                    <tr>
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-red-400"><FontAwesomeIcon icon={['fa', 'thermometer-full']}/> Hot</td>
                      <td className="p-2 border ">Ann</td>
                      <td className="p-2 border ">Vaccaro</td>
                      <td className="p-2 border ">ann_v@email.com</td>
                      <td className="">
                      </td>
                      <td className="p-2 border ">Lucy</td>
                    </tr>
                    <tr className="bg-light-blue-50">
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-lt-dark-400"><FontAwesomeIcon icon={['fa', 'thermometer-empty']}/> cold</td>
                      <td className="p-2 border ">Brandon</td>
                      <td className="p-2 border ">Korsgaard</td>
                      <td className="p-2 border ">brandonk@email.com</td>
                      <td className="">
                        <span className="bg-cyan-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Closing</span>
                      </td>
                      <td className="p-2 border ">Lucy</td>
                    </tr>
                    <tr>
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-lt-dark-400"><FontAwesomeIcon icon={['fa', 'thermometer-empty']}/> cold</td>
                      <td className="p-2 border ">Brandon</td>
                      <td className="p-2 border ">Calzoni</td>
                      <td className="p-2 border ">b.calzoni@email.com</td>
                      <td className="">
                        <span className="bg-yellow-400 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Follow</span>
                        <span className="bg-emerald-400 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Success</span>
                      </td>
                      <td className="p-2 border ">Lucy</td>
                    </tr>
                    <tr className="bg-light-blue-50">
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-yellow-400"><FontAwesomeIcon icon={['fa', 'thermometer-half']}/> Warm</td>
                      <td className="p-2 border ">Erin</td>
                      <td className="p-2 border ">Dokidis</td>
                      <td className="p-2 border ">ericdokidis@email.com</td>
                      <td className="">
                        <span className="bg-lt-blue-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Working</span>
                      </td>
                      <td className="p-2 border ">Dave</td>
                    </tr>
                    <tr>
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-lt-dark-400"><FontAwesomeIcon icon={['fa', 'thermometer-empty']}/> cold</td>
                      <td className="p-2 border ">Cooper</td>
                      <td className="p-2 border ">George</td>
                      <td className="p-2 border ">cooperg@email.com</td>
                      <td className="">
                      </td>
                      <td className="p-2 border ">Lucy</td>
                    </tr>
                    <tr className="bg-light-blue-50">
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-yellow-400"><FontAwesomeIcon icon={['fa', 'thermometer-half']}/> Warm</td>
                      <td className="p-2 border ">Cristofer</td>
                      <td className="p-2 border ">Korsgaard</td>
                      <td className="p-2 border ">cristofer.korsgaard@email.com</td>
                      <td className="">
                      </td>
                      <td className="p-2 border ">Dave</td>
                    </tr>
                    <tr>
                      <td className="p-2 border content-center"><input className="block mx-auto box-border" type="checkbox"/></td>
                      <td className="p-2 border uppercase font-medium text-sm text-yellow-400"><FontAwesomeIcon icon={['fa', 'thermometer-half']}/> Warm</td>
                      <td className="p-2 border ">Aspen</td>
                      <td className="p-2 border ">Westervelt</td>
                      <td className="p-2 border ">aspenw@email.com</td>
                      <td className="">
                        <span className="bg-lt-blue-500 px-4 py-1 text-white uppercase text-xs rounded-sm mx-2">Working</span>
                      </td>
                      <td className="p-2 border ">Dave</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div className="border-b border-lt-dark-100 p-6 text-lt-dark-200">
                  <div className="flex justify-between items-baseline">
                    <div className="flex">
                      <p>Showing 1 to 10 of 49 enteries</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="text-xs h-4 text-center rounded-sm mx-1 bg-white">Previous</p>
                      <p className="text-xs h-4 w-4 text-center rounded-sm mx-1 bg-lt-blue-500 text-white">1</p>
                      <p className="text-xs h-4 w-4 text-center rounded-sm mx-1 bg-white">2</p>
                      <p className="text-xs h-4 w-4 text-center rounded-sm mx-1 bg-white">3</p>
                      <p className="text-xs h-4 text-center rounded-sm mx-1 bg-white">Next</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
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

export default CampaignComponent
