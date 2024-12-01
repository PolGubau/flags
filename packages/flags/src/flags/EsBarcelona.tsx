import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsBarcelona = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_379)"><rect width={28} height={20} fill="white" /><rect width={14} height={10} x={14} fill="#F63030" /><rect width={1.555} height={10} x={26.4451} fill="#FFDA27" /><rect width={1.555} height={10} x={14} fill="#FFDA27" /><rect width={1.555} height={10} x={17.1113} fill="#FFDA27" /><rect width={1.555} height={10} x={20.2227} fill="#FFDA27" /><rect width={1.555} height={10} x={23.334} fill="#FFDA27" /><rect width={14} height={10} y={10} fill="#F63030" /><rect width={1.555} height={10} x={12.4451} y={10} fill="#FFDA27" /><rect width={1.555} height={10} y={10} fill="#FFDA27" /><rect width={1.555} height={10} x={3.11133} y={10} fill="#FFDA27" /><rect width={1.555} height={10} x={6.22266} y={10} fill="#FFDA27" /><rect width={1.555} height={10} x={9.33398} y={10} fill="#FFDA27" /><rect width={1.555} height={10} x={6.22266} fill="#F63030" /><rect width={1.555} height={14} x={0.000244141} y={5.77747} fill="#F63030" transform="rotate(-90 0.000244141 5.77747)" /><rect width={1.555} height={10} x={20.2227} y={10} fill="#F63030" /><rect width={1.555} height={14} x={14} y={15.7775} fill="#F63030" transform="rotate(-90 14 15.7775)" /></g><defs><clipPath id="clip0_27_379"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsBarcelona;