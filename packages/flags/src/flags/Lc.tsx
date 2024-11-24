import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Lc = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1011)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><g filter="url(#filter0_d_5_1011)"><path fill="white" fillRule="evenodd" d="M13.0745 4.92919C13.4134 4.10071 14.5866 4.10071 14.9255 4.9292L20 17.3334H8L13.0745 4.92919Z" clipRule="evenodd" /></g><path fill="#4C4C4C" fillRule="evenodd" d="M13.0679 7.72984C13.3985 6.87977 14.6013 6.87976 14.9319 7.72984L18.6666 17.3333H9.33325L13.0679 7.72984Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M13.2 10.3999C13.6 9.86659 14.4 9.86659 14.8 10.3999L20 17.3333H8L13.2 10.3999Z" clipRule="evenodd" /></g><defs><filter id="filter0_d_5_1011" width={12} height={14.0256} x={8} y={4.30786} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1} /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1011" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1011" mode="normal" result="shape" /></filter><clipPath id="clip0_5_1011"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Lc;