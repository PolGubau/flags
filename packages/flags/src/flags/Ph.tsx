import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ph = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1328)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V9.33325H12.4444L13.3333 9.99992L0 19.9999Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M28 9.33333H12.4444L0 0H28V9.33333Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M2.66659 3.33341C2.66659 3.7016 2.36811 4.00008 1.99992 4.00008C1.63173 4.00008 1.33325 3.7016 1.33325 3.33341C1.33325 2.96522 1.63173 2.66675 1.99992 2.66675C2.36811 2.66675 2.66659 2.96522 2.66659 3.33341ZM10.6666 10.0001C10.6666 10.3683 10.3681 10.6667 9.99992 10.6667C9.63173 10.6667 9.33325 10.3683 9.33325 10.0001C9.33325 9.63189 9.63173 9.33341 9.99992 9.33341C10.3681 9.33341 10.6666 9.63189 10.6666 10.0001ZM1.99992 17.3334C2.36811 17.3334 2.66659 17.0349 2.66659 16.6667C2.66659 16.2986 2.36811 16.0001 1.99992 16.0001C1.63173 16.0001 1.33325 16.2986 1.33325 16.6667C1.33325 17.0349 1.63173 17.3334 1.99992 17.3334ZM5.99992 10.0001C5.99992 10.7365 5.40297 11.3334 4.66659 11.3334C3.93021 11.3334 3.33325 10.7365 3.33325 10.0001C3.33325 9.2637 3.93021 8.66675 4.66659 8.66675C5.40297 8.66675 5.99992 9.2637 5.99992 10.0001Z" clipRule="evenodd" /><path fill="#FFDA27" d="M4.56244 11.7866L3.64772 12.2675C3.36897 12.414 3.0242 12.3068 2.87765 12.0281C2.8193 11.9171 2.79916 11.7899 2.82036 11.6663L2.99506 10.6478C3.00796 10.5725 2.98301 10.4957 2.92834 10.4424L2.18831 9.7211C1.9628 9.50128 1.95819 9.14027 2.17801 8.91476C2.26554 8.82496 2.38024 8.76652 2.50434 8.74848L3.52703 8.59988C3.60259 8.5889 3.6679 8.54144 3.7017 8.47297L4.15906 7.54626C4.29843 7.26386 4.64035 7.14791 4.92275 7.28728C5.03521 7.34278 5.12623 7.4338 5.18173 7.54626L5.63909 8.47297C5.67288 8.54144 5.7382 8.5889 5.81376 8.59988L6.83645 8.74848C7.1481 8.79377 7.36403 9.08312 7.31874 9.39477C7.30071 9.51887 7.24227 9.63357 7.15247 9.7211L6.41245 10.4424C6.35777 10.4957 6.33282 10.5725 6.34573 10.6478L6.52042 11.6663C6.57366 11.9767 6.3652 12.2715 6.0548 12.3247C5.9312 12.3459 5.80406 12.3258 5.69306 12.2675L4.77834 11.7866C4.71076 11.751 4.63002 11.751 4.56244 11.7866Z" /></g><defs><clipPath id="clip0_5_1328"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ph;