"use client"

import { parseAsString, useQueryStates } from "nuqs"
import { Drawer, cn, groupBy } from "pol-ui"
import { Flag, FlagTypeEnum, type FlagData } from "react-beauty-flags"

import Panel from "./panel"

interface FlagsListProps {
  list: FlagData[]
}
const FlagsList = ({ list }: FlagsListProps) => {
  const grouped = groupBy(list, (flag) => flag.type)

  const orderedGrouped = Object.entries(grouped).sort(([a], [b]) => {
    if (a === FlagTypeEnum.Country) return -1
    if (b === FlagTypeEnum.Country) return 1
    return a.localeCompare(b)
  })

  const [params, setParams] = useQueryStates({
    rounded: parseAsString.withDefault("rounded-xl"),
    shadow: parseAsString.withDefault("shadow-md"),
    border: parseAsString.withDefault("border-4"),
    s: parseAsString,
  })
  return (
    <main className="flex flex-col gap-4 items-center w-full">
      <section className="flex flex-col gap-20 items-center w-full">
        {orderedGrouped.map(([key, values]) => (
          <section
            key={key}
            className="flex flex-col gap-4 items-center w-full"
          >
            <h2 className="text-2xl text-center capitalize">{key}</h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-y-4 justify-center w-full ">
              {values.map(({ code, name, type }) => (
                <li key={code} className="flex justify-center">
                  <Drawer
                    open={params.s === code}
                    onOpenChange={(open) => {
                      if (!open) setParams({ s: null })
                    }}
                    direction="right"
                    className="bg-secondary-50 w-[600px] p-8 max-w-[90vw]"
                    trigger={
                      <button
                        className="group flex items-center flex-col outline-none gap-1 relative"
                        onClick={() => {
                          setParams({ s: code })
                        }}
                      >
                        <Flag
                          code={code}
                          className={cn(
                            "w-fit group-focus:scale-90 group-focus-within:border-primary group-focus-within:border-6 hover:scale-95 group-active:scale-75 transition-[transform,border] duration-50 ease-in-out z-10",
                            params.rounded,
                            params.shadow,
                            params.border
                          )}
                          height={70 / 1.4}
                          width={70}
                        />
                        <span className="text-xs text-center">{name}</span>
                      </button>
                    }
                  >
                    <Panel flag={{ code, name, type }} />
                  </Drawer>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </main>
  )
}

export default FlagsList
