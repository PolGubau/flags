import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMontgat = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_31_283)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="white" d="M2.04323 5.09648L2.04321 2.77455H3.01407V5.09648H3.49949V2.02161H4.47032V5.09648H4.95574V2.90438H5.92657V5.09648V8.16711H2.04323V5.09648Z" /><path fill="#D9D9D9" d="M0 14.5L3.5 14L7 14.5L10.5 14L14 14.5L17.5 14L21 14.5L24.5 14L28 14.5V15.5L24.5 15L21 15.5L17.5 15L14 15.5L10.5 15L7 15.5L3.5 15L0 15.5V14.5Z" /><path fill="#D9D9D9" d="M0 16.5L3.5 16L7 16.5L10.5 16L14 16.5L17.5 16L21 16.5L24.5 16L28 16.5V17.5L24.5 17L21 17.5L17.5 17L14 17.5L10.5 17L7 17.5L3.5 17L0 17.5V16.5Z" /></g><defs><clipPath id="clip0_31_283"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMontgat;