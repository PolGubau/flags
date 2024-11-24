import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const La = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_978)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 14.6666H28V5.33325H0V14.6666Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M14 13.3334C15.8409 13.3334 17.3333 11.841 17.3333 10.0001C17.3333 8.15913 15.8409 6.66675 14 6.66675C12.159 6.66675 10.6666 8.15913 10.6666 10.0001C10.6666 11.841 12.159 13.3334 14 13.3334Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_978"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default La;