"use client"

import React, { PropsWithChildren } from "react"
import { PoluiProvider } from "pol-ui"

const Providers = (props: PropsWithChildren) => {
  return <PoluiProvider>{props.children}</PoluiProvider>
}

export default Providers
