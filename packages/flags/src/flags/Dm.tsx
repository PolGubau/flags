import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Dm = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_403)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 8H28V0H0V8Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 20H28V12H0V20Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M16 20H12V12H0V8H12V0H16V8H28V12H16V20Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M14.6667 20H13.3333V10.6667H0V9.33333H13.3333V0H14.6667V9.33333H28V10.6667H14.6667V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M13.3333 20H12V9.33333H0V8H12V0H13.3333V8H28V9.33333H13.3333V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M13.9999 14.6666C16.5772 14.6666 18.6666 12.5772 18.6666 9.99992C18.6666 7.42259 16.5772 5.33325 13.9999 5.33325C11.4226 5.33325 9.33325 7.42259 9.33325 9.99992C9.33325 12.5772 11.4226 14.6666 13.9999 14.6666Z" clipRule="evenodd" /><path fillRule="evenodd" stroke="#50B500" strokeDasharray="0.67 2.67" strokeLinecap="round" strokeWidth={1.33333} d="M14.0001 13.3334C15.841 13.3334 17.3334 11.841 17.3334 10.0001C17.3334 8.15913 15.841 6.66675 14.0001 6.66675C12.1591 6.66675 10.6667 8.15913 10.6667 10.0001C10.6667 11.841 12.1591 13.3334 14.0001 13.3334Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M14 11.3334C14.7364 11.3334 14.6666 10.7365 14.6666 10.0001C14.6666 9.2637 14.7364 8.66675 14 8.66675C13.2636 8.66675 13.3333 9.2637 13.3333 10.0001C13.3333 10.7365 13.2636 11.3334 14 11.3334Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_403"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Dm;