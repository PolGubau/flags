import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Zm = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_2198)"><rect width={28} height={20} fill="#50B500" /><rect width={4} height={9.33333} x={24} y={10.6666} fill="#FF9600" /><path fill="#4C4C4C" fillRule="evenodd" d="M20 20H24V10.6666H20V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M16 20H20V10.6666H16V20Z" clipRule="evenodd" /><path stroke="#FF9600" strokeLinecap="round" strokeWidth={2} d="M17.0493 4.0033L17.2466 4.12813C19.859 5.78137 23.1902 5.78137 25.8026 4.12813L25.9999 4.0033" /></g><defs><clipPath id="clip0_5_2198"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Zm;