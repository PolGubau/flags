import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SvFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2091_2085)"><rect width={55.996} height={43.9981} x={3.44922} y={3.3125} fill="white" /><path fill="#0EA6FB" d="M14.9706 4.89844H48.966C52.2754 4.89844 53.4755 5.24302 54.6854 5.89007C55.8952 6.53712 56.8448 7.48663 57.4918 8.69651C58.1389 9.90639 58.4834 11.1065 58.4834 14.4159V17.0196H5.45312V14.4159C5.45312 11.1065 5.7977 9.90639 6.44475 8.69651C7.0918 7.48663 8.04132 6.53712 9.2512 5.89007C10.4611 5.24302 11.6612 4.89844 14.9706 4.89844Z" /><path fill="#0EA6FB" d="M58.4834 33.6836V36.2874C58.4834 39.5968 58.1389 40.7969 57.4918 42.0067C56.8448 43.2166 55.8952 44.1661 54.6854 44.8132C53.4755 45.4602 52.2754 45.8048 48.966 45.8048H14.9706C11.6612 45.8048 10.4611 45.4602 9.2512 44.8132C8.04132 44.1661 7.0918 43.2166 6.44475 42.0067C5.7977 40.7969 5.45312 39.5968 5.45312 36.2874V33.6836H58.4834Z" /><path fill="#8FD130" d="M30.7525 22.2469C31.0604 21.7135 31.8302 21.7135 32.1381 22.2469L34.4162 26.1926C34.7241 26.7259 34.3392 27.3926 33.7234 27.3926H29.1673C28.5514 27.3926 28.1665 26.7259 28.4744 26.1926L30.7525 22.2469Z" /><circle cx={31.4453} cy={25.3125} r={5.15234} strokeWidth={2} /></g><rect width={56} height={44} x={3.44922} y={3.375} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2091_2085"><rect width={56} height={44} x={3.44922} y={3.375} fill="white" rx={9} /></clipPath></defs></svg>;
export default SvFlag;