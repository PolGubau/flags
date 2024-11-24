import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsAndalucia = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_75)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#50B500" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 20H28V13.3334H0V20Z" clipRule="evenodd" /><path fill="#FFDA27" stroke="white" d="M11.7666 6.49268H16.2335V11.3648C16.2335 12.5983 15.2336 13.5983 14.0001 13.5983C12.7666 13.5983 11.7666 12.5983 11.7666 11.3648V6.49268Z" /></g><defs><clipPath id="clip0_8_75"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsAndalucia;