import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsRepublica = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_1056)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#7700FF" fillRule="evenodd" d="M0 20H28V14.6666H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 14.6667H28V5.33337H0V14.6667Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M7.33337 9.33333H8.66671V10H7.33337V9.33333Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M17.7459 8.07581C18.1597 8.07581 18.4952 8.41124 18.4952 8.82503V11.7852C18.4952 12.199 18.1597 12.5345 17.7459 12.5345C17.3321 12.5345 16.9967 12.199 16.9967 11.7852V8.82503C16.9967 8.41124 17.3321 8.07581 17.7459 8.07581Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M10.254 8.07581C10.6678 8.07581 11.0032 8.41124 11.0032 8.82503V11.7852C11.0032 12.199 10.6678 12.5345 10.254 12.5345C9.8402 12.5345 9.50476 12.199 9.50476 11.7852V8.82503C9.50476 8.41124 9.8402 8.07581 10.254 8.07581Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M12.427 7.33337H15.5737C15.9461 7.33337 16.248 7.63527 16.248 8.00768V11.0306C16.248 12.2719 15.2417 13.2782 14.0004 13.2782C12.759 13.2782 11.7527 12.2719 11.7527 11.0306V8.00768C11.7527 7.63527 12.0546 7.33337 12.427 7.33337Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_8_1056"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsRepublica;