import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Fi = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_523)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M-1.33325 12.0001H8.00008V21.3334H12.0001V12.0001H29.3334V8.00008H12.0001V-1.33325H8.00008V8.00008H-1.33325V12.0001Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_523"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Fi;