import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Cg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_289)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M6.66663 18.6667L26.6666 0H28V20H6.66663V18.6667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M21.3334 1.33333L1.33337 20H4.00543e-05V0H21.3334V1.33333Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M30.2404 -2.05884L3.38023 25.7556L-1.41537 21.1246L25.4448 -6.68989L30.2404 -2.05884Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_289"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Cg;