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
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1220)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="white" d="M13.784 14.011L11.955 14.9726C11.3976 15.2657 10.7082 15.0514 10.4151 14.494C10.2984 14.272 10.2582 14.0178 10.3006 13.7706L10.6499 11.7339C10.6757 11.5834 10.6258 11.4299 10.5165 11.3233L9.03671 9.88092C8.58578 9.44136 8.57655 8.71948 9.01611 8.26854C9.19114 8.08898 9.42048 7.97212 9.66864 7.93606L11.7136 7.63891C11.8647 7.61696 11.9953 7.52206 12.0629 7.38515L12.9774 5.53209C13.2561 4.96739 13.9398 4.73554 14.5045 5.01424C14.7294 5.12521 14.9114 5.30722 15.0224 5.53209L15.9369 7.38515C16.0045 7.52206 16.1351 7.61696 16.2862 7.63891L18.3312 7.93606C18.9543 8.02662 19.3861 8.60521 19.2956 9.22839C19.2595 9.47654 19.1426 9.70588 18.9631 9.88092L17.4833 11.3233C17.374 11.4299 17.3241 11.5834 17.3499 11.7339L17.6992 13.7706C17.8057 14.3913 17.3888 14.9807 16.7682 15.0872C16.521 15.1296 16.2668 15.0893 16.0448 14.9726L14.2158 14.011C14.0806 13.94 13.9192 13.94 13.784 14.011Z" /></g><defs><clipPath id="clip0_5_1220"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mm;