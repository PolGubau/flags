import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsLlicaVall = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_682)"><rect width={28} height={20} fill="white" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 9H28V7H0V9Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 13H28V11H0V13Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_27_682"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsLlicaVall;