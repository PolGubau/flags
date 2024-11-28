"use client"

import { Drawer, groupBy, toast, useCopyToClipboard } from "pol-ui"
import { Flag, FlagCode, type FlagData } from "react-beauty-flags"

import Panel from "./panel"

interface FlagsListProps {
  list: FlagData[]
}
const FlagsList = ({ list }: FlagsListProps) => {
   const grouped = groupBy(list, (flag) => flag.type)

  return (
    <main className="flex flex-col gap-20 items-center w-full">
      {Object.entries(grouped).map(([key, values]) => (
        <section key={key} className="flex flex-col gap-4 items-center w-full">
          <h2 className="text-2xl text-center capitalize">{key}</h2>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-y-4 justify-center w-full ">
            {values.map(({ code, name, type }) => (
              <li key={code} className="flex justify-center">
                <Drawer
                  direction="right"
                  className="bg-secondary-50 w-[600px] p-8 max-w-[90vw]"
                  trigger={
                    <button
                      className="group flex items-center flex-col outline-none"
                      // onMouseDown={() => handleClick(code)}
                      // onKeyDown={(e) => {
                      //   if (e.key === "Enter" || e.key === " ") {
                      //     handleClick(code)
                      //   }
                      // }}
                    >
                      <Flag
                        code={code}
                        className="border-secondary-200 dark:border-secondary-800 rounded-2xl border-4 w-fit group-focus:scale-90 group-focus-within:border-primary group-focus-within:border-6 hover:scale-95 group-active:scale-75 transition-[transform,border] duration-50 ease-in-out"
                        height={50}
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
    </main>
  )
}

export default FlagsList
