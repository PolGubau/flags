import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Sb = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1482)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#50B500" stroke="#FFDA27" strokeWidth={3} d="M27.1281 0.477154L29.5 -1.21703V1.69775V20V21.5H28H2.37686H-2.30384L1.505 18.7794L27.1281 0.477154Z" /><path fill="white" d="M9.55941 8.02566L9.02081 8.30882C8.85169 8.39774 8.64251 8.33271 8.5536 8.16359C8.51819 8.09625 8.50597 8.01911 8.51883 7.94412L8.6217 7.34437C8.63149 7.2873 8.61256 7.22907 8.5711 7.18865L8.13536 6.76391C7.99854 6.63054 7.99574 6.41151 8.12911 6.27468C8.18222 6.2202 8.2518 6.18474 8.3271 6.1738L8.92927 6.0863C8.98658 6.07797 9.03612 6.04198 9.06174 5.99006L9.33104 5.44439C9.4156 5.27305 9.62305 5.20271 9.79439 5.28727C9.86262 5.32094 9.91784 5.37616 9.95152 5.44439L10.2208 5.99006C10.2464 6.04198 10.296 6.07797 10.3533 6.0863L10.9555 6.1738C11.1445 6.20128 11.2756 6.37683 11.2481 6.56592C11.2371 6.64121 11.2017 6.7108 11.1472 6.76391L10.7115 7.18865C10.67 7.22907 10.6511 7.2873 10.6609 7.34437L10.7637 7.94412C10.796 8.13244 10.6695 8.31128 10.4812 8.34358C10.4062 8.35645 10.3291 8.34423 10.2618 8.30882L9.72315 8.02566C9.6719 7.99872 9.61066 7.99872 9.55941 8.02566Z" /><path fill="white" d="M9.55941 4.10769L9.02081 4.39085C8.85169 4.47977 8.64251 4.41474 8.5536 4.24562C8.51819 4.17828 8.50597 4.10114 8.51883 4.02615L8.6217 3.42641C8.63149 3.36933 8.61256 3.3111 8.5711 3.27068L8.13536 2.84594C7.99854 2.71257 7.99574 2.49354 8.12911 2.35671C8.18222 2.30223 8.2518 2.26677 8.3271 2.25583L8.92927 2.16833C8.98658 2.16001 9.03612 2.12402 9.06174 2.07209L9.33104 1.52642C9.4156 1.35509 9.62305 1.28474 9.79439 1.3693C9.86262 1.40297 9.91784 1.4582 9.95152 1.52642L10.2208 2.07209C10.2464 2.12402 10.296 2.16001 10.3533 2.16833L10.9555 2.25583C11.1445 2.28331 11.2756 2.45887 11.2481 2.64795C11.2371 2.72324 11.2017 2.79283 11.1472 2.84594L10.7115 3.27068C10.67 3.3111 10.6511 3.36933 10.6609 3.42641L10.7637 4.02615C10.796 4.21447 10.6695 4.39332 10.4812 4.42561C10.4062 4.43848 10.3291 4.42626 10.2618 4.39085L9.72315 4.10769C9.6719 4.08075 9.61066 4.08075 9.55941 4.10769Z" /><path fill="white" d="M2.94344 4.10769L2.40484 4.39085C2.23572 4.47977 2.02654 4.41474 1.93763 4.24562C1.90222 4.17828 1.89001 4.10114 1.90287 4.02615L2.00573 3.42641C2.01552 3.36933 1.9966 3.3111 1.95513 3.27068L1.51939 2.84594C1.38257 2.71257 1.37977 2.49354 1.51314 2.35671C1.56625 2.30223 1.63584 2.26677 1.71113 2.25583L2.31331 2.16833C2.37061 2.16001 2.42015 2.12402 2.44578 2.07209L2.71508 1.52642C2.79964 1.35509 3.00709 1.28474 3.17842 1.3693C3.24665 1.40297 3.30188 1.4582 3.33555 1.52642L3.60485 2.07209C3.63048 2.12402 3.68002 2.16001 3.73732 2.16833L4.3395 2.25583C4.52858 2.28331 4.65959 2.45887 4.63211 2.64795C4.62117 2.72324 4.58572 2.79283 4.53123 2.84594L4.09549 3.27068C4.05403 3.3111 4.03511 3.36933 4.0449 3.42641L4.14776 4.02615C4.18006 4.21447 4.05358 4.39332 3.86526 4.42561C3.79027 4.43848 3.71313 4.42626 3.64579 4.39085L3.10718 4.10769C3.05593 4.08075 2.9947 4.08075 2.94344 4.10769Z" /><path fill="white" d="M2.94344 8.02566L2.40484 8.30882C2.23572 8.39774 2.02654 8.33271 1.93763 8.16359C1.90222 8.09625 1.89001 8.01911 1.90287 7.94412L2.00573 7.34437C2.01552 7.2873 1.9966 7.22907 1.95513 7.18865L1.51939 6.76391C1.38257 6.63054 1.37977 6.41151 1.51314 6.27468C1.56625 6.2202 1.63584 6.18474 1.71113 6.1738L2.31331 6.0863C2.37061 6.07797 2.42015 6.04198 2.44578 5.99006L2.71508 5.44439C2.79964 5.27305 3.00709 5.20271 3.17842 5.28727C3.24665 5.32094 3.30188 5.37616 3.33555 5.44439L3.60485 5.99006C3.63048 6.04198 3.68002 6.07797 3.73732 6.0863L4.3395 6.1738C4.52858 6.20128 4.65959 6.37683 4.63211 6.56592C4.62117 6.64121 4.58572 6.7108 4.53123 6.76391L4.09549 7.18865C4.05403 7.22907 4.03511 7.2873 4.0449 7.34437L4.14776 7.94412C4.18006 8.13244 4.05358 8.31128 3.86526 8.34358C3.79027 8.35645 3.71313 8.34423 3.64579 8.30882L3.10718 8.02566C3.05593 7.99872 2.9947 7.99872 2.94344 8.02566Z" /><path fill="white" d="M6.25143 6.06668L5.71282 6.34984C5.5437 6.43875 5.33452 6.37373 5.24561 6.20461C5.21021 6.13726 5.19799 6.06012 5.21085 5.98513L5.31371 5.38539C5.3235 5.32832 5.30458 5.27008 5.26312 5.22966L4.82738 4.80492C4.69056 4.67155 4.68775 4.45252 4.82112 4.3157C4.87423 4.26122 4.94382 4.22576 5.01911 4.21482L5.62129 4.12732C5.67859 4.11899 5.72813 4.083 5.75376 4.03107L6.02306 3.48541C6.10762 3.31407 6.31507 3.24372 6.48641 3.32828C6.55464 3.36196 6.60986 3.41718 6.64353 3.48541L6.91283 4.03107C6.93846 4.083 6.988 4.11899 7.0453 4.12732L7.64748 4.21482C7.83656 4.24229 7.96757 4.41785 7.9401 4.60693C7.92916 4.68223 7.8937 4.75182 7.83922 4.80492L7.40348 5.22966C7.36201 5.27008 7.34309 5.32832 7.35288 5.38539L7.45574 5.98513C7.48804 6.17345 7.36156 6.3523 7.17324 6.3846C7.09825 6.39746 7.02112 6.38524 6.95377 6.34984L6.41517 6.06668C6.36391 6.03973 6.30268 6.03973 6.25143 6.06668Z" /></g><defs><clipPath id="clip0_5_1482"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Sb;