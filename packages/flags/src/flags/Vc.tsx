import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Vc = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1794)"><rect width={28} height={20} fill="white" rx={2} /><rect width={14.6667} height={20} x={13.3334} fill="#50B500" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M8 20H20V0H8V20Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M9.33337 8L11.3334 4L13.3334 8L11.3334 12L9.33337 8ZM14.6667 8L16.6667 4L18.6667 8L16.6667 12L14.6667 8ZM14 9.33333L12 13.3333L14 17.3333L16 13.3333L14 9.33333Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1794"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Vc;