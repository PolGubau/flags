import { promises as fs } from "fs";
import * as path from "path";
import dotenv from "dotenv";

// Load the .env file
dotenv.config();

// Figma API constants
const FIGMA_API_BASE = "https://api.figma.com/v1";
const OUTPUT_DIR = path.resolve(__dirname, "../resources/flags");

// Retrieve the API token and file key from environment variables
const FIGMA_API_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_KEY;

if (!FIGMA_API_TOKEN || !FIGMA_FILE_KEY) {
    throw new Error("Missing required Figma API token or file key in .env");
}

/**
 * Fetch the Figma file data.
 */
const fetchFigmaFile = async (fileKey: string) => {
    const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}`, {
        method: "GET",
        headers: {
            "X-Figma-Token": FIGMA_API_TOKEN!,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch Figma file: ${response.statusText}`);
    }

    return response.json();
};

/**
 * Fetch a specific SVG node.
 */
const fetchSvg = async (nodeId: string) => {
    // Manually build the URL with query parameters
    const url = new URL(`${FIGMA_API_BASE}/images/${FIGMA_FILE_KEY}`);
    url.searchParams.append("ids", nodeId);
    url.searchParams.append("format", "svg");

    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "X-Figma-Token": FIGMA_API_TOKEN!,
        },
    });

    const data = await response.json();
    const imageUrl = data.images[nodeId];

    if (!imageUrl) throw new Error(`SVG for node ${nodeId} not found.`);

    const svgResponse = await fetch(imageUrl);
    if (!svgResponse.ok) {
        throw new Error(`Failed to fetch SVG: ${svgResponse.statusText}`);
    }

    return await svgResponse.text();
};

/**
 * Parse the file and export all SVG components.
 */
const exportFlags = async () => {
    console.log("Fetching Figma file data...");
    const fileData = await fetchFigmaFile(FIGMA_FILE_KEY);

    // Find the "Flags" page
    const flagsPage = fileData.document.children.find(
        (page: any) => page.name === "Flags" && page.type === "CANVAS",
    );

    if (!flagsPage) {
        console.error('"Flags" page not found!');
        return;
    }

    console.log(`Found page: ${flagsPage.name}`);

    // Find the "flags" frame within the "Flags" page
    const flagsFrame = flagsPage.children.find(
        (frame: any) => frame.name === "flags" && frame.type === "FRAME",
    );

    if (!flagsFrame) {
        console.error('"flags" frame not found within the "Flags" page!');
        return;
    }

    console.log(`Found frame: ${flagsFrame.name}`);

    // Access the children of the "flags" frame (the components)
    const components = flagsFrame.children || [];
    console.log(`Found ${components.length} components in "flags".`);

    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    for (const component of components) {
        const { id, name } = component;

        try {
            console.log(`Exporting ${name}...`);
            const svgContent = await fetchSvg(id);

            // Generate a valid file name
            const fileName = `${name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.svg`;
            const filePath = path.join(OUTPUT_DIR, fileName);

            // Save the SVG file
            await fs.writeFile(filePath, svgContent, "utf8");
            console.log(`Saved ${fileName}`);
        } catch (error) {
            console.error(`Failed to export ${name}: ${error.message}`);
        }
    }

    console.log("Export completed.");
};

// Run the script
exportFlags().catch((err) => {
    console.error("Error:", err.message);
});
