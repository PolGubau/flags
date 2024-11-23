import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IsFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_823)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#F63030" strokeWidth={1.5} d="M-1.75 11.3195V12.0695H-1H7.58333V20.3749V21.1249H8.33333H11.6667H12.4167V20.3749V12.0695H28.4828H29.2328V11.3195V7.98617V7.23617H28.4828H12.4167V-0.374756V-1.12476H11.6667H8.33333H7.58333V-0.374756V7.23617H-1H-1.75V7.98617V11.3195Z" /></g><defs><clipPath id="clip0_5_823"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default IsFlag;