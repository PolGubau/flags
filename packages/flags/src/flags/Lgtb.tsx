import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Lgtb = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_957)"><rect width={28} height={20} fill="#4C4C4C" /><path fill="#50B500" fillRule="evenodd" d="M0 13.3334H28V10H0V13.3334Z" clipRule="evenodd" /><path fill="#7700FF" fillRule="evenodd" d="M0 20H28V16.6666H0V20Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 16.6666H28V13.3333H0V16.6666Z" clipRule="evenodd" /><path fill="#FF9600" fillRule="evenodd" d="M0 6.66677H28V3.33337H0V6.66677Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 10H28V6.66663H0V10Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 3.3334H28V0H0V3.3334Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_8_957"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Lgtb;