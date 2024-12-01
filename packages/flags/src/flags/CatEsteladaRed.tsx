import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CatEsteladaRed = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1206)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M0 8.86663H28V6.66663H0V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V11.1333H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 17.8001H28V15.6001H0V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4.39995H28V2.19995H0V4.39995Z" clipRule="evenodd" /><path fill="#FFDA27" d="M10 10L0 0V20L10 10Z" /><path fill="#F63030" d="M3.88148 11.5251L3.26008 11.8634C3.05223 11.9766 2.79252 11.8988 2.68 11.6897C2.63504 11.6062 2.61882 11.51 2.63385 11.4162L2.74863 10.7003C2.76462 10.6006 2.73112 10.4993 2.65891 10.429L2.14494 9.92909C1.97363 9.76245 1.96903 9.48768 2.13467 9.31537C2.20004 9.24737 2.28571 9.20271 2.37864 9.1882L3.07637 9.07928C3.1765 9.06365 3.26251 8.99935 3.30626 8.90742L3.61375 8.26128C3.71571 8.04704 3.97102 7.95652 4.18401 8.0591C4.26976 8.10039 4.33938 8.16925 4.38187 8.25479L4.70022 8.89565C4.74552 8.98683 4.83261 9.04967 4.93298 9.06361L5.63245 9.16073C5.86851 9.19351 6.03348 9.41258 6.00091 9.65003C5.98806 9.74374 5.94512 9.83066 5.87863 9.89756L5.37318 10.4061C5.30217 10.4776 5.27038 10.5794 5.28805 10.6789L5.4149 11.3927C5.45648 11.6268 5.30159 11.8504 5.06893 11.8922C4.97596 11.9089 4.88012 11.8942 4.79632 11.8504L4.16929 11.5226C4.07888 11.4754 3.97107 11.4763 3.88148 11.5251Z" /></g><defs><clipPath id="clip0_27_1206"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default CatEsteladaRed;