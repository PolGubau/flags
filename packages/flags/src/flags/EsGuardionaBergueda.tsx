import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsGuardionaBergueda = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_636)"><rect width={28} height={20} fill="#FFDA27" /><path stroke="black" strokeWidth={4} d="M0 0L28 20" /><path stroke="black" d="M3 -2L31 18" /><path stroke="black" d="M-3 2L25 22" /></g><defs><clipPath id="clip0_27_636"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsGuardionaBergueda;