import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Gy = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_646)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#50B500" /><path fill="#FFDA27" stroke="white" strokeWidth={1.33333} d="M-0.666707 19.3333V0.666667H-0.108226L27.3333 9.81384V10.1862L-0.108229 19.3333H-0.666707Z" /><path fill="#F63030" stroke="#4C4C4C" strokeWidth={1.33333} d="M-0.666707 19.3333V0.666667H-0.198221L14.1129 10L-0.198222 19.3333H-0.666707Z" /></g><defs><clipPath id="clip0_5_646"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Gy;