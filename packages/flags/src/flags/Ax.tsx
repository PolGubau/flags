import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ax = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_100)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><path fill="#F63030" stroke="#FFDA27" d="M-1.6604 11.603V12.103H-1.1604H8.00745V21.0013V21.5013H8.50745H11.7135H12.2135V21.0013V12.103H29.1707H29.6707V11.603V8.3969V7.8969H29.1707H12.2135V-1.69824V-2.19824H11.7135H8.50745H8.00745V-1.69824V7.8969H-1.1604H-1.6604V8.3969V11.603Z" /></g><defs><clipPath id="clip0_5_100"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ax;