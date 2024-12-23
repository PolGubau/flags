import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gh = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_599)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#4C4C4C" d="M13.8478 11.8211L13.1238 12.2152C12.8817 12.3471 12.5791 12.2565 12.448 12.0129C12.3956 11.9155 12.3767 11.8035 12.3942 11.6942L12.528 10.8602C12.5466 10.744 12.5075 10.6259 12.4234 10.5441L11.8246 9.96165C11.625 9.76751 11.6197 9.44739 11.8127 9.24664C11.8888 9.16741 11.9886 9.11539 12.0969 9.09848L12.9098 8.97158C13.0264 8.95337 13.1267 8.87846 13.1776 8.77135L13.5359 8.01857C13.6546 7.76897 13.9521 7.6635 14.2002 7.78302C14.3001 7.83113 14.3813 7.91135 14.4308 8.01101L14.8017 8.75764C14.8544 8.86387 14.9559 8.93708 15.0728 8.95332L15.8878 9.06648C16.1628 9.10467 16.355 9.35989 16.317 9.63653C16.3021 9.74571 16.252 9.84698 16.1746 9.92492L15.5857 10.5174C15.503 10.6007 15.4659 10.7193 15.4865 10.8352L15.6343 11.6669C15.6827 11.9396 15.5023 12.2001 15.2312 12.2488C15.1229 12.2683 15.0112 12.2511 14.9136 12.2001L14.1831 11.8182C14.0778 11.7632 13.9522 11.7642 13.8478 11.8211Z" /></g><defs><clipPath id="clip0_5_599"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gh;