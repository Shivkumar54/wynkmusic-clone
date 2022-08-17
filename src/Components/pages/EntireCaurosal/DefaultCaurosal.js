import React from 'react'
import Caurosal from '../RepeatCaurosal/Caurosal'

const DefaultCaurosal = () => {
  return (
      <div>
          <div className="recently">
       <Caurosal heading="Recently Played"/>   
          </div>

          {/* Duplicates  */}
          <div className="New Releases">
       <Caurosal heading="New Releases" />   
          </div>
          <div className="Top Charts">
       <Caurosal heading="Top Charts"  />   
          </div>
          <div className="Indie Music">
       <Caurosal heading="Indie Music" />   
          </div>

          {/* Duplicates  */}
    </div>
  )
}

export default DefaultCaurosal