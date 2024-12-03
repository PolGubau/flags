import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsDosrius = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_31_269)"><rect width={28} height={20} x={28} y={20} fill="white" transform="rotate(180 28 20)" /><path fill="#0EA6FB" d="M9 9.5L11.375 8.5L13.75 9.5L16.125 8.5L18.5 9.5L20.875 8.5L23.25 9.5L25.625 8.5L28 9.5V11.5L25.625 10.5L23.25 11.5L20.875 10.5L18.5 11.5L16.125 10.5L13.75 11.5L11.375 10.5L9 11.5V9.5Z" /><path fill="#0EA6FB" d="M-3.02083 -4.84929L-0.634342 -3.87702L0.33793 -1.49053L2.72442 -0.518261L3.69669 1.86822L6.08317 2.8405L7.05544 5.22698L9.44193 6.19925L10.6247 9.17017L8.99999 9.99995L8.02772 7.61347L5.64123 6.6412L4.66896 4.25471L2.28247 3.28244L1.3102 0.895953L-1.07628 -0.076319L-2.04856 -2.4628L-4.43504 -3.43508L-3.02083 -4.84929Z" /><path fill="#0EA6FB" d="M-2.30281 23.3493L0.0836755 22.377L1.05595 19.9905L3.44243 19.0183L4.4147 16.6318L6.80119 15.6595L7.77346 13.273L10.1599 12.3007L11.1322 9.91426L9.71801 8.50005L8.74573 10.8865L6.35925 11.8588L5.38698 14.2453L3.00049 15.2176L2.02822 17.604L-0.358266 18.5763L-1.33054 20.9628L-3.71702 21.9351L-2.30281 23.3493Z" /></g><defs><clipPath id="clip0_31_269"><rect width={28} height={20} fill="white" transform="matrix(-1 0 0 -1 28 20)" /></clipPath></defs></svg>;
export default EsDosrius;