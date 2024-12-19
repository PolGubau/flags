import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Aq = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_12_1054)"><rect width={28} height={20} fill="white" /><rect width={28} height={20} fill="white" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 10H9.42251L14 1.96139L18.6077 10H28V0H0V10Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M14.0085 17.7903L9.41846 9.99194L14.0085 11.8895L18.6241 9.99194L14.0085 17.7903Z" /></g><defs><clipPath id="clip0_12_1054"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Aq;