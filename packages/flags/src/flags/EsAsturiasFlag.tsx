import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsAsturiasFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_210)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#FFDA27" fillRule="evenodd" d="M3.53638 9.77728H6.73656L6.73655 15.636H8.84841L8.84841 9.77728H12.2748V7.67132H8.84841L8.84841 4.36401L6.73655 4.36401L6.73656 7.67132H3.53638L3.53638 9.77728Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_8_210"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsAsturiasFlag;