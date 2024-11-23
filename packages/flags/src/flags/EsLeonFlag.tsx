import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsLeonFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_281)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M14 20H28V10H14V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 10H14V0H0V10Z" clipRule="evenodd" /><path fill="#FFDA27" d="M5.17043 4.64168L5.17041 2.45366H6.08528V4.64168H6.5427V1.74414H7.45755V4.64168H7.91497V2.576H8.82981V4.64168V7.53523H5.17043V4.64168Z" /><path fill="#FFDA27" d="M19.1704 15.002L19.1704 12.814H20.0853V15.002H20.5427V12.1045H21.4575V15.002H21.915V12.9364H22.8298V15.002V17.8956H19.1704V15.002Z" /><rect width={2.11609} height={5.64856} x={5.94189} y={12.1758} fill="#4C4C4C" /><rect width={2.11609} height={5.64856} x={19.9419} y={2.17578} fill="#4C4C4C" /></g><defs><clipPath id="clip0_8_281"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsLeonFlag;