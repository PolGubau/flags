import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
}
const ArFlag = ({
    title,
    titleId,
    desc,
    descId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 63 51"
        stroke="currentColor"
        aria-hidden="true"
        width={props.width ?? 55}
        height={props.height ?? 60}
        aria-labelledby={titleId}
        aria-describedby={descId}
        {...props}
    >
        {desc ? <desc id={descId}>{desc}</desc> : null}
        {title ? <title id={titleId}>{title}</title> : null}
        <g clipPath="url(#clip0_2089_1896)">
            <rect
                width={55.996}
                height={43.9981}
                x={3.44922}
                y={3.89062}
                fill="white"
            />
            <path
                fill="#0EA6FB"
                d="M14.9706 5.47656H48.966C52.2754 5.47656 53.4755 5.82114 54.6854 6.46819C55.8952 7.11524 56.8448 8.06476 57.4918 9.27464C58.1389 10.4845 58.4834 11.6846 58.4834 14.994V17.5978H5.45312V14.994C5.45312 11.6846 5.7977 10.4845 6.44475 9.27464C7.0918 8.06476 8.04132 7.11524 9.2512 6.46819C10.4611 5.82114 11.6612 5.47656 14.9706 5.47656Z"
            />
            <path
                fill="#0EA6FB"
                d="M58.4834 34.2617V36.8655C58.4834 40.1749 58.1389 41.375 57.4918 42.5849C56.8448 43.7947 55.8952 44.7443 54.6854 45.3913C53.4755 46.0384 52.2754 46.3829 48.966 46.3829H14.9706C11.6612 46.3829 10.4611 46.0384 9.2512 45.3913C8.04132 44.7443 7.0918 43.7947 6.44475 42.5849C5.7977 41.375 5.45312 40.1749 5.45312 36.8655V34.2617H58.4834Z"
            />
            <circle
                cx={31.4453}
                cy={25.8906}
                r={4.65234}
                fill="#FF9600"
                strokeWidth={3}
            />
        </g>
        <rect
            width={56}
            height={44}
            x={3.44922}
            y={3.95312}
            strokeWidth={3}
            rx={9}
        />
        <defs>
            <clipPath id="clip0_2089_1896">
                <rect
                    width={56}
                    height={44}
                    x={3.44922}
                    y={3.95312}
                    fill="white"
                    rx={9}
                />
            </clipPath>
        </defs>
    </svg>
);
export default ArFlag;
