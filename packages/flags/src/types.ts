export interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
}

export type FlagType =
    | "country"
    | "region"
    | "world"
    | "historical"
    | "city"
    | "symbol"
    | "other";
