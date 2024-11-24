import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Dk = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_390)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M8 0H0V8H8V0ZM12 0V8H28V0H12ZM28 12H12V20H28V12ZM8 20V12H0V20H8Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_390"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Dk;