import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Lb = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1025)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M12.9428 12.3906C13.1585 12.1749 13.1585 11.8252 12.9428 11.6096L12.8661 11.5328C12.7424 11.4091 12.5628 11.3594 12.3931 11.4018L12.0138 11.4966C11.5701 11.6075 11.2948 11.029 11.6606 10.7546L12.0033 10.4976C12.2158 10.3382 12.1031 10.0001 11.8375 10.0001C11.5458 10.0001 11.453 9.60691 11.7139 9.47647L12.2861 9.19036C12.547 9.05992 12.4542 8.66675 12.1625 8.66675C11.8969 8.66675 11.7842 8.32861 11.9967 8.16924L13.6 6.96675C13.837 6.78897 14.163 6.78897 14.4 6.96675L16.0033 8.16924C16.2158 8.32861 16.1031 8.66675 15.8375 8.66675C15.5458 8.66675 15.453 9.05992 15.7139 9.19035L16.2861 9.47647C16.547 9.60691 16.4542 10.0001 16.1625 10.0001C15.8969 10.0001 15.7842 10.3382 15.9967 10.4976L16.3394 10.7546C16.7052 11.029 16.4299 11.6075 15.9862 11.4966L15.6069 11.4018C15.4372 11.3594 15.2576 11.4091 15.1339 11.5328L15.0572 11.6096C14.8415 11.8252 14.8415 12.1749 15.0572 12.3906C15.4051 12.7385 15.1587 13.3334 14.6667 13.3334H13.3333C12.8413 13.3334 12.5949 12.7385 12.9428 12.3906Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1025"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Lb;