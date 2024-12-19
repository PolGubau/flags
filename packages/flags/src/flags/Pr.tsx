import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Pr = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1370)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 0H28V4H0V0ZM0 8H28V12H0V8ZM0 16V20H28V16H0Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 0L13.3333 10L0 20V0Z" clipRule="evenodd" /><path fill="white" d="M4.55124 12.1458L3.57271 12.6603C3.27451 12.817 2.90569 12.7024 2.74892 12.4042C2.68649 12.2855 2.66495 12.1494 2.68763 12.0172L2.87451 10.9276C2.88832 10.8471 2.86163 10.765 2.80314 10.7079L2.01148 9.93628C1.77024 9.70112 1.7653 9.31492 2.00046 9.07367C2.0941 8.97761 2.2168 8.91509 2.34956 8.8958L3.44359 8.73683C3.52442 8.72508 3.5943 8.67431 3.63045 8.60107L4.11972 7.6097C4.26882 7.3076 4.63459 7.18356 4.93669 7.33266C5.05699 7.39203 5.15437 7.4894 5.21374 7.6097L5.70301 8.60107C5.73915 8.67431 5.80903 8.72508 5.88986 8.73683L6.9839 8.8958C7.31729 8.94425 7.54829 9.25379 7.49984 9.58718C7.48055 9.71994 7.41804 9.84264 7.32197 9.93628L6.53032 10.7079C6.47183 10.765 6.44514 10.8471 6.45894 10.9276L6.64583 12.0172C6.70278 12.3493 6.47977 12.6646 6.14772 12.7216C6.0155 12.7442 5.87949 12.7227 5.76075 12.6603L4.78221 12.1458C4.70991 12.1078 4.62354 12.1078 4.55124 12.1458Z" /></g><defs><clipPath id="clip0_5_1370"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Pr;