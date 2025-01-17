import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ve = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1835)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M13.9999 9.33333C14.3681 9.33333 14.6666 9.03486 14.6666 8.66667C14.6666 8.29848 14.3681 8 13.9999 8C13.6317 8 13.3333 8.29848 13.3333 8.66667C13.3333 9.03486 13.6317 9.33333 13.9999 9.33333ZM11.3333 10C11.7014 10 11.9999 9.70152 11.9999 9.33333C11.9999 8.96514 11.7014 8.66667 11.3333 8.66667C10.9651 8.66667 10.6666 8.96514 10.6666 9.33333C10.6666 9.70152 10.9651 10 11.3333 10ZM17.3333 9.33333C17.3333 9.70152 17.0348 10 16.6666 10C16.2984 10 15.9999 9.70152 15.9999 9.33333C15.9999 8.96514 16.2984 8.66667 16.6666 8.66667C17.0348 8.66667 17.3333 8.96514 17.3333 9.33333ZM9.99992 12C10.3681 12 10.6666 11.7015 10.6666 11.3333C10.6666 10.9651 10.3681 10.6667 9.99992 10.6667C9.63173 10.6667 9.33325 10.9651 9.33325 11.3333C9.33325 11.7015 9.63173 12 9.99992 12ZM18.6666 11.3333C18.6666 11.7015 18.3681 12 17.9999 12C17.6317 12 17.3333 11.7015 17.3333 11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667C18.3681 10.6667 18.6666 10.9651 18.6666 11.3333Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1835"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ve;