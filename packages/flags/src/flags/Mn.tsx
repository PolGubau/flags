import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mn = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1144)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M9.33325 20H18.6666V0H9.33325V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M18.6667 20H28.0001V0H18.6667V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M4.66675 10L5.33341 10.6667L4.66675 10.6667L4.00008 10.6667L4.66675 10ZM4.66675 12C4.29856 12 4.00008 11.7015 4.00008 11.3333C4.00008 10.9651 4.29856 10.6667 4.66675 10.6667C5.03494 10.6667 5.33341 10.9651 5.33341 11.3333C5.33341 11.7015 5.03494 12 4.66675 12ZM5.33341 12H4.66675H4.00008H2.66675V16H4.00008V14.6667L4.66675 16L5.33341 14.6667V16H6.66675V12H5.33341ZM4.66675 13.3333L5.33341 12V14C5.33341 13.6318 5.03494 13.3333 4.66675 13.3333ZM4.00008 14C4.00008 13.6318 4.29856 13.3333 4.66675 13.3333L4.00008 12V14ZM4.66675 14.6667H4.00008V14C4.00008 14.3682 4.29856 14.6667 4.66675 14.6667ZM4.66675 14.6667H5.33341V14C5.33341 14.3682 5.03494 14.6667 4.66675 14.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1144"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mn;