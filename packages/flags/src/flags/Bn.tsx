import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Bn = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_240)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#FFDA27" /><path fill="white" fillRule="evenodd" d="M-4.1674 3.38768L32.1674 16.6125L33.5355 12.8537L-2.79932 -0.371094L-4.1674 3.38768Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M-5.53556 7.14647L30.7992 20.3712L32.1673 16.6125L-4.16748 3.3877L-5.53556 7.14647Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_240"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Bn;