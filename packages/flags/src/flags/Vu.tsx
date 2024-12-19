import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Vu = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1804)"><rect width={28} height={20} fill="white" rx={2} /><g filter="url(#filter0_d_5_1804)"><path fill="#50B500" fillRule="evenodd" d="M0 20H28V12H0V20Z" clipRule="evenodd" /></g><g filter="url(#filter1_d_5_1804)"><path fill="#F63030" fillRule="evenodd" d="M0 8H28V0H0V8Z" clipRule="evenodd" /></g><path fill="#4C4C4C" fillRule="evenodd" d="M0 12H28V8H0V12Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path stroke="#FFDA27" strokeWidth={1.33333} d="M-0.666707 17.3629V2.63721L9.52798 10L-0.666707 17.3629Z" /><path fill="#FFDA27" fillRule="evenodd" d="M9.33337 10.6667H28V9.33337H9.33337V10.6667Z" clipRule="evenodd" /></g><defs><filter id="filter0_d_5_1804" width={28} height={8} x={0} y={12} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1804" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1804" mode="normal" result="shape" /></filter><filter id="filter1_d_5_1804" width={28} height={8} x={0} y={0} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1804" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1804" mode="normal" result="shape" /></filter><clipPath id="clip0_5_1804"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Vu;