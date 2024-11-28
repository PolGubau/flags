"use client"

import React from "react"
import { Tabs, toast, useCopyToClipboard } from "pol-ui"
import { Flag, FlagCode, FlagData } from "react-beauty-flags"
import { TbClipboard } from "react-icons/tb"

import FlagPreview from "./FlagPreview"

const Panel = ({ flag }: { flag: FlagData }) => {
  const { copy } = useCopyToClipboard()

  const handleClick = (code: FlagCode, customText?: string) => {
    const componentName = `<Flag code="${code}" />`

    toast.success(`Copied to clipboard`, {
      description: customText ?? `${componentName}`,
      icon: (
        <Flag
          code={code}
          className="border-secondary-white rounded-lg border-2 w-fit "
        />
      ),
    })
    copy(code)
  }

  const { code, name, type } = flag
  return (
    <div className="flex flex-col gap-4 mt-6">
      <hgroup className="flex flex-col gap-1">
        <h3 className="text-2xl">{name}</h3>
        <h4 className="opacity-80 capitalize">{type}</h4>
      </hgroup>

      <FlagPreview code={code} />

      <article className="flex flex-col gap-1">
        <p className="text-lg font-semibold pt-6">Usage</p>
        <small>Choose your desired way:</small>

        <Tabs
          tabs={[
            {
              name: "Use Flag Component",
              content: (
                <div className="flex flex-col gap-2">
                  <pre
                    className=" grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4  rounded-xl cursor-pointer"
                    onClick={() =>
                      handleClick(
                        code,
                        `import { Flag } from "react-beauty-flags"`
                      )
                    }
                  >
                    {`import { Flag } from "react-beauty-flags"`}
                    <TbClipboard size={17} />
                  </pre>
                  <pre
                    className=" grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4  rounded-xl cursor-pointer"
                    onClick={() => handleClick(code)}
                  >
                    {`<Flag code="${code}" />`}
                    <TbClipboard size={17} />
                  </pre>
                </div>
              ),
            },
            {
              name: "Direct Import",
              content: (
                <div className="flex flex-col gap-2">
                  <pre
                    className=" grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4  rounded-xl cursor-pointer"
                    onClick={() =>
                      handleClick(
                        code,
                        `import { ${code} } from "react-beauty-flags"`
                      )
                    }
                  >
                    {`import { ${code} } from "react-beauty-flags"`}
                    <TbClipboard size={17} />
                  </pre>
                  <pre
                    className=" grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4  rounded-xl cursor-pointer"
                    onClick={() => handleClick(code, `<${code}/>`)}
                  >
                    {`<${code}/>`}
                    <TbClipboard size={17} />
                  </pre>
                </div>
              ),
            },
          ]}
        />
      </article>
    </div>
  )
}

export default Panel
