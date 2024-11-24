"use client"

import { groupBy } from "pol-ui"
import { GenericFlagItem } from "react-beauty-flags"

interface FlagsListProps {
  list: GenericFlagItem[]
}
const FlagsList = ({ list }: FlagsListProps) => {
  const grouped = groupBy(list, (flag) => flag.type)
  return (
    <main className="flex flex-col gap-20 items-center w-full">
      {Object.entries(grouped).map(([key, values]) => (
        <section key={key} className="flex flex-col gap-4 items-center w-full">
          <h2 className="text-2xl text-center capitalize">{key}</h2>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-y-6 justify-center w-full ">
            {values.map(({ code, flag: FlagComponent, name }) => (
              <li
                key={code}
                className="flex flex-col justify-center items-center gap-1"
              >
                <FlagComponent
                  className="text-secondary-50 border-secondary-white rounded-2xl border-4 w-fit"
                  height={20 * 2.5}
                  width={28 * 2.5}
                />
                <span className="text-xs text-center">{name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  )
}

export default FlagsList
