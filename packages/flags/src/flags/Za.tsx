import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Za = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1857)"><rect width={28} height={20} fill="#50B500" /><path fill="#FF9600" fillRule="evenodd" d="M0 2.66663L9.33333 9.99996L0 17.3333V2.66663Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M-1.8335 3L7.1665 10L-1.8335 17V3Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M12.0001 8L2.66675 0H28.0001V8H12.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M12.6667 6.59672L4.66675 -0.0699463H28.3334V6.59672H12.6667Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M2.66675 20H28.0001V12H12.0001L2.66675 20Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M4.66675 20.1116H28.3334V13.4449H12.6667L4.66675 20.1116Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1857"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Za;