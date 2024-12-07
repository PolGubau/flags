"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { DialogTitle, Tabs, toast, useCopyToClipboard } from "pol-ui";
import React from "react";
import { Flag, type FlagCode, type FlagData } from "react-beauty-flags";
import { TbClipboard } from "react-icons/tb";

import FlagPreview from "./FlagPreview";

const Panel = ({ flag }: { flag: FlagData }) => {
	const { copy } = useCopyToClipboard();

	const handleClick = (code: FlagCode, customText?: string) => {
		const componentName = `<Flag code="${code}" />`;

		toast.success("Copied to clipboard", {
			description: customText ?? `${componentName}`,
			icon: (
				<Flag
					code={code}
					className="border-secondary-white rounded-lg border-2 w-fit "
				/>
			),
		});
		copy(code);
	};
	const [style] = useQueryStates({
		rounded: parseAsString.withDefault("rounded-xl"),
		shadow: parseAsString.withDefault("shadow-md"),
		border: parseAsString.withDefault("border-4"),
	});
	const { code, name, type } = flag;

	const classNameBuilder = () => {
		let className = "";
		if (style.border && style.border !== "border-none")
			className += `${style.border} `;
		//
		if (style.shadow && style.shadow !== "shadow-none")
			className += `${style.shadow} `;
		//
		if (style.rounded && style.rounded !== "rounded-none")
			className += `${style.rounded} `;

		return className;
	};

	const className =
		classNameBuilder().length > 0 ? `className="${classNameBuilder()}"` : "";

	return (
		<div className="flex flex-col gap-4 mt-6">
			<hgroup className="flex flex-col gap-1">
				<DialogTitle className="text-2xl">{name}</DialogTitle>
				<h3 className="opacity-80 capitalize">{type}</h3>
			</hgroup>

			<FlagPreview code={code} />

			<article className="flex flex-col gap-1">
				<h3 className="text-lg font-semibold pt-6">Usage</h3>
				<small>Choose your desired way:</small>

				<Tabs
					tabClassName="max-sm:text-sm"
					tabs={[
						{
							name: "Use Flag Component",
							content: (
								<div className="flex flex-col gap-2 p-1">
									<button
										type="button"
										className="text-left grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4 rounded-xl"
										onClick={() =>
											handleClick(
												code,
												`import { Flag } from "react-beauty-flags"`,
											)
										}
									>
										<pre className="truncate">{`import { Flag } from "react-beauty-flags"`}</pre>

										<TbClipboard size={17} />
									</button>
									<button
										type="button"
										className="text-left grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4 rounded-xl"
										onClick={() =>
											handleClick(code, `<Flag code="${code}" ${className}/>`)
										}
									>
										<pre className="truncate">{`<Flag code="${code}" ${className}/>`}</pre>
										<TbClipboard size={17} />
									</button>
								</div>
							),
						},
						{
							name: "Direct Import",
							content: (
								<div className="flex flex-col gap-2 p-1">
									<button
										type="button"
										className="text-left grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4 rounded-xl"
										onClick={() =>
											handleClick(
												code,
												`import { ${code} } from "react-beauty-flags"`,
											)
										}
									>
										<pre className="truncate">{`import { ${code} } from "react-beauty-flags"`}</pre>
										<TbClipboard size={17} />
									</button>
									<button
										type="button"
										className="text-left grid grid-cols-[1fr,auto] gap-1 items-center text-sm bg-secondary-200 dark:bg-secondary-800 hover:opacity-80 transition-opacity py-3 px-4 rounded-xl"
										onClick={() => handleClick(code, `<${code} ${className}/>`)}
									>
										<pre className="truncate">{`<${code} ${className}/>`}</pre>
										<TbClipboard size={17} />
									</button>
								</div>
							),
						},
					]}
				/>
			</article>
		</div>
	);
};

export default Panel;
