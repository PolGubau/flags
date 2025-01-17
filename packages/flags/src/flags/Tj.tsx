import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Tj = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1579)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M13.3333 8.66667C13.3333 9.03486 13.0348 9.33333 12.6666 9.33333C12.2984 9.33333 11.9999 9.03486 11.9999 8.66667C11.9999 8.29848 12.2984 8 12.6666 8C13.0348 8 13.3333 8.29848 13.3333 8.66667ZM14.6666 10C14.6666 10.1206 14.6346 10.3767 14.5786 10.6667H15.3333C15.7014 10.6667 15.9999 10.9651 15.9999 11.3333C15.9999 11.7015 15.7014 12 15.3333 12H13.9999H12.6666C12.2984 12 11.9999 11.7015 11.9999 11.3333C11.9999 10.9651 12.2984 10.6667 12.6666 10.6667H13.4213C13.3653 10.3767 13.3333 10.1206 13.3333 10C13.3333 9.63181 13.6317 9.33333 13.9999 9.33333C14.3681 9.33333 14.6666 9.63181 14.6666 10ZM15.9999 8.66667C15.9999 9.03486 15.7014 9.33333 15.3333 9.33333C14.9651 9.33333 14.6666 9.03486 14.6666 8.66667C14.6666 8.29848 14.9651 8 15.3333 8C15.7014 8 15.9999 8.29848 15.9999 8.66667ZM17.9999 10.6667C18.3681 10.6667 18.6666 10.3682 18.6666 10C18.6666 9.63181 18.3681 9.33333 17.9999 9.33333C17.6317 9.33333 17.3333 9.63181 17.3333 10C17.3333 10.3682 17.6317 10.6667 17.9999 10.6667ZM10.6666 10C10.6666 10.3682 10.3681 10.6667 9.99992 10.6667C9.63173 10.6667 9.33325 10.3682 9.33325 10C9.33325 9.63181 9.63173 9.33333 9.99992 9.33333C10.3681 9.33333 10.6666 9.63181 10.6666 10Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1579"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Tj;