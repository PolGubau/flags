import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SzFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1423)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 4H28V0H0V4Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 16H28V4H0V16Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 14.6666H28V5.33325H0V14.6666Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M14 13.3334C17.3137 13.3334 20 10.0001 20 10.0001C20 10.0001 17.3137 6.66675 14 6.66675C10.6863 6.66675 8 10.0001 8 10.0001C8 10.0001 10.6863 13.3334 14 13.3334Z" clipRule="evenodd" /><mask id="mask0_5_1423" width={12} height={8} x={8} y={6} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><path fill="white" fillRule="evenodd" d="M14 13.3334C17.3137 13.3334 20 10.0001 20 10.0001C20 10.0001 17.3137 6.66675 14 6.66675C10.6863 6.66675 8 10.0001 8 10.0001C8 10.0001 10.6863 13.3334 14 13.3334Z" clipRule="evenodd" /></mask><g mask="url(#mask0_5_1423)"><path fill="#4C4C4C" fillRule="evenodd" d="M14.6666 6.66675H7.99996V13.3334H13.3333L14.6666 6.66675Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M15.3333 10.6668C15.7015 10.6668 16 10.3684 16 10.0002C16 9.63197 15.7015 9.3335 15.3333 9.3335C14.9651 9.3335 14.6666 9.63197 14.6666 10.0002C14.6666 10.3684 14.9651 10.6668 15.3333 10.6668Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M12.6667 10.6668C13.0349 10.6668 13.3333 10.3684 13.3333 10.0002C13.3333 9.63197 13.0349 9.3335 12.6667 9.3335C12.2985 9.3335 12 9.63197 12 10.0002C12 10.3684 12.2985 10.6668 12.6667 10.6668Z" clipRule="evenodd" /></g></g><defs><clipPath id="clip0_5_1423"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default SzFlag;