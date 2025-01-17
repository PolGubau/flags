import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Km = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_342)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#FF9600" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 14.6666H28V9.33325H0V14.6666Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 20L13.3333 10L0 0V20Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M7.33346 9.02088C7.65555 9.02088 7.91665 8.75977 7.91665 8.43769C7.91665 8.1156 7.65555 7.85449 7.33346 7.85449C7.01137 7.85449 6.75026 8.1156 6.75026 8.43769C6.75026 8.75977 7.01137 9.02088 7.33346 9.02088ZM7.33344 10.6261C7.65553 10.6261 7.91663 10.365 7.91663 10.0429C7.91663 9.7208 7.65553 9.4597 7.33344 9.4597C7.01135 9.4597 6.75024 9.7208 6.75024 10.0429C6.75024 10.365 7.01135 10.6261 7.33344 10.6261ZM7.91663 11.6481C7.91663 11.9702 7.65553 12.2313 7.33344 12.2313C7.01135 12.2313 6.75024 11.9702 6.75024 11.6481C6.75024 11.326 7.01135 11.0649 7.33344 11.0649C7.65553 11.0649 7.91663 11.326 7.91663 11.6481Z" clipRule="evenodd" /><path fill="white" d="M7.36091 7.14117C7.14408 7.08594 6.95303 7.05833 6.78774 7.05833C5.14467 7.05833 3.8127 8.3903 3.8127 10.0334C3.8127 11.6764 5.14467 13.0084 6.78774 13.0084C6.95302 13.0084 7.14407 12.9808 7.36089 12.9256C7.49358 12.8918 7.62854 12.9719 7.66234 13.1046C7.68773 13.2043 7.6489 13.3094 7.56475 13.3686C6.96645 13.7896 6.21161 14.0001 5.30022 14.0001C3.10946 14.0001 1.3335 12.2241 1.3335 10.0334C1.3335 7.84261 3.10946 6.06665 5.30022 6.06665C6.21162 6.06665 6.96647 6.27715 7.56477 6.69816C7.67675 6.77696 7.70365 6.93161 7.62486 7.04359C7.56565 7.12774 7.46061 7.16656 7.36091 7.14117Z" /></g><defs><clipPath id="clip0_5_342"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Km;