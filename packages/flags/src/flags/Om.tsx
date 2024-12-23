import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Om = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1299)"><path fill="white" stroke="white" strokeWidth={0.5} d="M0.25 2C0.25 1.0335 1.0335 0.25 2 0.25H27.75V18C27.75 18.9665 26.9665 19.75 26 19.75H2C1.0335 19.75 0.25 18.9665 0.25 18V2Z" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20H9.33333V13.3333H28V6.66667H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="white" d="M4.57068 5.78309L3.75763 6.21054C3.50986 6.3408 3.20341 6.24554 3.07316 5.99777C3.02129 5.89911 3.00339 5.7861 3.02223 5.67624L3.17751 4.77089C3.18898 4.704 3.16681 4.63575 3.11821 4.58838L2.46043 3.94721C2.25999 3.75182 2.25588 3.43093 2.45127 3.23048C2.52908 3.15066 2.63102 3.09872 2.74133 3.08269L3.65035 2.9506C3.71751 2.94084 3.77557 2.89866 3.80561 2.8378L4.21213 2.01409C4.33602 1.76307 4.63993 1.66001 4.89095 1.7839C4.9909 1.83323 5.07181 1.91413 5.12114 2.01409L5.52767 2.8378C5.5577 2.89866 5.61576 2.94084 5.68292 2.9506L6.59194 3.08269C6.86895 3.12294 7.06088 3.38013 7.02063 3.65715C7.0046 3.76745 6.95266 3.8694 6.87284 3.94721L6.21507 4.58838C6.16647 4.63575 6.14429 4.704 6.15576 4.77089L6.31104 5.67624C6.35836 5.95213 6.17307 6.21414 5.89718 6.26146C5.78731 6.28031 5.6743 6.26241 5.57564 6.21054L4.76259 5.78309C4.70252 5.75151 4.63075 5.75151 4.57068 5.78309Z" /></g><defs><clipPath id="clip0_5_1299"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Om;