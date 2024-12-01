import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsRepublicStar = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1163)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#7700FF" fillRule="evenodd" d="M0 20H28V14.6666H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 14.6667H28V5.33337H0V14.6667Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M7.33337 9.33333H8.66671V10H7.33337V9.33333Z" clipRule="evenodd" /></g><path fill="#F63030" stroke="#FFDA27" strokeWidth={1.76919} d="M9.53974 10.9205L8.94455 11.5257L9.53974 10.9205L7.66423 9.07604C7.38743 8.80382 7.38372 8.35875 7.65594 8.08196C7.76337 7.97271 7.90356 7.90157 8.05516 7.87934L10.6257 7.50249C11.2833 7.40608 11.8511 6.9915 12.1431 6.39443L11.3485 6.00573L12.1431 6.39443L13.2945 4.04061C13.4617 3.699 13.874 3.55754 14.2157 3.72464C14.3532 3.79191 14.4644 3.9031 14.5316 4.04062L15.683 6.39443C15.9751 6.9915 16.5429 7.40608 17.2005 7.50249L19.771 7.87934C20.1551 7.93566 20.4209 8.2927 20.3646 8.67682C20.3423 8.82841 20.2712 8.9686 20.1619 9.07604L18.2864 10.9205C17.8167 11.3825 17.6025 12.045 17.7129 12.6945L18.1575 15.3095C18.2213 15.6852 17.9686 16.0415 17.5929 16.1053C17.4428 16.1309 17.2884 16.106 17.1539 16.0347L16.7394 16.8161L17.1539 16.0347L14.8571 14.8164C14.2667 14.5032 13.5595 14.5032 12.9691 14.8164L10.6723 16.0347C10.3356 16.2132 9.91795 16.0851 9.73939 15.7484C9.66804 15.6139 9.64319 15.4596 9.66871 15.3095L10.1132 12.6945C10.2237 12.045 10.0095 11.3825 9.53974 10.9205Z" /><defs><clipPath id="clip0_27_1163"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsRepublicStar;