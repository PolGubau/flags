import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Az = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_89)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M14 12C14.4113 12 14.7936 11.8759 15.1114 11.663C15.0746 11.6654 15.0374 11.6667 15 11.6667C14.0795 11.6667 13.3333 10.9205 13.3333 10C13.3333 9.07953 14.0795 8.33333 15 8.33333C15.0374 8.33333 15.0746 8.33457 15.1114 8.337C14.7936 8.12414 14.4113 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12ZM16 10C16 10.3682 15.7015 10.6667 15.3333 10.6667C14.9651 10.6667 14.6667 10.3682 14.6667 10C14.6667 9.63181 14.9651 9.33333 15.3333 9.33333C15.7015 9.33333 16 9.63181 16 10Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_89"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Az;