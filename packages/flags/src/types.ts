export interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
}

export enum FlagTypeEnum {
    Country = "country",
    Region = "region",
    World = "world",
    Historical = "historical",
    City = "city",
    Symbol = "symbol",
    Other = "other",
}
export type FlagType = `${FlagTypeEnum}`;
