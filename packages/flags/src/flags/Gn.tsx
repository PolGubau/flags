import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gn = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_627)"><rect width={28} height={20} fill="white" rx={2} /><rect width={14.6667} height={20} x={13.3333} fill="#50B500" /><path fill="#F63030" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M9.33325 20H18.6666V0H9.33325V20Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_627"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gn;