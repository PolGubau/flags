import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const ArFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_59)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 5.90381H28V0H0V5.90381Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V13.9695H0V19.9999Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" strokeWidth={1.16327} d="M13.9999 12.3264C15.2848 12.3264 16.3264 11.2848 16.3264 9.99988C16.3264 8.71497 15.2848 7.67334 13.9999 7.67334C12.715 7.67334 11.6733 8.71497 11.6733 9.99988C11.6733 11.2848 12.715 12.3264 13.9999 12.3264Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_59"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default ArFlag;