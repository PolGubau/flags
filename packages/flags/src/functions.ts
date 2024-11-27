import { FlagCode } from "./flags";
import { flags } from "./metadata";
import { FlagType } from "./types";

export const getFlag = (v: FlagCode) =>
    flags.find((country) => country.code === v);

export const getFlagByCode = getFlag;

export const getFlagByName = (v: string) =>
    flags.find((country) => country.name === v);

export const getFlagsByType = (v: FlagType) =>
    flags.filter((country) => country.type === v);
