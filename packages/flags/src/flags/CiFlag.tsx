import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CiFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_316)"><rect width={9.33333} height={20} x={18.6667} fill="#50B500" /><rect width={9.33333} height={20} x={9.3335} fill="white" /><path fill="#FF9600" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_316"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default CiFlag;