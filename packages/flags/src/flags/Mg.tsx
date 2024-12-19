import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1088)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><path fill="#50B500" fillRule="evenodd" d="M9.33325 9.33325V19.9999H27.9999V9.33325H9.33325Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M27.9999 9.33333H9.33325V0H27.9999V9.33333Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1088"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mg;