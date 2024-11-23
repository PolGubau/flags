import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SvFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_474)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M12.4 7.86646C11.7523 8.35297 11.3334 9.12753 11.3334 9.99994C11.3334 11.4727 12.5273 12.6666 14 12.6666C15.4728 12.6666 16.6667 11.4727 16.6667 9.99994C16.6667 9.12753 16.2478 8.35297 15.6001 7.86646L14.6667 10.6666H13.3334L12.4 7.86646Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M14 7.33325L14.6667 10.6666H13.3334L14 7.33325Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_474"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default SvFlag;