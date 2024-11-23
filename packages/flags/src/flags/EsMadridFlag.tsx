import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMadridFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_172)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="white" d="M13.7012 12.0131L13.2464 12.2543C13.0943 12.335 12.9056 12.2771 12.8249 12.125C12.7927 12.0642 12.7815 11.9945 12.793 11.9267L12.881 11.4089C12.8933 11.3368 12.8695 11.2632 12.8173 11.2119L12.446 10.8467C12.3222 10.725 12.3205 10.526 12.4423 10.4022C12.4903 10.3534 12.553 10.3216 12.6208 10.3116L13.1297 10.237C13.2027 10.2263 13.2658 10.1803 13.2982 10.114L13.5262 9.64794C13.6018 9.49342 13.7883 9.42943 13.9429 9.50502C14.0051 9.53545 14.0553 9.58574 14.0858 9.64794L14.3137 10.114C14.3462 10.1803 14.4092 10.2263 14.4823 10.237L14.9912 10.3116C15.163 10.3368 15.2818 10.4965 15.2566 10.6682C15.2467 10.736 15.2148 10.7987 15.166 10.8467L14.7947 11.2119C14.7425 11.2632 14.7187 11.3368 14.731 11.4089L14.819 11.9267C14.8478 12.0964 14.7336 12.2574 14.5639 12.2863C14.4961 12.2978 14.4263 12.2866 14.3656 12.2543L13.9108 12.0131C13.8453 11.9783 13.7667 11.9783 13.7012 12.0131Z" /><path fill="white" d="M11.1814 9.19561L10.7266 9.43681C10.5745 9.51749 10.3858 9.45959 10.3051 9.30749C10.2729 9.24672 10.2617 9.17698 10.2732 9.10916L10.3612 8.59143C10.3735 8.5193 10.3497 8.44572 10.2975 8.39442L9.9262 8.02923C9.80243 7.90751 9.80077 7.7085 9.92249 7.58474C9.97053 7.53589 10.0332 7.50408 10.101 7.49414L10.6099 7.41952C10.683 7.40882 10.746 7.36278 10.7785 7.29647L11.0064 6.83044C11.082 6.67592 11.2686 6.61193 11.4231 6.68751C11.4853 6.71794 11.5356 6.76823 11.566 6.83044L11.794 7.29647C11.8264 7.36278 11.8895 7.40882 11.9625 7.41952L12.4714 7.49414C12.6432 7.51932 12.762 7.67897 12.7368 7.85072C12.7269 7.91851 12.6951 7.98119 12.6462 8.02923L12.2749 8.39442C12.2227 8.44572 12.1989 8.5193 12.2112 8.59143L12.2992 9.10916C12.3281 9.2789 12.2139 9.43989 12.0441 9.46875C11.9763 9.48028 11.9066 9.46905 11.8458 9.43681L11.391 9.19561C11.3255 9.16083 11.2469 9.16083 11.1814 9.19561Z" /><path fill="white" d="M21.8589 9.19561L21.4041 9.43681C21.252 9.51749 21.0633 9.45959 20.9826 9.30749C20.9504 9.24672 20.9392 9.17698 20.9507 9.10916L21.0387 8.59143C21.051 8.5193 21.0272 8.44572 20.975 8.39442L20.6037 8.02923C20.4799 7.90751 20.4783 7.7085 20.6 7.58474C20.648 7.53589 20.7107 7.50408 20.7785 7.49414L21.2874 7.41952C21.3605 7.40882 21.4235 7.36278 21.4559 7.29647L21.6839 6.83044C21.7595 6.67592 21.946 6.61193 22.1006 6.68751C22.1628 6.71794 22.2131 6.76823 22.2435 6.83044L22.4715 7.29647C22.5039 7.36278 22.5669 7.40882 22.64 7.41952L23.1489 7.49414C23.3207 7.51932 23.4395 7.67897 23.4143 7.85072C23.4044 7.91851 23.3726 7.98119 23.3237 8.02923L22.9524 8.39442C22.9002 8.44572 22.8764 8.5193 22.8887 8.59143L22.9767 9.10916C23.0056 9.2789 22.8914 9.43989 22.7216 9.46875C22.6538 9.48028 22.5841 9.46905 22.5233 9.43681L22.0685 9.19561C22.003 9.16083 21.9244 9.16083 21.8589 9.19561Z" /><path fill="white" d="M18.9512 12.0131L18.4964 12.2543C18.3443 12.335 18.1556 12.2771 18.0749 12.125C18.0427 12.0642 18.0315 11.9945 18.043 11.9267L18.131 11.4089C18.1433 11.3368 18.1195 11.2632 18.0673 11.2119L17.696 10.8467C17.5722 10.725 17.5705 10.526 17.6923 10.4022C17.7403 10.3534 17.803 10.3216 17.8708 10.3116L18.3797 10.237C18.4527 10.2263 18.5158 10.1803 18.5482 10.114L18.7762 9.64794C18.8518 9.49342 19.0383 9.42943 19.1929 9.50502C19.2551 9.53545 19.3053 9.58574 19.3358 9.64794L19.5637 10.114C19.5962 10.1803 19.6592 10.2263 19.7323 10.237L20.2412 10.3116C20.413 10.3368 20.5318 10.4965 20.5066 10.6682C20.4967 10.736 20.4648 10.7987 20.416 10.8467L20.0447 11.2119C19.9925 11.2632 19.9687 11.3368 19.981 11.4089L20.069 11.9267C20.0978 12.0964 19.9836 12.2574 19.8139 12.2863C19.7461 12.2978 19.6763 12.2866 19.6156 12.2543L19.1608 12.0131C19.0953 11.9783 19.0167 11.9783 18.9512 12.0131Z" /><path fill="white" d="M16.4311 9.19561L15.9764 9.43681C15.8243 9.51749 15.6356 9.45959 15.5549 9.30749C15.5227 9.24672 15.5114 9.17698 15.523 9.10916L15.611 8.59143C15.6232 8.5193 15.5995 8.44572 15.5473 8.39442L15.176 8.02923C15.0522 7.90751 15.0505 7.7085 15.1722 7.58474C15.2203 7.53589 15.283 7.50408 15.3508 7.49414L15.8597 7.41952C15.9327 7.40882 15.9958 7.36278 16.0282 7.29647L16.2562 6.83044C16.3318 6.67592 16.5183 6.61193 16.6728 6.68751C16.735 6.71794 16.7853 6.76823 16.8158 6.83044L17.0437 7.29647C17.0762 7.36278 17.1392 7.40882 17.2122 7.41952L17.7212 7.49414C17.8929 7.51932 18.0118 7.67897 17.9866 7.85072C17.9766 7.91851 17.9448 7.98119 17.896 8.02923L17.5246 8.39442C17.4725 8.44572 17.4487 8.5193 17.461 8.59143L17.549 9.10916C17.5778 9.2789 17.4636 9.43989 17.2939 9.46875C17.2261 9.48028 17.1563 9.46905 17.0955 9.43681L16.6408 9.19561C16.5752 9.16083 16.4967 9.16083 16.4311 9.19561Z" /><path fill="white" d="M8.45115 12.0131L7.99641 12.2543C7.8443 12.335 7.6556 12.2771 7.57492 12.125C7.54268 12.0642 7.53145 11.9945 7.54298 11.9267L7.63099 11.4089C7.64326 11.3368 7.61947 11.2632 7.5673 11.2119L7.19597 10.8467C7.07221 10.725 7.07055 10.526 7.19227 10.4022C7.2403 10.3534 7.30299 10.3216 7.37077 10.3116L7.87971 10.237C7.95274 10.2263 8.0158 10.1803 8.04823 10.114L8.2762 9.64794C8.35178 9.49342 8.53833 9.42943 8.69285 9.50502C8.75506 9.53545 8.80535 9.58574 8.83578 9.64794L9.06374 10.114C9.09618 10.1803 9.15923 10.2263 9.23226 10.237L9.7412 10.3116C9.91296 10.3368 10.0318 10.4965 10.0066 10.6682C9.99666 10.736 9.96485 10.7987 9.916 10.8467L9.54467 11.2119C9.4925 11.2632 9.46872 11.3368 9.48098 11.4089L9.56899 11.9267C9.59785 12.0964 9.48364 12.2574 9.3139 12.2863C9.24608 12.2978 9.17634 12.2866 9.11557 12.2543L8.66082 12.0131C8.59526 11.9783 8.51672 11.9783 8.45115 12.0131Z" /><path fill="white" d="M5.93138 9.19561L5.47663 9.43681C5.32453 9.51749 5.13582 9.45959 5.05514 9.30749C5.0229 9.24672 5.01168 9.17698 5.02321 9.10916L5.11122 8.59143C5.12348 8.5193 5.0997 8.44572 5.04753 8.39442L4.6762 8.02923C4.55243 7.90751 4.55077 7.7085 4.67249 7.58474C4.72053 7.53589 4.78321 7.50408 4.851 7.49414L5.35994 7.41952C5.43297 7.40882 5.49602 7.36278 5.52846 7.29647L5.75642 6.83044C5.83201 6.67592 6.01855 6.61193 6.17308 6.68751C6.23528 6.71794 6.28557 6.76823 6.316 6.83044L6.54397 7.29647C6.5764 7.36278 6.63946 7.40882 6.71249 7.41952L7.22142 7.49414C7.39318 7.51932 7.512 7.67897 7.48682 7.85072C7.47689 7.91851 7.44507 7.98119 7.39623 8.02923L7.02489 8.39442C6.97273 8.44572 6.94894 8.5193 6.9612 8.59143L7.04922 9.10916C7.07807 9.2789 6.96386 9.43989 6.79412 9.46875C6.7263 9.48028 6.65657 9.46905 6.59579 9.43681L6.14105 9.19561C6.07548 9.16083 5.99694 9.16083 5.93138 9.19561Z" /></g><defs><clipPath id="clip0_8_172"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMadridFlag;