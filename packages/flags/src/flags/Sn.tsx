import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Sn = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1505)"><rect width={28} height={20} fill="white" rx={2} /><rect width={14.6667} height={20} x={13.3333} fill="#F63030" /><path fill="#50B500" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M9.33325 20H18.6666V0H9.33325V20Z" clipRule="evenodd" /><path fill="#50B500" d="M13.9093 12.0976L12.9527 12.6006C12.6612 12.7538 12.3006 12.6417 12.1473 12.3502C12.0863 12.2341 12.0653 12.1012 12.0874 11.9719L12.2701 10.9067C12.2836 10.828 12.2575 10.7477 12.2003 10.692L11.4264 9.93758C11.1906 9.70769 11.1858 9.33014 11.4156 9.0943C11.5072 9.00038 11.6271 8.93927 11.7569 8.92041L12.8265 8.765C12.9055 8.75351 12.9738 8.70388 13.0091 8.63228L13.4874 7.66312C13.6332 7.36778 13.9908 7.24652 14.2861 7.39228C14.4037 7.45032 14.4989 7.54551 14.5569 7.66312L15.0353 8.63228C15.0706 8.70388 15.1389 8.75351 15.2179 8.765L16.2875 8.92041C16.6134 8.96777 16.8392 9.27038 16.7918 9.5963C16.773 9.72609 16.7119 9.84603 16.618 9.93758L15.844 10.692C15.7869 10.7477 15.7608 10.828 15.7743 10.9067L15.957 11.9719C16.0126 12.2965 15.7946 12.6048 15.47 12.6605C15.3408 12.6826 15.2078 12.6616 15.0917 12.6006L14.1351 12.0976C14.0644 12.0605 13.98 12.0605 13.9093 12.0976Z" /></g><defs><clipPath id="clip0_5_1505"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Sn;