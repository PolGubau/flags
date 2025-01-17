import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gt = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_618)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><rect width={9.33333} height={20} x={18.6667} fill="#0EA6FB" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#50B500" d="M11.9999 9.33325C11.9999 8.96506 11.7014 8.66659 11.3333 8.66659C10.9651 8.66659 10.6666 8.96506 10.6666 9.33325H11.9999ZM12.3289 12.218C12.6474 12.4028 13.0554 12.2944 13.2402 11.976C13.4249 11.6575 13.3166 11.2496 12.9981 11.0648L12.3289 12.218ZM15.0756 11.0198C14.7654 11.2181 14.6748 11.6304 14.8731 11.9406C15.0715 12.2508 15.4838 12.3414 15.794 12.143L15.0756 11.0198ZM17.3333 9.33325C17.3333 8.96506 17.0348 8.66659 16.6666 8.66659C16.2984 8.66659 15.9999 8.96506 15.9999 9.33325H17.3333ZM10.6666 9.33325C10.6666 10.5663 11.3365 11.6421 12.3289 12.218L12.9981 11.0648C12.3998 10.7176 11.9999 10.0718 11.9999 9.33325H10.6666ZM15.794 12.143C16.7182 11.5519 17.3333 10.5146 17.3333 9.33325H15.9999C15.9999 10.0409 15.6329 10.6633 15.0756 11.0198L15.794 12.143Z" /><path fill="#FFDA27" fillRule="evenodd" d="M14.0001 10.6667C14.7365 10.6667 15.3334 10.0697 15.3334 9.33333C15.3334 8.59695 14.7365 8 14.0001 8C13.2637 8 12.6667 8.59695 12.6667 9.33333C12.6667 10.0697 13.2637 10.6667 14.0001 10.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_618"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gt;