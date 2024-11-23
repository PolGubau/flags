import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const GiFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_664)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M9.33337 13.3333H17.3334V8H9.33337V13.3333Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M10.6666 13.3333H12V12H10.6666V13.3333Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M14.6666 13.3333H16V12H14.6666V13.3333Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M9.33337 8.00008H10.6667V6.66675H9.33337V8.00008Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M13.3334 8.00008H14.6667V6.66675H13.3334V8.00008Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M12 8.00008H13.3333V6.66675H12V8.00008Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M16 8.00008H17.3333V6.66675H16V8.00008Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M9.33337 6.66659H10.6667V5.33325H9.33337V6.66659Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M13.3334 6.66659H14.6667V5.33325H13.3334V6.66659Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M12 6.66659H13.3333V5.33325H12V6.66659Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M16 6.66659H17.3333V5.33325H16V6.66659Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_664"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default GiFlag;