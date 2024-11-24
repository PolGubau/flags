import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsAlmeriaFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_375)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M16.0001 21.3333H12.0001V12H-1.33325V7.99996H12.0001V-1.33337H16.0001V7.99996H29.3334V12H16.0001V21.3333Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M11.2253 6.84814H16.6923V10.9026C16.6923 12.4123 15.4684 13.6361 13.9588 13.6361C12.4492 13.6361 11.2253 12.4123 11.2253 10.9026V6.84814Z" /><rect width={5.46021} height={0.984619} x={11.2319} y={5.23047} fill="#FFDA27" /></g><defs><clipPath id="clip0_8_375"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsAlmeriaFlag;