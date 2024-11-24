import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const NiFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1278)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path d="M14 12.5C15.3807 12.5 16.5 11.3807 16.5 10C16.5 8.61929 15.3807 7.5 14 7.5C12.6193 7.5 11.5 8.61929 11.5 10C11.5 11.3807 12.6193 12.5 14 12.5Z" /><path fill="#0EA6FB" fillRule="evenodd" d="M13.7315 8.84867C13.8421 8.62755 14.1576 8.62755 14.2682 8.84867L15.1161 10.5445C15.2158 10.744 15.0708 10.9787 14.8478 10.9787H13.1519C12.9289 10.9787 12.7839 10.744 12.8836 10.5445L13.7315 8.84867Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1278"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default NiFlag;