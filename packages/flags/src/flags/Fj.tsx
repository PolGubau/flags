import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Fj = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_508)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><rect width={12} height={9.33333} fill="#0EA6FB" /><path fill="white" fillRule="evenodd" d="M17.3333 9.99992C17.3333 7.99992 17.3333 5.33325 17.3333 5.33325H23.9999C23.9999 5.33325 23.9999 7.99992 23.9999 9.99992C23.9999 13.3333 20.6666 14.6666 20.6666 14.6666C20.6666 14.6666 17.3333 13.3333 17.3333 9.99992Z" clipRule="evenodd" /><mask id="mask0_5_508" width={7} height={10} x={17} y={5} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><path fill="white" fillRule="evenodd" d="M17.3333 9.99992C17.3333 7.99992 17.3333 5.33325 17.3333 5.33325H23.9999C23.9999 5.33325 23.9999 7.99992 23.9999 9.99992C23.9999 13.3333 20.6666 14.6666 20.6666 14.6666C20.6666 14.6666 17.3333 13.3333 17.3333 9.99992Z" clipRule="evenodd" /></mask><g mask="url(#mask0_5_508)"><path fill="#50B500" fillRule="evenodd" d="M19.3333 7.99992C19.3333 8.36811 19.0349 8.66659 18.6667 8.66659C18.2985 8.66659 18 8.36811 18 7.99992C18 7.63173 18.2985 7.33325 18.6667 7.33325C19.0349 7.33325 19.3333 7.63173 19.3333 7.99992ZM23.3333 7.99992C23.3333 8.36811 23.0349 8.66659 22.6667 8.66659C22.2985 8.66659 22 8.36811 22 7.99992C22 7.63173 22.2985 7.33325 22.6667 7.33325C23.0349 7.33325 23.3333 7.63173 23.3333 7.99992Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M17.3333 5.33325H23.9999V6.66659H21.3333V9.33325H23.9999V10.6666H21.3333V14.6666H19.9999V10.6666H17.3333V9.33325H19.9999V6.66659H17.3333V5.33325Z" clipRule="evenodd" /></g><path fill="#F63030" stroke="white" strokeWidth={0.666667} d="M0 -0.333333H-0.901086L-0.21693 0.253086L4.33333 4.15331V5.16179L-0.193746 8.39542L-0.333333 8.49513V8.66667V9.33333V9.93475L0.176666 9.616L5.42893 6.33333H6.55984L11.0821 9.56351C11.176 9.6306 11.2886 9.66667 11.404 9.66667C11.9182 9.66667 12.1548 9.02698 11.7644 8.69237L7.66667 5.18002V4.17154L12.0542 1.03762C12.2294 0.912475 12.3333 0.710428 12.3333 0.495127V0V-0.601416L11.8233 -0.282666L6.57107 3H5.44016L0.860413 -0.271244L0.773488 -0.333333H0.666667H0Z" /><path fill="white" fillRule="evenodd" d="M0 3.33333V6H4.66667V9.33333C4.66667 9.70152 4.96514 10 5.33333 10H6.66667C7.03486 10 7.33333 9.70152 7.33333 9.33333V6H12C12.3682 6 12.6667 5.70152 12.6667 5.33333V4C12.6667 3.63181 12.3682 3.33333 12 3.33333H7.33333V0H4.66667V3.33333H0Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4H5.33333V3.33333V0H6.66667V3.33333V4H12V5.33333H6.66667V6V9.33333H5.33333V6V5.33333H0V4Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_508"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Fj;