import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Uy = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1736)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M28 1.33325H13.3333V3.99992H28V1.33325ZM13.3333 6.66659V9.33325H28V6.66659H13.3333ZM13.3333 11.9999L0 11.9999V14.6666H28V11.9999H13.3333ZM0 18.6666V17.3333H28V18.6666H0Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" stroke="#FF9600" strokeWidth={1.16327} d="M6.66663 9.0769C7.95154 9.0769 8.99316 8.03528 8.99316 6.75037C8.99316 5.46545 7.95154 4.42383 6.66663 4.42383C5.38171 4.42383 4.34009 5.46545 4.34009 6.75037C4.34009 8.03528 5.38171 9.0769 6.66663 9.0769Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1736"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Uy;