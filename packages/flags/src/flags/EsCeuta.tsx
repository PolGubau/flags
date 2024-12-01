import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsCeuta = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_310)"><rect width={28} height={20} fill="white" /><path fill="#4C4C4C" d="M0 10H14L0 20V10Z" /><path fill="#4C4C4C" d="M14 0H0L14 10V0Z" /><path fill="#4C4C4C" d="M28 10H14L28 0V10Z" /><path fill="#4C4C4C" d="M14 20H28L14 10V20Z" /></g><defs><clipPath id="clip0_27_310"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsCeuta;