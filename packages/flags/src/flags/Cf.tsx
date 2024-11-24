import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Cf = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_275)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 14.6666H28V9.33325H0V14.6666Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M10.6666 20H17.3333V0H10.6666V20Z" clipRule="evenodd" /><path fill="#FFDA27" d="M4.70139 3.80955L4.1864 4.08994C4.01414 4.18373 3.7989 4.11928 3.70565 3.946C3.66839 3.87676 3.65494 3.79707 3.66741 3.71934L3.76253 3.12603C3.77578 3.04336 3.74801 2.9594 3.68817 2.90119L3.26221 2.48685C3.12023 2.34875 3.11642 2.12103 3.2537 1.97823C3.30787 1.92187 3.37888 1.88486 3.4559 1.87284L4.03415 1.78256C4.11713 1.76961 4.18842 1.71632 4.22467 1.64013L4.47951 1.10463C4.56401 0.927075 4.7756 0.852055 4.95212 0.93707C5.02318 0.971295 5.08088 1.02836 5.1161 1.09926L5.37994 1.63037C5.41748 1.70594 5.48965 1.75802 5.57284 1.76957L6.15254 1.85007C6.34818 1.87723 6.48489 2.05879 6.45791 2.25558C6.44726 2.33325 6.41167 2.40528 6.35657 2.46073L5.93766 2.8822C5.87881 2.94141 5.85246 3.02583 5.86711 3.10826L5.97224 3.69988C6.0067 3.89385 5.87833 4.07918 5.68551 4.11383C5.60847 4.12768 5.52903 4.1155 5.45958 4.07919L4.93992 3.80753C4.865 3.76836 4.77565 3.76912 4.70139 3.80955Z" /></g><defs><clipPath id="clip0_5_275"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Cf;