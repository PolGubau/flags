import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mt = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1176)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M14.6667 20H28.0001V0H14.6667V20Z" clipRule="evenodd" /><mask id="path-3-outside-1_5_1176" width={6} height={6} x={1.66675} y={1.66675} fill="black" maskUnits="userSpaceOnUse"><rect width={6} height={6} x={1.66675} y={1.66675} fill="white" /><path fillRule="evenodd" d="M5.33341 2.66675H4.00008V4.00008H2.66675V5.33341H4.00008V6.66675H5.33341V5.33341H6.66675V4.00008H5.33341V2.66675Z" clipRule="evenodd" /></mask><path fill="white" fillRule="evenodd" d="M5.33341 2.66675H4.00008V4.00008H2.66675V5.33341H4.00008V6.66675H5.33341V5.33341H6.66675V4.00008H5.33341V2.66675Z" clipRule="evenodd" /><path fill="#9B5F38" d="M4.00008 2.66675V2.00008H3.33341V2.66675H4.00008ZM5.33341 2.66675H6.00008V2.00008H5.33341V2.66675ZM4.00008 4.00008V4.66675H4.66675V4.00008H4.00008ZM2.66675 4.00008V3.33341H2.00008V4.00008H2.66675ZM2.66675 5.33341H2.00008V6.00008H2.66675V5.33341ZM4.00008 5.33341H4.66675V4.66675H4.00008V5.33341ZM4.00008 6.66675H3.33341V7.33341H4.00008V6.66675ZM5.33341 6.66675V7.33341H6.00008V6.66675H5.33341ZM5.33341 5.33341V4.66675H4.66675V5.33341H5.33341ZM6.66675 5.33341V6.00008H7.33341V5.33341H6.66675ZM6.66675 4.00008H7.33341V3.33341H6.66675V4.00008ZM5.33341 4.00008H4.66675V4.66675H5.33341V4.00008ZM4.00008 3.33341H5.33341V2.00008H4.00008V3.33341ZM4.66675 4.00008V2.66675H3.33341V4.00008H4.66675ZM2.66675 4.66675H4.00008V3.33341H2.66675V4.66675ZM3.33341 5.33341V4.00008H2.00008V5.33341H3.33341ZM4.00008 4.66675H2.66675V6.00008H4.00008V4.66675ZM4.66675 6.66675V5.33341H3.33341V6.66675H4.66675ZM5.33341 6.00008H4.00008V7.33341H5.33341V6.00008ZM4.66675 5.33341V6.66675H6.00008V5.33341H4.66675ZM6.66675 4.66675H5.33341V6.00008H6.66675V4.66675ZM6.00008 4.00008V5.33341H7.33341V4.00008H6.00008ZM5.33341 4.66675H6.66675V3.33341H5.33341V4.66675ZM4.66675 2.66675V4.00008H6.00008V2.66675H4.66675Z" mask="url(#path-3-outside-1_5_1176)" /><path fill="#9B5F38" fillRule="evenodd" d="M4.66667 5.33333C5.03486 5.33333 5.33333 5.03486 5.33333 4.66667C5.33333 4.29848 5.03486 4 4.66667 4C4.29848 4 4 4.29848 4 4.66667C4 5.03486 4.29848 5.33333 4.66667 5.33333Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1176"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mt;