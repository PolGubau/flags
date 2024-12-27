"use client";

import Link from "next/link";
import { Button, toast, useCopyToClipboard } from "pol-ui";
import { TbArrowUpRight } from "react-icons/tb";

export const CopySnippet = () => {
	const { copy } = useCopyToClipboard();
	const handleClick = () => {
		copy("pnpm i react-beauty-flags");
		toast.success("Copied to clipboard", {
			description: "pnpm i react-beauty-flags",
		});
	};

	return (
		<nav className="flex gap-2 items-center">
			<Button
				rounded="xl"
				onClick={handleClick}
				className="p-5 gap-2 items-center bg-slate-800 dark:bg-slate-200"
			>
				pnpm i react-beauty-flags
			</Button>
			<Link href="/docs">
				<Button
					rounded="xl"
					color="secondary"
					variant="ghost"
					className="p-5 gap-1 rounded-xl"
				>
					docs
					<TbArrowUpRight size={15} />
				</Button>
			</Link>
		</nav>
	);
};
