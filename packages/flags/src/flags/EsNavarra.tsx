import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsNavarra = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_88)"><rect width={28} height={20} fill="#F63030" /><path fill="#F63030" stroke="white" d="M11.7666 7.91479H16.2335V11.4693C16.2335 12.7028 15.2336 13.7028 14.0001 13.7028C12.7666 13.7028 11.7666 12.7028 11.7666 11.4693V7.91479Z" /><rect width={5.46021} height={0.984619} x={11.2733} y={5.79712} fill="#FFDA27" /><rect width={1.00842} height={5.57214} x={13.4993} y={8.02271} fill="white" /><rect width={1.01086} height={4.58655} x={16.2932} y={10.3046} fill="white" transform="rotate(90 16.2932 10.3046)" /></g><defs><clipPath id="clip0_8_88"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsNavarra;