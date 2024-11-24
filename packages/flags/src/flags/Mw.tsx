import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mw = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1120)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#4C4C4C" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#9B5F38" fillRule="evenodd" d="M14 12.0001C16.5774 12.0001 18.6667 9.91074 18.6667 7.33341C18.6667 4.75609 16.5774 2.66675 14 2.66675C11.4227 2.66675 9.33337 4.75609 9.33337 7.33341C9.33337 9.91074 11.4227 12.0001 14 12.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1120"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mw;