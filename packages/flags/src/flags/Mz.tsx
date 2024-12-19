import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mz = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1197)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#FFDA27" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M-3.36523 15.7884H31.365V4.21167H-3.36523V15.7884Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="#FFDA27" d="M6.43052 10.5146L6.65735 11.472C6.72647 11.7637 6.54601 12.0562 6.25429 12.1253C6.13812 12.1529 6.01612 12.1413 5.90717 12.0925L5.00935 11.6902C4.94302 11.6605 4.86631 11.6653 4.80422 11.7031L3.96386 12.2147C3.70777 12.3706 3.3738 12.2894 3.21791 12.0333C3.15583 11.9313 3.1291 11.8117 3.14186 11.693L3.247 10.7148C3.25476 10.6425 3.22647 10.5711 3.17134 10.5237L2.42514 9.88255C2.19775 9.68717 2.1718 9.34444 2.36718 9.11704C2.44498 9.0265 2.55046 8.96412 2.6673 8.93957L3.63009 8.73729C3.70123 8.72234 3.76045 8.67335 3.78847 8.60628L4.16765 7.69847C4.2832 7.42183 4.60114 7.29124 4.87778 7.40679C4.98794 7.45281 5.07986 7.53385 5.13931 7.63738L5.62921 8.49054C5.66541 8.55358 5.7303 8.59476 5.80275 8.60068L6.7833 8.68078C7.08211 8.70519 7.30455 8.96721 7.28014 9.26602C7.27042 9.38501 7.22175 9.49747 7.14166 9.586L6.48164 10.3156C6.43288 10.3695 6.41376 10.4439 6.43052 10.5146Z" /></g><defs><clipPath id="clip0_5_1197"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mz;