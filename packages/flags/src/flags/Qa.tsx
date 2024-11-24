import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Qa = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1389)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><path fill="#F63030" fillRule="evenodd" d="M28 0H8L10 1.33333L8 2.66667L10 4L8 5.33333L10 6.66667L8 8L10 9.33333L8 10.6667L10 12L8 13.3333L10 14.6667L8 16L10 17.3333L8 18.6667L10 20H28V0Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1389"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Qa;