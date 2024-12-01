import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsBesalu = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_593)"><rect width={28} height={20} fill="#F63030" /><rect width={1.555} height={19.9773} x={26.4451} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={14} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={17.1113} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={20.2227} y={0.0227051} fill="#FFDA27" /><rect width={1.555} height={19.9773} x={23.334} y={0.0227051} fill="#FFDA27" /><rect width={2} height={14} x={6} y={3} fill="#FFDA27" /><rect width={2} height={10} x={12} y={9} fill="#FFDA27" transform="rotate(90 12 9)" /><rect width={2} height={6} x={10} y={5} fill="#FFDA27" transform="rotate(90 10 5)" /></g><defs><clipPath id="clip0_27_593"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsBesalu;