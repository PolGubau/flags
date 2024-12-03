import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMalaga = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_31_484)"><rect width={28} height={20} fill="white" /><path fill="#FFDA27" d="M11 5L14 4L17 5V6H11V5Z" /><path fill="#F63030" stroke="#50B500" d="M11.5 7.5H16.5V12C16.5 13.3807 15.3807 14.5 14 14.5C12.6193 14.5 11.5 13.3807 11.5 12V7.5Z" /><mask id="mask0_31_484" width={3} height={8} x={14} y={7} maskUnits="userSpaceOnUse" style={{
      maskType: "alpha"
    }}><rect width={3} height={8} x={14} y={7} fill="#D9D9D9" /></mask><g mask="url(#mask0_31_484)"><path fill="#F63030" stroke="#7700FF" d="M11.5 7.5H16.5V12C16.5 13.3807 15.3807 14.5 14 14.5C12.6193 14.5 11.5 13.3807 11.5 12V7.5Z" /></g></g><rect width={25} height={17} x={1.5} y={1.5} stroke="#0EA6FB" strokeWidth={3} /><defs><clipPath id="clip0_31_484"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMalaga;