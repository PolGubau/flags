import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ch = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_295)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="white" fillRule="evenodd" d="M12 12H8.33333C8.14924 12 8 11.8508 8 11.6667V8.33333C8 8.14924 8.14924 8 8.33333 8H12V4.33333C12 4.14924 12.1492 4 12.3333 4H15.6667C15.8508 4 16 4.14924 16 4.33333V8H19.6667C19.8508 8 20 8.14924 20 8.33333V11.6667C20 11.8508 19.8508 12 19.6667 12H16V15.6667C16 15.8508 15.8508 16 15.6667 16H12.3333C12.1492 16 12 15.8508 12 15.6667V12Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_295"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ch;