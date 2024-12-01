import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsLogroO = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_477)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M27.092 21.2887L-0.797363 1.28507L0.951132 -1.15271L28.8405 18.851L27.092 21.2887Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0.951172 21.2886L28.8406 1.28495L27.0921 -1.15283L-0.797325 18.8508L0.951172 21.2886Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_27_477"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsLogroO;