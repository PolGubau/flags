import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const FrFree = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1146)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><rect width={9.33333} height={20} x={18.6667} fill="#F63030" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><rect width={1} height={8.96814} x={13.5} y={5.00024} fill="#F63030" /><rect width={1} height={6} x={17} y={8.01733} fill="#F63030" transform="rotate(90 17 8.01733)" /><rect width={1} height={3} x={15.5} y={6} fill="#F63030" transform="rotate(90 15.5 6)" /></g><defs><clipPath id="clip0_27_1146"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default FrFree;