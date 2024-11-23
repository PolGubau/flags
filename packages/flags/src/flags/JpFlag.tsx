import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const JpFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_845)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M14 16C17.3137 16 20 13.3137 20 10C20 6.68629 17.3137 4 14 4C10.6863 4 8 6.68629 8 10C8 13.3137 10.6863 16 14 16Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_845"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default JpFlag;