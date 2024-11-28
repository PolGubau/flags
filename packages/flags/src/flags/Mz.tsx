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
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1197)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#FFDA27" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M-3.36511 15.7884H31.3651V4.21167H-3.36511V15.7884Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="#FFDA27" d="M6.43064 10.5146L6.65747 11.472C6.72659 11.7637 6.54614 12.0562 6.25441 12.1253C6.13824 12.1529 6.01624 12.1413 5.90729 12.0925L5.00947 11.6902C4.94314 11.6605 4.86643 11.6653 4.80434 11.7031L3.96398 12.2147C3.70789 12.3706 3.37392 12.2894 3.21803 12.0333C3.15595 11.9313 3.12923 11.8117 3.14198 11.693L3.24712 10.7148C3.25489 10.6425 3.22659 10.5711 3.17146 10.5237L2.42526 9.88255C2.19787 9.68717 2.17192 9.34444 2.3673 9.11704C2.4451 9.0265 2.55059 8.96412 2.66742 8.93957L3.63021 8.73729C3.70135 8.72234 3.76057 8.67335 3.78859 8.60628L4.16777 7.69847C4.28333 7.42183 4.60126 7.29124 4.8779 7.40679C4.98806 7.45281 5.07998 7.53385 5.13943 7.63738L5.62933 8.49054C5.66553 8.55358 5.73043 8.59476 5.80287 8.60068L6.78342 8.68078C7.08223 8.70519 7.30468 8.96721 7.28027 9.26602C7.27055 9.38501 7.22187 9.49747 7.14178 9.586L6.48176 10.3156C6.433 10.3695 6.41388 10.4439 6.43064 10.5146Z" /></g><defs><clipPath id="clip0_5_1197"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mz;