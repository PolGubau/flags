import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const GwFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_567)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V9.33325H0V19.9999Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 9.33333H28V0H0V9.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20H10.6667V0H0V20Z" clipRule="evenodd" /><path fill="#4C4C4C" d="M5.18103 11.5029L4.45707 11.8971C4.21491 12.0289 3.91234 11.9384 3.78125 11.6948C3.72887 11.5974 3.70997 11.4854 3.72749 11.3761L3.86121 10.5421C3.87984 10.4259 3.8408 10.3078 3.75668 10.226L3.15787 9.64353C2.95829 9.44939 2.95293 9.12927 3.14591 8.92852C3.22207 8.8493 3.32188 8.79727 3.43015 8.78037L4.24305 8.65347C4.3597 8.63526 4.45991 8.56034 4.51087 8.45324L4.86912 7.70045C4.9879 7.45085 5.28535 7.34539 5.5335 7.4649C5.6334 7.51301 5.71451 7.59324 5.76402 7.6929L6.13491 8.43952C6.18768 8.54575 6.28915 8.61897 6.40609 8.63521L7.22101 8.74836C7.49603 8.78655 7.68822 9.04177 7.65029 9.31842C7.63531 9.4276 7.58529 9.52887 7.50782 9.60681L6.91894 10.1993C6.83621 10.2825 6.79917 10.4012 6.81976 10.5171L6.96754 11.3488C7.016 11.6214 6.83553 11.882 6.56447 11.9307C6.45617 11.9502 6.3445 11.933 6.24687 11.882L5.51635 11.5001C5.41102 11.445 5.28541 11.4461 5.18103 11.5029Z" /></g><defs><clipPath id="clip0_5_567"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default GwFlag;