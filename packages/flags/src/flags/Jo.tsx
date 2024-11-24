import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Jo = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_838)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="white" d="M4.51429 11.5745L3.79032 11.9686C3.54817 12.1005 3.24559 12.0099 3.1145 11.7663C3.06213 11.669 3.04322 11.5569 3.06074 11.4477L3.19446 10.6136C3.21309 10.4974 3.17405 10.3794 3.08993 10.2975L2.49112 9.71507C2.29154 9.52093 2.28618 9.20081 2.47916 9.00006C2.55532 8.92083 2.65513 8.8688 2.7634 8.8519L3.5763 8.725C3.69295 8.70679 3.79316 8.63187 3.84413 8.52477L4.20237 7.77199C4.32115 7.52238 4.61861 7.41692 4.86675 7.53643C4.96665 7.58455 5.04776 7.66477 5.09727 7.76443L5.46817 8.51106C5.52094 8.61729 5.6224 8.6905 5.73934 8.70674L6.55426 8.8199C6.82928 8.85808 7.02147 9.11331 6.98354 9.38995C6.96856 9.49913 6.91854 9.6004 6.84107 9.67834L6.25219 10.2708C6.16946 10.3541 6.13242 10.4727 6.15301 10.5886L6.3008 11.4203C6.34925 11.693 6.16879 11.9535 5.89772 12.0022C5.78942 12.0217 5.67775 12.0046 5.58012 11.9535L4.8496 11.5716C4.74427 11.5166 4.61867 11.5176 4.51429 11.5745Z" /></g><defs><clipPath id="clip0_5_838"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Jo;