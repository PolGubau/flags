import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const GlFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_13_1074)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M11.0544 16C14.3682 16 17.0544 13.3137 17.0544 10C17.0544 6.68629 14.3682 4 11.0544 4C7.74073 4 5.05444 6.68629 5.05444 10C5.05444 13.3137 7.74073 16 11.0544 16Z" clipRule="evenodd" /><rect width={28} height={10} y={10} fill="#F63030" /><path fill="white" fillRule="evenodd" d="M11.0544 16C14.3682 16 17.0544 13.3137 17.0544 10C13.7407 10 5.05444 10 5.05444 10C5.05444 13.3137 7.74073 16 11.0544 16Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_13_1074"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default GlFlag;