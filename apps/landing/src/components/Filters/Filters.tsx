"use client"

import React from "react"
import { presets } from "@/data/presets"
import { parseAsString, useQueryState, useQueryStates } from "nuqs"
import { Input, cn } from "pol-ui"
import { Flag } from "react-beauty-flags"

const Filters = () => {
  const [search, setSearch] = useQueryState(
    "q",
    parseAsString.withOptions({ shallow: false }).withDefault("")
  )

  return (
    <div className=" w-full sticky top-0 z-10 grid grid-cols-2 gap-4">
      <Input
        placeholder="Search for a flag"
        value={search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="flex gap-1 w-full items-center justify-end ">
        <span className="mr-2">Style</span>
        {Object.values(presets).map((preset, i) => (
          <li key={i}>
            <button
              className="group flex items-center flex-col outline-none"
              //   onClick={() => setFlagConfig(preset)}
            >
              <Flag
                code={"Ww"}
                className={cn(
                  "w-fit group-focus:scale-90 group-focus-within:border-primary group-focus-within:border-6 hover:scale-95 group-active:scale-75 transition-[transform,border] duration-50 ease-in-out",
                  preset.className
                )}
                height={40 / 1.4}
                width={40}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters
