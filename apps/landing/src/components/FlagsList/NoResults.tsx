import React from "react"

const NoResults = ({ q }: { q: string }) => {
  return <h2 className="text-2xl text-center py-20">No results for "{q}"</h2>
}

export default NoResults
