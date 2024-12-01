import React from "react";
import { FlagCode, FlagsEnum } from "./flags";

interface FlagProps extends React.SVGProps<SVGSVGElement> {
    code: FlagCode;
    size?: number;
}
export const Flag = ({ code, size, ...props }: FlagProps) => {
    const Component = FlagsEnum[code];
    return (
        <Component
            {...props}
            width={props.width ?? size ?? undefined}
            height={props.height ?? size / 1.4 ?? undefined}
        />
    );
};
