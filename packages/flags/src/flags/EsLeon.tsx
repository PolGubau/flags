import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsLeon = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_281)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M14 20H28V10H14V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 10H14V0H0V10Z" clipRule="evenodd" /><path fill="#FFDA27" d="M5.17031 4.64168L5.17029 2.45366H6.08515V4.64168H6.54258V1.74414H7.45742V4.64168H7.91485V2.576H8.82969V4.64168V7.53523H5.17031V4.64168Z" /><path fill="#FFDA27" d="M19.1703 15.002L19.1703 12.814H20.0852V15.002H20.5426V12.1045H21.4574V15.002H21.9148V12.9364H22.8297V15.002V17.8956H19.1703V15.002Z" /><rect width={2.11609} height={5.64856} x={5.94189} y={12.1758} fill="#4C4C4C" /><rect width={2.11609} height={5.64856} x={19.9419} y={2.17578} fill="#4C4C4C" /></g><defs><clipPath id="clip0_8_281"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsLeon;