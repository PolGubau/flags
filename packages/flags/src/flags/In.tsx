import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const In = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_773)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#FF9600" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" stroke="#0EA6FB" d="M14 12C15.1046 12 16 11.1046 16 10C16 8.89543 15.1046 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M13.9999 10.6666C14.3681 10.6666 14.6666 10.3681 14.6666 9.99992C14.6666 9.63173 14.3681 9.33325 13.9999 9.33325C13.6317 9.33325 13.3333 9.63173 13.3333 9.99992C13.3333 10.3681 13.6317 10.6666 13.9999 10.6666Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_773"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default In;