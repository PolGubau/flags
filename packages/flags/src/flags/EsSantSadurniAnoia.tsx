import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsSantSadurniAnoia = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_31_432)"><rect width={28} height={20} fill="#50B500" /><path fill="#FFDA27" d="M11 4L14 3L17 4V5H11V4Z" /><rect width={9.84326} height={9.84326} x={7.04} y={11.6067} fill="#50B500" stroke="black" strokeWidth={0.5} transform="rotate(-45 7.04 11.6067)" /><mask id="mask0_31_432" width={14} height={14} x={7} y={5} maskUnits="userSpaceOnUse" style={{
      maskType: "alpha"
    }}><rect width={9.34326} height={9.34326} x={7.39355} y={11.6067} fill="#D9D9D9" transform="rotate(-45 7.39355 11.6067)" /></mask><g mask="url(#mask0_31_432)"><rect width={9.34326} height={9.34326} x={7.39355} y={11.6067} fill="#50B500" transform="rotate(-45 7.39355 11.6067)" /><rect width={13.2134} height={9.43813} x={7.39355} y={11.6067} fill="#F63030" /><rect width={1.46763} height={9.43813} x={19.1394} y={11.6067} fill="#FFDA27" /><rect width={1.46763} height={9.43813} x={7.39355} y={11.6067} fill="#FFDA27" /><rect width={1.46763} height={9.43813} x={10.3301} y={11.6067} fill="#FFDA27" /><rect width={1.46763} height={9.43813} x={13.2666} y={11.6067} fill="#FFDA27" /><rect width={2} height={3} x={13} y={7.60669} fill="#FFDA27" /><rect width={1} height={2} x={16} y={8.60669} fill="#FFDA27" /><rect width={1} height={2} x={11} y={8.60669} fill="#FFDA27" /><rect width={1.46763} height={9.43813} x={16.2031} y={11.6067} fill="#FFDA27" /></g></g><defs><clipPath id="clip0_31_432"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsSantSadurniAnoia;