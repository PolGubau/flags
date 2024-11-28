"use client"

import React from "react"
import { Alert, toast, useCopyToClipboard } from "pol-ui"
import { Flag, FlagCode, FlagData } from "react-beauty-flags"

const Panel = ({ flag }: { flag: FlagData }) => {
  const { copy } = useCopyToClipboard()

  const handleClick = (code: FlagCode) => {
    const componentName = `<Flag code="${code}" />`

    toast.success(`Copied to clipboard`, {
      description: `${componentName}`,
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
      <Flag
        code={code}
        className="border-secondary-200 dark:border-secondary-800 rounded-2xl border-4 w-fit"
        height={100}
        width={140}
      />

      <p>To use this flag, copy the following code:</p>
      <Alert>{`<Flag code="${code}" />`}</Alert>

      <button
        className="bg-primary text-white px-4 py-2 rounded-lg"
        // onClick={() => handleClick(code)}
      >
        Copy
      </button>
    </div>
  )
}

export default Panel
