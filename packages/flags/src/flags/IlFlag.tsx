import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IlFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_757)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 4H28V0H0V4Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M14.0091 6.80193C14.0082 6.80052 14.007 6.79933 14.0056 6.79845C14.0005 6.79529 13.9938 6.79681 13.9907 6.80193L11.0034 11.6096C11.0023 11.6113 11.0018 11.6133 11.0018 11.6153C11.0018 11.6213 11.0066 11.6261 11.0126 11.6261H16.9872C16.9892 11.6261 16.9912 11.6256 16.9929 11.6245C16.998 11.6213 16.9995 11.6147 16.9964 11.6096L14.0091 6.80193ZM14.7271 6.35581L17.7143 11.1635C17.9639 11.5651 17.8406 12.0929 17.439 12.3425C17.3034 12.4268 17.1469 12.4714 16.9872 12.4714H11.0126C10.5398 12.4714 10.1565 12.0881 10.1565 11.6153C10.1565 11.4556 10.2012 11.2991 10.2854 11.1635L13.2727 6.35581C13.5223 5.95421 14.0501 5.83093 14.4517 6.08048C14.5634 6.14989 14.6577 6.2441 14.7271 6.35581Z" /><path fill="#0EA6FB" d="M13.9908 13.198C13.9917 13.1995 13.9929 13.2007 13.9943 13.2015C13.9994 13.2047 14.0061 13.2032 14.0092 13.198L16.9965 8.3904C16.9976 8.38869 16.9981 8.3867 16.9981 8.38468C16.9981 8.3787 16.9933 8.37385 16.9873 8.37385H11.0127C11.0107 8.37385 11.0087 8.37441 11.007 8.37548C11.0019 8.37864 11.0004 8.38532 11.0035 8.3904L13.9908 13.198ZM13.2728 13.6442L10.2856 8.83652C10.036 8.43491 10.1593 7.90705 10.5609 7.65751C10.6965 7.57323 10.853 7.52856 11.0127 7.52856H16.9873C17.4601 7.52856 17.8434 7.91186 17.8434 8.38468C17.8434 8.54437 17.7987 8.70088 17.7145 8.83652L14.7272 13.6442C14.4776 14.0458 13.9498 14.169 13.5482 13.9195C13.4365 13.8501 13.3422 13.7559 13.2728 13.6442Z" /></g><defs><clipPath id="clip0_5_757"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default IlFlag;