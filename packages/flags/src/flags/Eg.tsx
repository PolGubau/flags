import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Eg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_454)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#FF9600" stroke="#FFDA27" strokeWidth={0.666667} d="M12.3685 9.4824L12.6527 10.0509L12.9587 9.49398L12.9587 9.49396L12.9587 9.49391L12.9588 9.49382L12.9589 9.49366L12.96 9.49162L12.9653 9.48219C12.9701 9.4736 12.9776 9.46052 12.9874 9.44361C13.0071 9.40975 13.0363 9.3607 13.0732 9.30155C13.1475 9.18264 13.2513 9.0259 13.3715 8.8708C13.4931 8.71374 13.6234 8.56902 13.7489 8.46658C13.8829 8.3572 13.9661 8.33333 14 8.33333C14.0573 8.33333 14.151 8.3644 14.2813 8.46862C14.407 8.56914 14.5335 8.71141 14.65 8.86667C14.765 9.01999 14.862 9.17512 14.9308 9.29296C14.9649 9.35153 14.9916 9.40005 15.0095 9.43345C15.0185 9.45013 15.0252 9.46298 15.0295 9.47137L15.0342 9.48049L15.0351 9.48238L15.0352 9.4824L15.0352 9.48251L15.0352 9.48258L15.0353 9.48263L15.3333 10.0787L15.6314 9.4824L16.206 8.33333L16.6666 8.33333C16.8507 8.33333 17 8.48257 17 8.66667V10.7543C17 11.0206 16.7032 11.1794 16.4817 11.0317L15.5182 10.3893L15.4342 10.3333H15.3333H14.6666H14.3333V10.6667V11.3333C14.3333 11.5174 14.1841 11.6667 14 11.6667C13.8159 11.6667 13.6666 11.5174 13.6666 11.3333V10.6667V10.3333H13.3333H12.6666H12.5657L12.4817 10.3893L11.5182 11.0317C11.2967 11.1794 11 11.0206 11 10.7543V8.66667C11 8.48257 11.1492 8.33333 11.3333 8.33333L11.7939 8.33333L12.3685 9.4824Z" /></g><defs><clipPath id="clip0_5_454"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Eg;