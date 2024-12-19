import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ne = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1246)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#FF9600" fillRule="evenodd" d="M13.9999 12.6666C15.4727 12.6666 16.6666 11.4727 16.6666 9.99992C16.6666 8.52716 15.4727 7.33325 13.9999 7.33325C12.5272 7.33325 11.3333 8.52716 11.3333 9.99992C11.3333 11.4727 12.5272 12.6666 13.9999 12.6666Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1246"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ne;