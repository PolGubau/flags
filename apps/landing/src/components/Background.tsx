import React from "react"

import "./bg.css"

const Background = () => {
  return (
    <div className="w-dvw pointer-events-none overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <div key={i} className="rainbow" />
      ))}
    </div>
  )
}

export default Background
