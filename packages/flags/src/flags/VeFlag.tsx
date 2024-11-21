import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const VeFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2091_2068)"><rect width={55.996} height={43.9981} x={3.44922} y={3.09375} fill="#0EA6FB" /><path strokeDasharray="0.95 3.33" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.85065} d="M41.7383 28.7305V28.7305C38.1774 19.2173 24.7213 19.2173 21.1604 28.7305V28.7305" /><path fill="#FFDA27" d="M13.5676 4.09766H49.6678C53.1821 4.09766 54.4565 4.45878 55.7413 5.1369C57.0261 5.81502 58.0344 6.81013 58.7215 8.0781C59.4086 9.34607 59.7745 10.6038 59.7745 14.0721V16.8009H3.46094V14.0721C3.46094 10.6038 3.82685 9.34607 4.51396 8.0781C5.20107 6.81013 6.20938 5.81502 7.49416 5.1369C8.77895 4.45878 10.0533 4.09766 13.5676 4.09766Z" /><path fill="#F63030" d="M59.5123 33.4648V36.1684C59.5123 39.6047 59.1498 40.8508 58.469 42.1071C57.7882 43.3634 56.7893 44.3493 55.5163 45.0211C54.2434 45.693 52.9808 46.0508 49.4989 46.0508H13.7321C10.2503 46.0508 8.98765 45.693 7.71473 45.0211C6.44181 44.3493 5.44281 43.3634 4.76205 42.1071C4.08129 40.8508 3.71875 39.6047 3.71875 36.1684V33.4648H59.5123Z" /></g><rect width={56} height={44} x={3.44922} y={3.15625} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2091_2068"><rect width={56} height={44} x={3.44922} y={3.15625} fill="white" rx={9} /></clipPath></defs></svg>;
export default VeFlag;