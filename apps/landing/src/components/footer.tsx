"use client";

import Link from "next/link";
import { Button, IconButton } from "pol-ui";
import { FaGithub } from "react-icons/fa";
import { TbArrowUpRight, TbWorld } from "react-icons/tb";

import ExampleFlags from "./ExampleFlags";

export const Footer = () => {
	return (
		<footer className="flex flex-col gap-12 items-center pb-32">
			<ExampleFlags />

			<nav className="flex gap-4 items-center max-md:flex-col ">
				<Link href={"docs"}>
					<Button
						rounded="xl"
						className="font-medium bg-slate-800 dark:bg-slate-200"
					>
						See the docs
						<TbArrowUpRight size={17} />
					</Button>
				</Link>
				{/*  */}
				<div className="flex gap-2 items-center">
					<Link
						href={"https://github.com/PolGubau"}
						className="flex items-center gap-1"
					>
						<IconButton aria-label="Github">
							<FaGithub size={18} />
						</IconButton>
						Github
					</Link>

					<Link
						href={"https://polgubau.com/"}
						className="flex items-center gap-1"
					>
						<IconButton aria-label="Website">
							<TbWorld size={18} />
						</IconButton>
						Website
					</Link>
				</div>
			</nav>

			<p className="text-2xl font-bold text-center">Proudly open source</p>
		</footer>
	);
};
