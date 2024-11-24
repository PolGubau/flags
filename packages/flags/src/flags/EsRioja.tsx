import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsRioja = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_237)"><rect width={28} height={20} fill="white" /><path fill="#50B500" fillRule="evenodd" d="M0 15H28V10H0V15Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 20H28V15H0V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 5.00002H28V0H0V5.00002Z" clipRule="evenodd" /><path fill="#FFDA27" stroke="#0EA6FB" d="M11.7666 6.49268H16.2335V11.3648C16.2335 12.5983 15.2336 13.5983 14.0001 13.5983C12.7666 13.5983 11.7666 12.5983 11.7666 11.3648V6.49268Z" /></g><defs><clipPath id="clip0_8_237"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsRioja;