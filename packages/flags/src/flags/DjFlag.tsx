import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const DjFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_396)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V10.0063H0V19.9999Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="#F63030" d="M4.89954 11.8211L4.17557 12.2152C3.93342 12.3471 3.63085 12.2565 3.49976 12.0129C3.44738 11.9155 3.42847 11.8035 3.44599 11.6942L3.57971 10.8602C3.59834 10.744 3.55931 10.6259 3.47518 10.5441L2.87638 9.96165C2.67679 9.76751 2.67143 9.44739 2.86441 9.24664C2.94057 9.16741 3.04039 9.11539 3.14866 9.09848L3.96155 8.97158C4.0782 8.95337 4.17841 8.87846 4.22938 8.77135L4.58762 8.01857C4.7064 7.76897 5.00386 7.6635 5.25201 7.78302C5.3519 7.83113 5.43301 7.91135 5.48252 8.01101L5.85342 8.75764C5.90619 8.86387 6.00765 8.93708 6.12459 8.95332L6.93951 9.06648C7.21453 9.10467 7.40673 9.35989 7.36879 9.63653C7.35382 9.74571 7.30379 9.84698 7.22633 9.92492L6.63744 10.5174C6.55471 10.6007 6.51768 10.7193 6.53827 10.8352L6.68605 11.6669C6.7345 11.9396 6.55404 12.2001 6.28298 12.2488C6.17467 12.2683 6.063 12.2511 5.96537 12.2001L5.23485 11.8182C5.12953 11.7632 5.00392 11.7642 4.89954 11.8211Z" /></g><defs><clipPath id="clip0_5_396"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default DjFlag;