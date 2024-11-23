import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsBarcelonaFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_403)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M0 8.86663H28V6.66663H0V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V11.1333H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 17.8001H28V15.6001H0V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4.39995H28V2.19995H0V4.39995Z" clipRule="evenodd" /><rect width={8.12614} height={8.12614} x={14} y={4.25388} fill="white" strokeWidth={0.802787} transform="rotate(45 14 4.25388)" /><mask id="mask0_8_403" width={12} height={12} x={8} y={4} maskUnits="userSpaceOnUse" style={{
      maskType: "alpha"
    }}><rect width={3.66168} height={3.66168} x={14} y={7.41073} fill="white" strokeWidth={3.66168} transform="rotate(45 14 7.41073)" /></mask><g mask="url(#mask0_8_403)"><rect width={7.32335} height={7.32335} x={14} y={4.82153} fill="white" transform="rotate(45 14 4.82153)" /><rect width={13.8895} height={1.2522} x={7.05518} y={9.3739} fill="#F63030" /><rect width={13.8895} height={1.2522} x={14.6261} y={3.05518} fill="#F63030" transform="rotate(90 14.6261 3.05518)" /></g></g><defs><clipPath id="clip0_8_403"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsBarcelonaFlag;