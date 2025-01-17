import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Kh = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_849)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 14.6666H28V5.33325H0V14.6666Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M12.0001 8.72713H13.3334V7.99992C13.3334 7.63173 13.6319 7.33325 14.0001 7.33325C14.3683 7.33325 14.6667 7.63173 14.6667 7.99992V8.72713H16.0001V9.99992H12.0001V8.72713ZM17.3334 7.99992C16.9652 7.99992 16.6667 8.2984 16.6667 8.66659V9.99992H18.0001V8.66659C18.0001 8.2984 17.7016 7.99992 17.3334 7.99992ZM11.3334 13.3333V10.6666H10.0001L8.66675 13.3333H11.3334ZM16.0001 10.6666H12.0001V13.3333H16.0001V10.6666ZM16.6667 10.6666H18.0001L19.3334 13.3333H16.6667V10.6666ZM10.6667 7.99992C10.2986 7.99992 10.0001 8.2984 10.0001 8.66659V9.99992H11.3334V8.66659C11.3334 8.2984 11.0349 7.99992 10.6667 7.99992Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_849"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Kh;