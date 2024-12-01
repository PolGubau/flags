import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsVigo = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_532)"><rect width={28} height={20} fill="white" /><path fill="#F63030" d="M14 10L28 0H0L14 10Z" /><path fill="#F63030" d="M14 10L0 20H28L14 10Z" /></g><defs><clipPath id="clip0_27_532"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsVigo;