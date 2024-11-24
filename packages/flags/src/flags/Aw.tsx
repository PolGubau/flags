import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Aw = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_2009)"><g filter="url(#filter0_d_5_2009)"><rect width={28} height={20} fill="#0EA6FB" /></g><path fill="#F63030" stroke="white" d="M3.99033 6.97266L4.99479 6.43638C5.21417 6.31925 5.47714 6.31758 5.698 6.4319L6.70922 6.95532C6.73427 6.96829 6.7629 6.97263 6.79068 6.96769C6.86042 6.95527 6.9069 6.88865 6.89447 6.8189L6.69484 5.69789C6.65124 5.45305 6.7309 5.20243 6.90787 5.02771L7.71816 4.22773C7.73824 4.20791 7.75122 4.18202 7.7551 4.15408C7.76484 4.08391 7.71585 4.01912 7.64567 4.00938L6.51783 3.85284C6.2715 3.81865 6.05777 3.66543 5.94629 3.44313L3.99033 6.97266ZM3.99033 6.97266C3.92783 7.00603 3.85012 6.98242 3.81675 6.91992C3.80346 6.89503 3.79875 6.86646 3.80334 6.83862L3.98866 5.71515C4.02914 5.46978 3.94628 5.22019 3.76709 5.04774L2.94667 4.25817C2.89562 4.20904 2.89406 4.12783 2.94319 4.07679C2.96275 4.05646 2.98847 4.04315 3.01636 4.03891L4.14211 3.86799C4.38799 3.83066 4.59975 3.67473 4.70839 3.45103L5.20579 2.42676C5.23674 2.36303 5.31349 2.33646 5.37722 2.3674C5.4026 2.37973 5.42321 2.40007 5.43585 2.42529L5.8828 2.20115L5.43585 2.42529L5.94629 3.44313L3.99033 6.97266Z" /><rect width={28} height={1.93587} y={15.0972} fill="#FFDA27" /><rect width={28} height={2.14681} y={11.1865} fill="#FFDA27" /></g><defs><filter id="filter0_d_5_2009" width={30} height={22} x={-1} y={0} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1} /><feGaussianBlur stdDeviation={0.5} /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" /><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_2009" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_5_2009" mode="normal" result="shape" /></filter><clipPath id="clip0_5_2009"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Aw;