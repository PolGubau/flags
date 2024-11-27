"use client"

import React, { PropsWithChildren } from "react"
import Link from "next/link"
import { Button } from "pol-ui"

const LinkButton = (
  props: PropsWithChildren<{
    href: string
  }>
) => {
  return (
    <Link href={props.href}>
      <Button>{props.children}</Button>
    </Link>
  )
}

export default LinkButton
