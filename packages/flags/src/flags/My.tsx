import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const My = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1102)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M28 0H13.3333V1.33333H28V0ZM28 2.66667H13.3333V4H28V2.66667ZM13.3333 5.33333H28V6.66667H13.3333V5.33333ZM28 8H13.3333V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z" clipRule="evenodd" /><rect width={16} height={10.6667} fill="#0EA6FB" /><path fill="#FFDA27" d="M9.0983 2.32174C8.87253 2.26424 8.67359 2.23549 8.50147 2.23549C6.7906 2.23549 5.40366 3.62243 5.40366 5.3333C5.40366 7.04418 6.7906 8.43112 8.50147 8.43112C8.67358 8.43112 8.87251 8.40237 9.09827 8.34487C9.23644 8.30968 9.37698 8.39314 9.41217 8.53131C9.43861 8.63514 9.39818 8.74451 9.31056 8.80616C8.68757 9.24454 7.90157 9.46372 6.95256 9.46372C4.6714 9.46372 2.82214 7.61447 2.82214 5.3333C2.82214 3.05213 4.6714 1.20288 6.95256 1.20288C7.90158 1.20288 8.68758 1.42207 9.31058 1.86045C9.42718 1.9425 9.45519 2.10354 9.37314 2.22014C9.31148 2.30776 9.20212 2.34819 9.0983 2.32174Z" /><path fill="#FFDA27" d="M9.82169 6.15026L9.16497 5.94612C8.96484 5.88391 8.85304 5.67125 8.91525 5.47112C8.94002 5.39143 8.99037 5.32213 9.05851 5.27394L9.62 4.87686C9.66149 4.84752 9.68588 4.79965 9.68523 4.74884L9.67644 4.06118C9.67376 3.85163 9.84147 3.67958 10.051 3.6769C10.1345 3.67583 10.2159 3.7023 10.2828 3.75221L10.834 4.16352C10.8747 4.19391 10.9278 4.20232 10.9759 4.186L11.6272 3.96514C11.8257 3.89784 12.0411 4.00417 12.1084 4.20264C12.1352 4.28167 12.1352 4.36733 12.1084 4.44637L11.8875 5.09765C11.8712 5.14577 11.8796 5.19884 11.91 5.23956L12.3213 5.79072C12.4467 5.95868 12.4121 6.19645 12.2442 6.32179C12.1773 6.3717 12.0958 6.39817 12.0124 6.39711L11.3247 6.38832C11.2739 6.38767 11.226 6.41206 11.1967 6.45354L10.7996 7.01504C10.6786 7.18615 10.4418 7.22676 10.2707 7.10576C10.2025 7.05757 10.1522 6.98827 10.1274 6.90858L9.92328 6.25186C9.9082 6.20334 9.87021 6.16534 9.82169 6.15026Z" /></g><defs><clipPath id="clip0_5_1102"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default My;