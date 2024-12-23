import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Cd = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_329)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" rx={2} /><path fill="#FFDA27" fillRule="evenodd" d="M32.3591 5.20459L-2.09312 22.7589L-5.72505 15.6308L28.7272 -1.92346L32.3591 5.20459Z" clipRule="evenodd" /><rect width={38.6667} height={5.33333} x={32.1216} y={3.77368} fill="#F63030" transform="rotate(153 32.1216 3.77368)" /><path fill="#FFDA27" d="M5.05546 6.93682L4.0029 7.49018C3.6724 7.66394 3.26362 7.53687 3.08986 7.20637C3.02067 7.07476 2.99679 6.92401 3.02193 6.77746L3.22295 5.60542C3.24208 5.49389 3.2051 5.38009 3.12407 5.3011L2.27253 4.47105C2.00515 4.21042 1.99968 3.78238 2.26031 3.51499C2.3641 3.40852 2.50009 3.33923 2.64723 3.31785L3.82403 3.14685C3.93601 3.13058 4.03282 3.06024 4.0829 2.95877L4.60918 1.89241C4.77443 1.55757 5.17983 1.4201 5.51467 1.58535C5.64801 1.65115 5.75593 1.75907 5.82173 1.89241L6.34801 2.95877C6.39809 3.06024 6.4949 3.13058 6.60689 3.14685L7.78368 3.31785C8.1532 3.37154 8.40922 3.71462 8.35553 4.08413C8.33415 4.23128 8.26485 4.36727 8.15838 4.47105L7.30684 5.3011C7.22581 5.38009 7.18883 5.49389 7.20796 5.60542L7.40898 6.77746C7.4721 7.14549 7.22493 7.495 6.85691 7.55812C6.71036 7.58325 6.55962 7.55938 6.42801 7.49018L5.37545 6.93682C5.27529 6.88416 5.15563 6.88416 5.05546 6.93682Z" /></g><defs><clipPath id="clip0_5_329"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Cd;