import { FlagsCodesEnum } from "../src/flags/index";
import { flags } from "../src/metadata";

// Get the expected flag codes from the enum
const allCodes: string[] = Object.values(FlagsCodesEnum);

function validateFlags(
	flags: { code: string; name: string; type: string }[],
): void {
	const seen = new Set<string>();

	for (const flag of flags) {
		if (!allCodes.includes(flag.code)) {
			throw new Error(`❌ Invalid flag code detected: ${flag.code}`);
		}
		if (seen.has(flag.code)) {
			throw new Error(`❌ Duplicate flag code detected: ${flag.code}`);
		}
		seen.add(flag.code);
	}

	const missingCodes = allCodes.filter((code) => !seen.has(code));
	if (missingCodes.length > 0) {
		throw new Error(`❌ Missing flag codes: ${missingCodes.join(", ")}`);
	}

	console.log("✅ All flags are valid!");
}

// Run the validation
try {
	validateFlags(flags);
	process.exit(0); // Success
} catch (error) {
	console.error((error as Error).message);
	process.exit(1); // Failure
}
