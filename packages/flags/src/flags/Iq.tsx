import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Iq = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_813)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M18.6666 8.53934C18.6666 8.29155 18.9274 8.13039 19.149 8.2412L19.8157 8.57454C19.9286 8.631 20 8.74642 20 8.87268V11.6667C20 11.8508 19.8507 12 19.6666 12H19C18.8159 12 18.6666 11.8508 18.6666 11.6667V8.53934Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M10.6666 8.53934C10.6666 8.29155 10.9274 8.13039 11.149 8.2412L11.8157 8.57454C11.9286 8.631 12 8.74642 12 8.87268V11.6667C12 11.8508 11.8507 12 11.6666 12H11C10.8159 12 10.6666 11.8508 10.6666 11.6667V8.53934Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M16 8.87268C16 8.74642 16.0713 8.631 16.1843 8.57454L16.8509 8.2412C17.0726 8.13039 17.3333 8.29155 17.3333 8.53934V11.6667C17.3333 11.8508 17.1841 12 17 12H16.3333C16.1492 12 16 11.8508 16 11.6667V8.87268Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M13.3334 10.2061C13.3334 10.0799 13.4047 9.96443 13.5176 9.90797L14.1843 9.57463C14.4059 9.46382 14.6667 9.62498 14.6667 9.87277V10.7265H16.6667V12.0001H14.6667H13.6667C13.4826 12.0001 13.3334 11.8509 13.3334 11.6668V10.2061Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M8 10.2061C8 10.0799 8.07133 9.96443 8.18426 9.90797L8.85093 9.57463C9.07256 9.46382 9.33333 9.62498 9.33333 9.87277V10.7265H11.3333V12.0001H9.33333H8.33333C8.14924 12.0001 8 11.8509 8 11.6668V10.2061Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_813"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Iq;