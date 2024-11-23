import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const ScFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1495)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} rx={1.75} /><path fill="#50B500" fillRule="evenodd" d="M28 0H0V20H28V13.3333L0 20L28 6.66667V0Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M0 0H9.33333L0 20V0Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M18.6667 0H28V6.66667L0 20L18.6667 0Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M28 19.9999V13.3333L0 19.9999H28Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M9.33333 0H18.6667L0 20L9.33333 0Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1495"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default ScFlag;