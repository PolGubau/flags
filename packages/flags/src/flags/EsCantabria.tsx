import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsCantabria = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_256)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M0 20H28V10H0V20Z" clipRule="evenodd" /><path fill="#F63030" stroke="#4C4C4C" d="M11.7666 7.74072H16.2335V11.3648C16.2335 12.5983 15.2336 13.5983 14.0001 13.5983C12.7666 13.5983 11.7666 12.5983 11.7666 11.3648V7.74072Z" /><mask id="path-4-inside-1_8_256" fill="white"><path d="M11.2666 7.24072H16.7335V10.907H11.2666V7.24072Z" /></mask><path fill="#0EA6FB" d="M11.2666 7.24072H16.7335V10.907H11.2666V7.24072Z" /><path fill="#4C4C4C" d="M11.2666 7.24072V6.24072H10.2666V7.24072H11.2666ZM16.7335 7.24072H17.7335V6.24072H16.7335V7.24072ZM11.2666 8.24072H16.7335V6.24072H11.2666V8.24072ZM15.7335 7.24072V10.907H17.7335V7.24072H15.7335ZM12.2666 10.907V7.24072H10.2666V10.907H12.2666Z" mask="url(#path-4-inside-1_8_256)" /><rect width={5.46021} height={0.984619} x={11.2734} y={5.68225} fill="#FFDA27" /><circle cx={14.0035} cy={12.0476} r={0.838013} fill="white" /></g><defs><clipPath id="clip0_8_256"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsCantabria;