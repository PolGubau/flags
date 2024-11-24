"use client"

import { PropsWithChildren } from "react"
import { PoluiProvider, Toaster } from "pol-ui"

const Providers = (props: PropsWithChildren) => {
  return <PoluiProvider>{props.children}</PoluiProvider>
}

export default Providers
