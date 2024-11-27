"use client"

import { PropsWithChildren } from "react"
import { DarkThemeToggle, PoluiProvider } from "pol-ui"

const Providers = (props: PropsWithChildren) => {
  return (
    <PoluiProvider>
      <DarkThemeToggle className="absolute right-4 top-4" />
      {props.children}
    </PoluiProvider>
  )
}

export default Providers
