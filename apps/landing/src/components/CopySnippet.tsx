"use client"

import { Button, toast, useCopyToClipboard } from "pol-ui"

const CopySnippet = () => {
  const { copy } = useCopyToClipboard()
  const handleClick = () => {
    copy("pnpm i react-beauty-flags")
    toast.success("Copied to clipboard", {
      description: "pnpm i react-beauty-flags",
    })
  }

  return (
    <Button
      onClick={handleClick}
      className="flex rounded-xl p-5 gap-2 items-center"
    >
      pnpm i react-beauty-flags
    </Button>
  )
}

export default CopySnippet
