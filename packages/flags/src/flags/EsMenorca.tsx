import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMenorca = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_508)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M0 8.86663H28V6.66663H0V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V11.1333H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 17.8001H28V15.6001H0V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4.39995H28V2.19995H0V4.39995Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M10.7829 14.2269L13.2511 11.7317L13.2319 8.22199L10.7367 5.7538L7.227 5.77294L4.75882 8.2682L4.77796 11.7779L7.27322 14.2461L10.7829 14.2269Z" /><rect width={2} height={3.40756} x={8} y={7} fill="white" /><path fill="white" d="M6 10L8 9V9.5L6.75 10.5L7.5 11C8.40833 11.6056 9.59167 11.6056 10.5 11L11.25 10.5L10 9.5V9L12 10V11C10.4231 12.8397 7.57692 12.8397 6 11V10Z" /></g><defs><clipPath id="clip0_27_508"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMenorca;