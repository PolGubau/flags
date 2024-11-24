import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Co = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_336)"><rect width={28} height={20} fill="white" rx={2} /><g filter="url(#filter0_d_5_336)"><path fill="#0EA6FB" fillRule="evenodd" d="M0 14.6666H28V9.33325H0V14.6666Z" clipRule="evenodd" /></g><g filter="url(#filter1_d_5_336)"><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /></g><path fill="#FFDA27" fillRule="evenodd" d="M0 9.33333H28V0H0V9.33333Z" clipRule="evenodd" /></g><defs><filter id="filter0_d_5_336" width={28} height={5.33325} x={0} y={9.33325} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_336" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_336" mode="normal" result="shape" /></filter><filter id="filter1_d_5_336" width={28} height={5.33325} x={0} y={14.6667} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_336" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_336" mode="normal" result="shape" /></filter><clipPath id="clip0_5_336"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Co;