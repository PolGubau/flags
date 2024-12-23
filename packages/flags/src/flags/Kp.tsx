import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Kp = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_938)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 4H28V0H0V4Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M0 16H28V4H0V16Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 14.6666H28V5.33325H0V14.6666Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M9.99984 13.3334C11.8408 13.3334 13.3332 11.841 13.3332 10.0001C13.3332 8.15913 11.8408 6.66675 9.99984 6.66675C8.15889 6.66675 6.6665 8.15913 6.6665 10.0001C6.6665 11.841 8.15889 13.3334 9.99984 13.3334Z" clipRule="evenodd" /><path fill="#F63030" d="M9.84754 11.8211L9.12357 12.2152C8.88142 12.3471 8.57885 12.2565 8.44776 12.0129C8.39538 11.9155 8.37647 11.8035 8.39399 11.6942L8.52771 10.8602C8.54634 10.744 8.50731 10.6259 8.42318 10.5441L7.82438 9.96165C7.62479 9.76751 7.61943 9.44739 7.81241 9.24664C7.88857 9.16741 7.98838 9.11539 8.09666 9.09848L8.90955 8.97158C9.0262 8.95337 9.12641 8.87846 9.17738 8.77135L9.53562 8.01857C9.6544 7.76897 9.95186 7.6635 10.2 7.78302C10.2999 7.83113 10.381 7.91135 10.4305 8.01101L10.8014 8.75764C10.8542 8.86387 10.9556 8.93708 11.0726 8.95332L11.8875 9.06648C12.1625 9.10467 12.3547 9.35989 12.3168 9.63653C12.3018 9.74571 12.2518 9.84698 12.1743 9.92492L11.5854 10.5174C11.5027 10.6007 11.4657 10.7193 11.4863 10.8352L11.634 11.6669C11.6825 11.9396 11.502 12.2001 11.231 12.2488C11.1227 12.2683 11.011 12.2511 10.9134 12.2001L10.1829 11.8182C10.0775 11.7632 9.95192 11.7642 9.84754 11.8211Z" /></g><defs><clipPath id="clip0_5_938"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Kp;