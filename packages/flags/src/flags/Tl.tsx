import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Tl = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1591)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="#FFDA27" fillRule="evenodd" d="M0 0L17.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 0L12 10L0 20V0Z" clipRule="evenodd" /><path fill="white" d="M4.91105 11.9254L4.03299 12.387C3.76542 12.5276 3.43447 12.4248 3.2938 12.1572C3.23778 12.0506 3.21845 11.9286 3.2388 11.81L3.4065 10.8322C3.41888 10.76 3.39494 10.6863 3.34245 10.6351L2.63209 9.9427C2.41562 9.73169 2.41119 9.38515 2.6222 9.16868C2.70622 9.08248 2.81632 9.02638 2.93545 9.00907L3.91714 8.86642C3.98967 8.85589 4.05237 8.81033 4.08481 8.74461L4.52383 7.85504C4.65762 7.58396 4.98583 7.47266 5.25691 7.60645C5.36486 7.65972 5.45223 7.7471 5.50551 7.85504L5.94453 8.74461C5.97697 8.81033 6.03967 8.85589 6.1122 8.86642L7.09389 9.00907C7.39305 9.05254 7.60032 9.3303 7.55685 9.62945C7.53954 9.74858 7.48345 9.85868 7.39725 9.9427L6.68689 10.6351C6.6344 10.6863 6.61045 10.76 6.62284 10.8322L6.79054 11.81C6.84164 12.1079 6.64153 12.3909 6.34358 12.442C6.22494 12.4623 6.10289 12.443 5.99634 12.387L5.11829 11.9254C5.05342 11.8912 4.97592 11.8912 4.91105 11.9254Z" /></g><defs><clipPath id="clip0_5_1591"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Tl;