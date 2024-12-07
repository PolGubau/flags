"use client";

import Link from "next/link";
import { TbArrowLeft } from "react-icons/tb";

import Docs from "@/app/markdown/docs.mdx";

const Page = () => {
	return (
		<section className="flex flex-col w-full max-w-screen">
			<Link
				href="/"
				passHref
				className="underline underline-offset-1 flex gap-1 items-center group decoration-wavy decoration-primary dark:text-primary-100"
			>
				<TbArrowLeft className="text-lg" />
				Back to Home
			</Link>
			<main>
				<Docs />
			</main>
		</section>
	);
};

export default Page;
