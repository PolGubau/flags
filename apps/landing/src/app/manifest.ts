import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
	return {
		name: "React Beauty Flags",
		short_name: "React Beauty Flags",
		description: "React Beauty Flags",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#fff",
	};
};

export default manifest;
