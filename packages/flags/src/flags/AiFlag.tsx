import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const AiFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_106)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><path fill="white" fillRule="evenodd" d="M17.3334 10.0001C17.3334 8.00008 17.3334 6.66675 17.3334 6.66675L18.6667 7.33341L20 6.66675L21.3334 7.33341L22.6667 6.66675C22.6667 6.66675 22.6667 8.00008 22.6667 10.0001C22.6667 12.0001 20 13.3334 20 13.3334C20 13.3334 17.3334 12.0001 17.3334 10.0001Z" clipRule="evenodd" /><rect width={5.33333} height={1.33333} x={17.3334} y={12} fill="#0EA6FB" /><path fill="#FF9600" fillRule="evenodd" d="M20 9.33333C20.3682 9.33333 20.6667 9.03486 20.6667 8.66667C20.6667 8.29848 20.3682 8 20 8C19.6318 8 19.3333 8.29848 19.3333 8.66667C19.3333 9.03486 19.6318 9.33333 20 9.33333ZM18.6667 10.6667C19.0349 10.6667 19.3333 10.3682 19.3333 10C19.3333 9.63181 19.0349 9.33333 18.6667 9.33333C18.2985 9.33333 18 9.63181 18 10C18 10.3682 18.2985 10.6667 18.6667 10.6667ZM22 10C22 10.3682 21.7015 10.6667 21.3333 10.6667C20.9651 10.6667 20.6667 10.3682 20.6667 10C20.6667 9.63181 20.9651 9.33333 21.3333 9.33333C21.7015 9.33333 22 9.63181 22 10Z" clipRule="evenodd" /><path fill="#F63030" strokeWidth={0.666667} d="M0 -0.333333H-0.901086L-0.21693 0.253086L4.33333 4.15331V5.16179L-0.193746 8.39542L-0.333333 8.49513V8.66667V9.33333V9.93475L0.176666 9.616L5.42893 6.33333H6.55984L11.0821 9.56351C11.176 9.6306 11.2886 9.66667 11.404 9.66667C11.9182 9.66667 12.1548 9.02698 11.7644 8.69237L7.66667 5.18002V4.17154L12.0542 1.03762C12.2294 0.912475 12.3333 0.710428 12.3333 0.495127V0V-0.601416L11.8233 -0.282666L6.57107 3H5.44016L0.860413 -0.271244L0.773488 -0.333333H0.666667H0Z" /><path fill="white" fillRule="evenodd" d="M0 3.33333V6H4.66667V9.33333C4.66667 9.70152 4.96514 10 5.33333 10H6.66667C7.03486 10 7.33333 9.70152 7.33333 9.33333V6H12C12.3682 6 12.6667 5.70152 12.6667 5.33333V4C12.6667 3.63181 12.3682 3.33333 12 3.33333H7.33333V0H4.66667V3.33333H0Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4H5.33333V3.33333V0H6.66667V3.33333V4H12V5.33333H6.66667V6V9.33333H5.33333V6V5.33333H0V4Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_106"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default AiFlag;