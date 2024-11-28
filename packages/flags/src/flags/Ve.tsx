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
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1835)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3333H28V6.66663H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20H28V13.3334H0V20Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M14 9.33333C14.3682 9.33333 14.6667 9.03486 14.6667 8.66667C14.6667 8.29848 14.3682 8 14 8C13.6319 8 13.3334 8.29848 13.3334 8.66667C13.3334 9.03486 13.6319 9.33333 14 9.33333ZM11.3334 10C11.7016 10 12 9.70152 12 9.33333C12 8.96514 11.7016 8.66667 11.3334 8.66667C10.9652 8.66667 10.6667 8.96514 10.6667 9.33333C10.6667 9.70152 10.9652 10 11.3334 10ZM17.3334 9.33333C17.3334 9.70152 17.0349 10 16.6667 10C16.2985 10 16 9.70152 16 9.33333C16 8.96514 16.2985 8.66667 16.6667 8.66667C17.0349 8.66667 17.3334 8.96514 17.3334 9.33333ZM10 12C10.3682 12 10.6667 11.7015 10.6667 11.3333C10.6667 10.9651 10.3682 10.6667 10 10.6667C9.63185 10.6667 9.33337 10.9651 9.33337 11.3333C9.33337 11.7015 9.63185 12 10 12ZM18.6667 11.3333C18.6667 11.7015 18.3682 12 18 12C17.6319 12 17.3334 11.7015 17.3334 11.3333C17.3334 10.9651 17.6319 10.6667 18 10.6667C18.3682 10.6667 18.6667 10.9651 18.6667 11.3333Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1835"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ve;