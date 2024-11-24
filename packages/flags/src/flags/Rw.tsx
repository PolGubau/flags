import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Rw = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1406)"><rect width={28} height={20} fill="white" rx={2} /><g filter="url(#filter0_d_5_1406)"><path fill="#50B500" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /></g><path fill="#0EA6FB" fillRule="evenodd" d="M0 9.33333H28V0H0V9.33333Z" clipRule="evenodd" /><path fill="#FFDA27" d="M21.038 6.55828L20.1233 7.03918C19.8446 7.18573 19.4998 7.07856 19.3532 6.79981C19.2949 6.68881 19.2747 6.56167 19.2959 6.43807L19.4706 5.41951C19.4835 5.34426 19.4586 5.26747 19.4039 5.21418L18.6639 4.49283C18.4384 4.27301 18.4338 3.912 18.6536 3.68648C18.7411 3.59668 18.8558 3.53824 18.9799 3.52021L20.0026 3.37161C20.0782 3.36063 20.1435 3.31317 20.1773 3.2447L20.6346 2.31799C20.774 2.03558 21.1159 1.91964 21.3983 2.05901C21.5108 2.11451 21.6018 2.20553 21.6573 2.31799L22.1147 3.2447C22.1485 3.31317 22.2138 3.36063 22.2893 3.37161L23.312 3.52021C23.6237 3.5655 23.8396 3.85485 23.7943 4.1665C23.7763 4.2906 23.7179 4.4053 23.6281 4.49283L22.888 5.21418C22.8334 5.26747 22.8084 5.34426 22.8213 5.41951L22.996 6.43807C23.0492 6.74846 22.8408 7.04324 22.5304 7.09648C22.4068 7.11767 22.2796 7.09754 22.1687 7.03918L21.2539 6.55828C21.1863 6.52275 21.1056 6.52275 21.038 6.55828Z" /><path fill="#FFDA27" fillRule="evenodd" d="M0 14.6666H28V9.33325H0V14.6666Z" clipRule="evenodd" /></g><defs><filter id="filter0_d_5_1406" width={28} height={5.33325} x={0} y={14.6667} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1406" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1406" mode="normal" result="shape" /></filter><clipPath id="clip0_5_1406"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Rw;