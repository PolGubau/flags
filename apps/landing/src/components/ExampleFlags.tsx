import { Flag } from "react-beauty-flags";

const ExampleFlags = () => {
	return (
		<div className="flex gap-4 md:gap-10 pt-20 h-full">
			<Flag
				code="Se"
				className=" -rotate-6 shadow-lg rounded-md"
				width={28 * 1.3}
				height={20 * 1.3}
			/>
			<Flag
				code="Es"
				className=" shadow-lg rounded-lg"
				width={28 * 2.5}
				height={20 * 2.5}
			/>
			<Flag
				code="De"
				className=" shadow-lg rounded-lg"
				width={28 * 2.0}
				height={20 * 2.0}
			/>
			<Flag
				code="Ve"
				className=" rotate-12 shadow-lg rounded-md"
				width={28 * 1.5}
				height={20 * 1.5}
			/>
		</div>
	);
};

export default ExampleFlags;
