import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AeFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_24)"><path fill="#50B500" fillRule="evenodd" d="M8 6.66667H28V0H8V6.66667Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M8 19.9999H28V13.3333H8V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20H8V0H0V20Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_24"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default AeFlag;