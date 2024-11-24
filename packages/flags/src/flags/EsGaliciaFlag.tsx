import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsGaliciaFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_137)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path strokeLinecap="round" strokeWidth={4} d="M-0.0666504 -0.019165L28 20" /><path fill="#0EA6FB" d="M11.2666 7.41479H16.7335V11.4693C16.7335 12.9789 15.5097 14.2028 14.0001 14.2028C12.4904 14.2028 11.2666 12.9789 11.2666 11.4693V7.41479Z" /><rect width={5.46021} height={0.984619} x={11.2734} y={5.79712} fill="#F63030" /><rect width={5.46021} height={0.984619} x={11.2734} y={4.8125} fill="#FFDA27" /><rect width={1.00842} height={2.87659} x={13.4993} y={10} fill="#FFDA27" /><rect width={1.00842} height={1.00696} x={13.4993} y={8.48547} fill="white" rx={0.503479} /></g><defs><clipPath id="clip0_8_137"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsGaliciaFlag;