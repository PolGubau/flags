import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gb = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_554)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#F63030" stroke="white" d="M26.8006 21.6949L27.2069 21.9863L27.4983 21.58L29.2468 19.1422L29.5382 18.736L29.132 18.4445L1.24255 -1.55913L0.836252 -1.85054L0.544836 -1.44425L-1.20366 0.993531L-1.49508 1.39983L-1.08878 1.69124L26.8006 21.6949Z" /><path fill="#F63030" stroke="white" d="M1.24259 21.6949L0.836292 21.9863L0.544876 21.58L-1.20362 19.1422L-1.49504 18.736L-1.08874 18.4445L26.8007 -1.55913L27.207 -1.85054L27.4984 -1.44425L29.2469 0.993531L29.5383 1.39983L29.132 1.69124L1.24259 21.6949Z" /><path fill="#F63030" stroke="white" d="M-0.5 12V12.5H0H11.5V20V20.5H12H16H16.5V20V12.5H28H28.5V12V8V7.5H28H16.5V0V-0.5H16H12H11.5V0V7.5H0H-0.5V8V12Z" /></g><defs><clipPath id="clip0_5_554"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gb;