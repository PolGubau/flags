import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ni = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1278)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path stroke="#FFDA27" d="M14 12.5C15.3807 12.5 16.5 11.3807 16.5 10C16.5 8.61929 15.3807 7.5 14 7.5C12.6193 7.5 11.5 8.61929 11.5 10C11.5 11.3807 12.6193 12.5 14 12.5Z" /><path fill="#0EA6FB" fillRule="evenodd" d="M13.7316 8.84867C13.8422 8.62755 14.1577 8.62755 14.2683 8.84867L15.1162 10.5445C15.2159 10.744 15.0709 10.9787 14.8479 10.9787H13.152C12.929 10.9787 12.784 10.744 12.8837 10.5445L13.7316 8.84867Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1278"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ni;