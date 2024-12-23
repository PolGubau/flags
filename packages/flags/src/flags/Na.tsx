import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Na = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1259)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3333L28 0H0V13.3333Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 20.0001H28V6.66675L0 20.0001Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M3.08245 22.6666L30.1708 5.73998L24.9177 -2.66675L-2.17065 14.2599L3.08245 22.6666Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M-0.629314 23.0718L32.1619 2.58163L28.6291 -3.07202L-4.16211 17.4182L-0.629314 23.0718Z" clipRule="evenodd" /><path fill="#FFDA27" d="M4.57068 6.1808L3.75763 6.60824C3.50986 6.7385 3.20341 6.64324 3.07316 6.39548C3.02129 6.29681 3.00339 6.1838 3.02223 6.07394L3.17751 5.16859C3.18898 5.1017 3.16681 5.03345 3.11821 4.98608L2.46043 4.34491C2.25999 4.14952 2.25588 3.82863 2.45127 3.62819C2.52908 3.54837 2.63102 3.49642 2.74133 3.48039L3.65035 3.34831C3.71751 3.33855 3.77557 3.29636 3.80561 3.23551L4.21213 2.41179C4.33602 2.16078 4.63993 2.05772 4.89095 2.1816C4.9909 2.23093 5.07181 2.31184 5.12114 2.41179L5.52767 3.23551C5.5577 3.29636 5.61576 3.33855 5.68292 3.34831L6.59194 3.48039C6.86895 3.52065 7.06088 3.77784 7.02063 4.05485C7.0046 4.16516 6.95266 4.26711 6.87284 4.34491L6.21507 4.98608C6.16647 5.03345 6.14429 5.1017 6.15576 5.16859L6.31104 6.07394C6.35836 6.34983 6.17307 6.61185 5.89718 6.65917C5.78731 6.67801 5.6743 6.66011 5.57564 6.60824L4.76259 6.1808C4.70252 6.14921 4.63075 6.14921 4.57068 6.1808Z" /></g><defs><clipPath id="clip0_5_1259"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Na;