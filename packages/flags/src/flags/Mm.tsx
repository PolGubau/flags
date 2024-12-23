import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mm = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1220)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="white" d="M13.7842 14.011L11.9551 14.9726C11.3977 15.2657 10.7083 15.0514 10.4152 14.494C10.2986 14.272 10.2583 14.0178 10.3007 13.7706L10.65 11.7339C10.6758 11.5834 10.6259 11.4299 10.5166 11.3233L9.03684 9.88092C8.5859 9.44136 8.57667 8.71948 9.01623 8.26854C9.19126 8.08898 9.42061 7.97212 9.66876 7.93606L11.7137 7.63891C11.8648 7.61696 11.9954 7.52206 12.063 7.38515L12.9775 5.53209C13.2562 4.96739 13.9399 4.73554 14.5046 5.01424C14.7295 5.12521 14.9115 5.30722 15.0225 5.53209L15.937 7.38515C16.0046 7.52206 16.1352 7.61696 16.2863 7.63891L18.3313 7.93606C18.9544 8.02662 19.3862 8.60521 19.2957 9.22839C19.2596 9.47654 19.1428 9.70588 18.9632 9.88092L17.4834 11.3233C17.3741 11.4299 17.3242 11.5834 17.35 11.7339L17.6993 13.7706C17.8058 14.3913 17.389 14.9807 16.7683 15.0872C16.5211 15.1296 16.2669 15.0893 16.045 14.9726L14.2159 14.011C14.0807 13.94 13.9193 13.94 13.7842 14.011Z" /></g><defs><clipPath id="clip0_5_1220"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mm;