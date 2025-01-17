import { promises as fs } from "node:fs";
import { promisify } from "node:util";

import { transform as svgrTransform } from "@svgr/core";
import camelcase from "camelcase";
import rimraf from "rimraf";

// Promisifies the `rimraf` module.
const rimrafPromisified = promisify(rimraf);

/**
 * Takes the name and code for the icon and transform it into a React
 * component.
 *
 * @async
 *
 * @param {string} svg The SVG code of the icon.
 * @param {string} componentName The name of the SVG to use as the component's name.
 *
 * @returns {Promise<string>}
 */
const transform = async (
	svg: string,
	componentName: string,
): Promise<string> => {
	// original size is 28x20
	return await svgrTransform(
		svg,
		{
			typescript: true,
			titleProp: true,
			descProp: true,
			svgProps: {
				width: "{props.width ?? 28}",
				height: "{props.height ?? 20}",
			},
		},
		{ componentName },
	);
};

/**
 * Gets the icons for the specified style.
 *
 * @async
 * @returns {Promise<{ svg: string, componentName: string }[]>}
 */
const getIcons = async (
	style: string,
): Promise<{ svg: string; componentName: string }[]> => {
	// The files from the directory that corresponds to the specified style.
	const files = await fs.readdir("./optimized");

	// dont include __jest-test.svg
	const filteredFiles = files.filter((file) => file !== "__jest-test.svg");

	// Reads each file to get the code and name of the SVG.
	return Promise.all(
		filteredFiles.map(async (file) => ({
			svg: await fs.readFile(`./optimized/${file}`, "utf8"),
			componentName: `${camelcase(file.replace(/\.svg$/, ""), {
				pascalCase: true,
			})}`,
		})),
	);
};

/**
 * Creates the index file to export all of the icon components.
 *
 * @param {<{ componentName: string, svg: string }>[]} icons The icons to export.
 *
 * @returns {string} Returns the string to use for the index file.
 */
const exportAll = (icons: { svg: string; componentName: string }[]): string => {
	// export { ArFlag, ...
	return `
export { ${icons.map(({ componentName }) => `${componentName}`).join(", ")} };`;
};

const importAll = (icons: { svg: string; componentName: string }[]): string => {
	// get all flags from their files
	return icons
		.map(
			({ componentName }) =>
				`import { default as ${componentName}} from "./${componentName}";`,
		)
		.join("\n");
};
/**
 * Creates the directories for the icons, converts them from SVG to React
 * components, and write them to their directories.
 *
 * @async
 *
 */
const buildIcons = async (style: string) => {
	// The output directory is the style of the icon at the room of the
	// project.
	const outDir = `./${style}`;

	// Create the directories for the icons if they don't exist already.
	await fs.mkdir(outDir, { recursive: true });

	// Get all of the icons for the specified style.
	const icons = await getIcons(style);

	await Promise.all(
		icons.flatMap(async ({ componentName, svg }) => {
			// Get the code for the icon component.
			const content = await transform(svg, componentName);

			// Write the icon component to the directory.
			return [
				fs.writeFile(`./${outDir}/${componentName}.tsx`, content, "utf8"),
			];
		}),
	);

	// Write the `index` file that exports all of the icons for that style.
	await fs.writeFile(
		`${outDir}/index.tsx`,

		`
import React from "react";
        ${importAll(icons)}    

        ${exportAll(icons)}
    
export enum FlagsCodesEnum {
    ${icons.map(({ componentName }) => `${componentName} = "${componentName}"`).join(",\n")}
}

export type FlagCode = keyof typeof FlagsCodesEnum;
         

export const FlagsEnum: Record<FlagCode, React.FC<React.SVGProps<SVGSVGElement>>> = {
    ${icons.map(({ componentName }) => `${componentName}: ${componentName}`).join(",\n")}
};

`,
		"utf8",
	);
};

/**
 * Builds the icons and writes them to their directories.
 */
const main = () => {
	console.log("Building icons...");
	Promise.all([rimrafPromisified("./src/flags/*")])
		.then(() => Promise.all([buildIcons("src/flags")]))
		.then(() => console.log("Finished building icons."));
};

main();
