"use client"

import Link from "next/link"
import { Button, toast, useCopyToClipboard } from "pol-ui"
import { TbArrowUpRight } from "react-icons/tb"

const CopySnippet = () => {
  const { copy } = useCopyToClipboard()
  const handleClick = () => {
    copy("pnpm i react-beauty-flags")
    toast.success("Copied to clipboard", {
      description: "pnpm i react-beauty-flags",
    })
  }

  return (
    <nav className="flex gap-1 items-center">
      <Button
        onClick={handleClick}
        className="flex rounded-xl p-5 gap-2 items-center"
      >
        pnpm i react-beauty-flags
      </Button>
      <Link href="/docs" className="p-2 gap-1 underline rounded-xl">
        <Button color="secondary" variant="ghost">
          docs
          <TbArrowUpRight size={15} />
        </Button>
      </Link>
    </nav>
  )
}

export default CopySnippet
