import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const RuFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1401)"><rect width={28} height={20} fill="white" /><rect width={28} height={20} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1401"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default RuFlag;