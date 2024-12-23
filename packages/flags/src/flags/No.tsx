import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const No = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1252)"><rect width={28} height={20} fill="#F63030" /><path fill="#0EA6FB" stroke="white" strokeWidth={2} d="M-1 11.5606V12.5606H0H7.00781L7.00781 20L7.0078 21H8.00781H11.007H12.007L12.007 20L12.007 12.5606H28H29V11.5606V8.56979V7.56979H28H12.007L12.007 0L12.007 -1H11.007H8.00781H7.0078L7.00781 0L7.00781 7.56979H0H-1V8.56979V11.5606Z" /></g><defs><clipPath id="clip0_5_1252"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default No;