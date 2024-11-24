import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const TzFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1653)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 13.3333L28 0H0V13.3333Z" clipRule="evenodd" /><path fill="#18BDBD" fillRule="evenodd" d="M0 20.0001H28V6.66675L0 20.0001Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M3.08245 22.6666L30.1708 5.73998L24.9177 -2.66675L-2.17065 14.2599L3.08245 22.6666Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M-0.629314 23.0718L32.1619 2.58163L28.6291 -3.07202L-4.16211 17.4182L-0.629314 23.0718Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1653"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default TzFlag;