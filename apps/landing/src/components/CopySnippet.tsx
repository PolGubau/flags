"use client"

import { Button, toast, useCopyToClipboard } from "pol-ui"

const CopySnippet = () => {
  const { copy } = useCopyToClipboard()
  const handleClick = () => {
    copy("pnpm i react-beauty-flags")
    toast.success("Copied to clipboard")
  }

  return (
    <Button onClick={handleClick} className="flex gap-2 items-center">
      <span className="text-white">pnpm i react-beauty-flags</span>
    </Button>
  )
}

export default CopySnippet
