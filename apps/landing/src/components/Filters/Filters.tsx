"use client";

import { parseAsString, useQueryState } from "nuqs";
import { Input } from "pol-ui";
import { TbSearch } from "react-icons/tb";

export const Filters = () => {
	const [search, setSearch] = useQueryState(
		"q",
		parseAsString.withOptions({ shallow: false }).withDefault(""),
	);

	return (
		<div className="w-full sticky top-0 z-10 flex justify-center max-w-md">
			<Input
				placeholder="Search for a flag"
				leftComponent={<TbSearch />}
				value={search}
				type="search"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};
