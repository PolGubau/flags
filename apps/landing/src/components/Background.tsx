import React from "react"

import "./bg.css"

const Background = () => {
  return (
    <div className="max-w-[100vw] pointer-events-none overflow-hidden -z-10">
      {[...Array(25)].map((_, i) => (
        <div key={i} className="rainbow overflow-hidden lgsd:rotate-12" />
      ))}
    </div>
  )
}

export default Background
