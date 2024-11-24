import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const PrFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1370)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 0H28V4H0V0ZM0 8H28V12H0V8ZM0 16V20H28V16H0Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="white" d="M4.55112 12.1458L3.57258 12.6603C3.27439 12.817 2.90557 12.7024 2.74879 12.4042C2.68637 12.2855 2.66483 12.1494 2.6875 12.0172L2.87439 10.9276C2.8882 10.8471 2.86151 10.765 2.80302 10.7079L2.01136 9.93628C1.77012 9.70112 1.76518 9.31492 2.00034 9.07367C2.09398 8.97761 2.21667 8.91509 2.34943 8.8958L3.44347 8.73683C3.5243 8.72508 3.59418 8.67431 3.63033 8.60107L4.1196 7.6097C4.26869 7.3076 4.63446 7.18356 4.93657 7.33266C5.05687 7.39203 5.15424 7.4894 5.21361 7.6097L5.70288 8.60107C5.73903 8.67431 5.80891 8.72508 5.88974 8.73683L6.98378 8.8958C7.31717 8.94425 7.54817 9.25379 7.49972 9.58718C7.48043 9.71994 7.41791 9.84264 7.32185 9.93628L6.53019 10.7079C6.4717 10.765 6.44501 10.8471 6.45882 10.9276L6.64571 12.0172C6.70266 12.3493 6.47965 12.6646 6.1476 12.7216C6.01538 12.7442 5.87937 12.7227 5.76063 12.6603L4.78209 12.1458C4.70979 12.1078 4.62342 12.1078 4.55112 12.1458Z" /></g><defs><clipPath id="clip0_5_1370"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default PrFlag;