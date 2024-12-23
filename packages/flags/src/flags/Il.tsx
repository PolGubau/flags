import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Il = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_757)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 4H28V0H0V4Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M14.0092 6.80193C14.0083 6.80052 14.0071 6.79933 14.0057 6.79845C14.0006 6.79529 13.994 6.79681 13.9908 6.80193L11.0035 11.6096C11.0025 11.6113 11.0019 11.6133 11.0019 11.6153C11.0019 11.6213 11.0068 11.6261 11.0127 11.6261H16.9873C16.9893 11.6261 16.9913 11.6256 16.993 11.6245C16.9981 11.6213 16.9997 11.6147 16.9965 11.6096L14.0092 6.80193ZM14.7272 6.35581L17.7145 11.1635C17.964 11.5651 17.8407 12.0929 17.4391 12.3425C17.3035 12.4268 17.147 12.4714 16.9873 12.4714H11.0127C10.5399 12.4714 10.1566 12.0881 10.1566 11.6153C10.1566 11.4556 10.2013 11.2991 10.2856 11.1635L13.2728 6.35581C13.5224 5.95421 14.0502 5.83093 14.4518 6.08048C14.5636 6.14989 14.6578 6.2441 14.7272 6.35581Z" /><path fill="#0EA6FB" d="M13.9909 13.198C13.9918 13.1995 13.993 13.2007 13.9944 13.2015C13.9995 13.2047 14.0062 13.2032 14.0093 13.198L16.9966 8.3904C16.9977 8.38869 16.9982 8.3867 16.9982 8.38468C16.9982 8.3787 16.9934 8.37385 16.9874 8.37385H11.0129C11.0108 8.37385 11.0088 8.37441 11.0071 8.37548C11.002 8.37864 11.0005 8.38532 11.0036 8.3904L13.9909 13.198ZM13.273 13.6442L10.2857 8.83652C10.0361 8.43491 10.1594 7.90705 10.561 7.65751C10.6967 7.57323 10.8532 7.52856 11.0129 7.52856H16.9874C17.4602 7.52856 17.8435 7.91186 17.8435 8.38468C17.8435 8.54437 17.7989 8.70088 17.7146 8.83652L14.7273 13.6442C14.4778 14.0458 13.9499 14.169 13.5483 13.9195C13.4366 13.8501 13.3424 13.7559 13.273 13.6442Z" /></g><defs><clipPath id="clip0_5_757"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Il;