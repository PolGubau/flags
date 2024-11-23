import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const GeFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_574)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M16.0001 21.3334H12.0001V12.0001H-1.33325V8.00008H12.0001V-1.33325H16.0001V8.00008H29.3334V12.0001H16.0001V21.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M21.6 4.4L20 4.66667V3.33333L21.6 3.6L21.3333 2H22.6667L22.4 3.6L24 3.33333V4.66667L22.4 4.4L22.6667 6H21.3333L21.6 4.4Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M5.6 4.4L4 4.66667V3.33333L5.6 3.6L5.33333 2H6.66667L6.4 3.6L8 3.33333V4.66667L6.4 4.4L6.66667 6H5.33333L5.6 4.4Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M5.6 16.4L4 16.6667V15.3333L5.6 15.6L5.33333 14H6.66667L6.4 15.6L8 15.3333V16.6667L6.4 16.4L6.66667 18H5.33333L5.6 16.4Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M21.6 16.4L20 16.6667V15.3333L21.6 15.6L21.3333 14H22.6667L22.4 15.6L24 15.3333V16.6667L22.4 16.4L22.6667 18H21.3333L21.6 16.4Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_574"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default GeFlag;