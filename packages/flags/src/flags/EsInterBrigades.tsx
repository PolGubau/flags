import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsInterBrigades = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1124)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#7700FF" fillRule="evenodd" d="M0 20H28V14.6666H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 14.6667H28V5.33337H0V14.6667Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M7.33325 9.33333H8.66659V10H7.33325V9.33333Z" clipRule="evenodd" /><path fill="#F63030" d="M13 10L14 6L15 10L18.5 13L14 11.5L9.5 13L13 10Z" /></g><defs><clipPath id="clip0_27_1124"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsInterBrigades;