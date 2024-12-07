"use client";

import Link from "next/link";
import { Button } from "pol-ui";
import React, { type PropsWithChildren } from "react";

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
