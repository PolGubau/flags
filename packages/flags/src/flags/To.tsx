import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const To = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1660)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M28 0H16V10.6667H0V20H28V0Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M7 1.33325C6.81591 1.33325 6.66667 1.48249 6.66667 1.66659V3.99992H4.33333C4.14924 3.99992 4 4.14916 4 4.33325V6.33325C4 6.51735 4.14924 6.66659 4.33333 6.66659H6.66667V8.99992C6.66667 9.18401 6.81591 9.33325 7 9.33325H9C9.18409 9.33325 9.33333 9.18401 9.33333 8.99992V6.66659H11.6667C11.8508 6.66659 12 6.51735 12 6.33325V4.33325C12 4.14916 11.8508 3.99992 11.6667 3.99992H9.33333V1.66659C9.33333 1.48249 9.18409 1.33325 9 1.33325H7Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1660"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default To;