"use client";

import Link from "next/link";
import { Button } from "pol-ui";
import type { PropsWithChildren } from "react";

const LinkButton = (
  props: PropsWithChildren<{
    href: string;
  }>,
) => {
  return (
    <Link href={props.href}>
      <Button>{props.children}</Button>
    </Link>
  );
};

export default LinkButton;
