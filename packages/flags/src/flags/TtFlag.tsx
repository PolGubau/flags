import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const TtFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1608)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="white" fillRule="evenodd" d="M20.8913 26.4269L-0.980711 0.360852L7.10874 -6.427L28.9807 19.639L20.8913 26.4269Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M23.8737 26.9528L-0.980703 -2.66763L4.12626 -6.95288L28.9807 22.6675L23.8737 26.9528Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1608"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default TtFlag;