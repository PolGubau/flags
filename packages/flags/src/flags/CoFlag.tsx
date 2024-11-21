import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CoFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2089_1956)"><rect width={55.996} height={43.9981} x={3.79297} y={3.64062} fill="white" /><rect width={57.5508} height={10.1816} x={2.24219} y={25.7031} fill="#0EA6FB" /><rect width={57.5508} height={20.4473} x={2.24219} y={5.25781} fill="#FFDA27" /><rect width={57.5508} height={11.7539} x={2.24219} y={35.8867} fill="#F63030" /><circle cx={31.0156} cy={25.707} r={4.65234} fill="#FF9600" strokeWidth={3} /></g><rect width={56} height={44} x={3.79297} y={3.70312} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2089_1956"><rect width={56} height={44} x={3.79297} y={3.70312} fill="white" rx={9} /></clipPath></defs></svg>;
export default CoFlag;