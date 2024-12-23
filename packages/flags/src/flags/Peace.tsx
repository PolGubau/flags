import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Peace = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_25_342)"><rect width={28} height={20} fill="white" /><rect width={28} height={20} fill="white" /><circle cx={14} cy={9.60254} r={5.39111} stroke="#4C4C4C" /><path stroke="#4C4C4C" d="M14.0114 3.81458V9.64838M14.0114 15.4822V9.64838M14.0114 9.64838L17.8168 13.4537M14.0114 9.64838L10.2061 13.4537" /></g><defs><clipPath id="clip0_25_342"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Peace;