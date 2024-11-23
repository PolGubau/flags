import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const GgFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_652)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><rect width={6.66667} height={20} x={10.6666} fill="#F63030" /><rect width={28} height={6.66667} y={6.66675} fill="#F63030" /><rect width={1.33333} height={14.6667} x={13.3333} y={2.66675} fill="#FFDA27" /><rect width={14.6667} height={1.33333} x={6.66663} y={9.3335} fill="#FFDA27" /></g><defs><clipPath id="clip0_5_652"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default GgFlag;