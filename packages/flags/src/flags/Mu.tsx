import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Mu = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1206)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 10.6666H28V5.33325H0V10.6666Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 16.0001H28V10.6667H0V16.0001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1206"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Mu;