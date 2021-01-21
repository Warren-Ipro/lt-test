import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutComponent = () => {
  return (
    <div className="bg-white text-lt-dark-700 shadow-lg" style={{height: "100%", width: "100%", minWidth: "460px", minHeight: "465px"}}>
      <div className="border-b border-lt-dark-100 p-6">
        <div className="flex justify-between items-baseline">
          <p  className="font-bold">About</p>
        </div>
      </div>
      <div className="p-6 grid grid-cols-2 auto-rows-auto gap-x-8 gap-y-8">
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Form Leads</p>
          <div className="flex justify-between">
            <p className="text-2xl">10,332</p>
            <button className="py-1 px-2 border border-lt-blue-500 rounded text-lt-blue-500 uppercase text-xs mr-3">
              <span><FontAwesomeIcon icon={['fa', 'download']} size="xs"/> Resync</span>
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Synced Leads</p>
          <div className="flex justify-between">
            <p className="text-2xl">10,332</p>
            <button className="py-1 px-2 border border-lt-blue-500 rounded text-lt-blue-500 uppercase text-xs mr-3">
              <span><FontAwesomeIcon icon={['fa', 'sync']} size="xs"/> Resync</span>
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Autoresponder</p>
          <div className="flex justify-between border-b border-lt-dark-100">
            <p>Multiple (3)</p>
            <FontAwesomeIcon icon={['fa', 'caret-down']} size="xs"/>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Autoresponder List</p>
          <div className="flex justify-between">
            <p>Autoresponder List Name</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Facebook Account</p>
          <div className="flex justify-between">
            <p>Official Local Coffee Shop</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Facebook Lead Form</p>
          <div className="flex justify-between">
            <p>Local Coffee Shop Form</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm text-lt-dark-300 mb-3">Facebook Page</p>
          <div className="flex justify-between">
            <p>Local Coffee Shop Page</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent