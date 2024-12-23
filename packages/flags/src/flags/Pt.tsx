import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Pt = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1362)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="#50B500" fillRule="evenodd" d="M0 20H10.6667V0H0V20Z" clipRule="evenodd" /><path stroke="#FFDA27" strokeWidth={1.33333} d="M10.6667 13.3333C12.5076 13.3333 14 11.8409 14 9.99992C14 8.15897 12.5076 6.66659 10.6667 6.66659C8.82572 6.66659 7.33333 8.15897 7.33333 9.99992C7.33333 11.8409 8.82572 13.3333 10.6667 13.3333Z" /><path fill="white" fillRule="evenodd" d="M9.33337 8.33333C9.33337 8.14924 9.48261 8 9.66671 8H11.6667C11.8508 8 12 8.14924 12 8.33333V10.6667C12 11.403 11.4031 12 10.6667 12C9.93033 12 9.33337 11.403 9.33337 10.6667V8.33333Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M10.6667 10.6667C11.0349 10.6667 11.3333 9.7016 11.3333 9.33341C11.3333 8.96522 11.0349 8.66675 10.6667 8.66675C10.2985 8.66675 10 8.96522 10 9.33341C10 9.7016 10.2985 10.6667 10.6667 10.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1362"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Pt;