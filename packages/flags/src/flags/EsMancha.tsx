import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMancha = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_299)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M0 20H14V0H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" d="M3.11674 10.0042L3.1167 5.36037H5.05839V10.0042H6.02922V3.85449H7.97087V10.0042H8.9417V5.62002H10.8833V10.0042V16.1454H3.11674V10.0042Z" /></g><defs><clipPath id="clip0_8_299"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMancha;