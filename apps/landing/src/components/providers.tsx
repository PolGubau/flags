"use client"

import { PropsWithChildren } from "react"
import { DarkThemeToggle, PoluiProvider } from "pol-ui"

const Providers = (props: PropsWithChildren) => {
  return (
    <PoluiProvider>
      <DarkThemeToggle className="absolute right-4 top-4" />
      <div className="flex justify-center font-[family-name:var(--font-geist-sans)] ">
        <div className="flex flex-col gap-8 items-center justify-center max-w-4xl w-full p-4 md:p-10 pt-20 md:pt-40">
          {props.children}
        </div>
      </div>
    </PoluiProvider>
  )
}

export default Providers
