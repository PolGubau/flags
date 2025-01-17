import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_49)"><rect width={28} height={20} fill="#F63030" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 0H28L14 20L0 0Z" clipRule="evenodd" /><mask id="mask0_5_49" width={28} height={20} x={0} y={0} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><path fill="white" fillRule="evenodd" d="M0 0H28L14 20L0 0Z" clipRule="evenodd" /></mask><g mask="url(#mask0_5_49)"><path fill="#FFDA27" d="M15.5233 8.98989L14.6707 10.5966C14.4109 11.0862 13.8033 11.2725 13.3137 11.0127C13.1187 10.9092 12.9633 10.7444 12.8715 10.5436L12.1148 8.8896C12.0589 8.7674 11.9465 8.68053 11.8141 8.6573L10.0226 8.34292C9.47664 8.24712 9.11173 7.72688 9.20753 7.18094C9.24568 6.96355 9.35443 6.76479 9.51694 6.61544L10.8562 5.38468C10.9552 5.29375 11.003 5.15995 10.9842 5.02689L10.7296 3.2259C10.652 2.67708 11.034 2.16927 11.5828 2.09168C11.8014 2.06078 12.024 2.10279 12.2163 2.2112L13.8006 3.10458C13.9177 3.17059 14.0597 3.17477 14.1805 3.11576L15.8146 2.31707C16.3126 2.07367 16.9136 2.28006 17.157 2.77805C17.2539 2.97635 17.2828 3.20107 17.2391 3.41742L16.879 5.20033C16.8524 5.33205 16.8923 5.46843 16.9858 5.56502L18.2504 6.87239C18.6357 7.27079 18.6252 7.90616 18.2268 8.29153C18.0681 8.44498 17.8633 8.54186 17.644 8.56716L15.8371 8.77566C15.7036 8.79107 15.5863 8.87118 15.5233 8.98989Z" /><g filter="url(#filter0_d_5_49)"><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3333H28V8H0V13.3333Z" clipRule="evenodd" /></g><path fill="white" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /></g></g><defs><filter id="filter0_d_5_49" width={28} height={5.33325} x={0} y={8} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_49" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_49" mode="normal" result="shape" /></filter><clipPath id="clip0_5_49"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ag;