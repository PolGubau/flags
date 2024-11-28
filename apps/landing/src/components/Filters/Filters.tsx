"use client"

import { parseAsString, useQueryState } from "nuqs"
import { Input } from "pol-ui"
import { TbSearch } from "react-icons/tb"

const Filters = () => {
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withOptions({ shallow: false }).withDefault("")
  )

  return (
    <div className=" w-full sticky top-0 z-10 grid md:grid-cols-2 gap-4">
      <Input
        placeholder="Search for a flag"
        leftComponent={<TbSearch />}
        value={search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Filters
