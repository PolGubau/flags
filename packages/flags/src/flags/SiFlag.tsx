import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SiFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1530)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3334H28V6.66675H9.24398V5.33342C9.24398 5.33342 8.30367 4.66675 7.33333 4.66675C6.36299 4.66675 5.33333 5.33342 5.33333 5.33342V6.66675H0V13.3334ZM8.66667 8.00008C8.66667 8.73646 8.06971 9.33342 7.33333 9.33342C6.59695 9.33342 6 8.73646 6 8.00008C6 7.2637 6.59695 6.66675 7.33333 6.66675C8.06971 6.66675 8.66667 7.2637 8.66667 8.00008Z" clipRule="evenodd" /><g filter="url(#filter0_d_5_1530)"><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /></g></g><defs><filter id="filter0_d_5_1530" width={28} height={6.66675} x={0} y={13.3333} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1530" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1530" mode="normal" result="shape" /></filter><clipPath id="clip0_5_1530"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default SiFlag;