import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsTerrassa = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_237)"><rect width={28} height={20} fill="#F63030" /><path fill="#FFDA27" d="M3.11674 10.0042L3.1167 5.36037H5.05839V10.0042H6.02922V3.85449H7.97087V10.0042H8.9417V5.62002H10.8833V10.0042V16.1454H3.11674V10.0042Z" /><rect width={1.555} height={19.9773} x={26.4451} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={14} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={17.1113} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={20.2227} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={23.334} y={0.0227051} fill="#FFDA27" /></g><defs><clipPath id="clip0_27_237"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsTerrassa;