import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMataro = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_941)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#F63030" fillRule="evenodd" d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_8_941"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMataro;