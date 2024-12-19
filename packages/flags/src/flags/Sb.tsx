import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Sb = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1482)"><rect width={28} height={20} fill="#0EA6FB" /><path fill="#50B500" stroke="#FFDA27" strokeWidth={3} d="M27.1281 0.477154L29.5 -1.21703V1.69775V20V21.5H28H2.37686H-2.30384L1.505 18.7794L27.1281 0.477154Z" /><circle cx={3.00256} cy={6.99744} r={1.58752} fill="white" /><circle cx={9.66418} cy={6.99744} r={1.58752} fill="white" /><circle cx={3.00256} cy={2.88196} r={1.58752} fill="white" /><circle cx={9.66418} cy={2.88196} r={1.58752} fill="white" /><circle cx={6.31042} cy={4.84094} r={1.58752} fill="white" /></g><defs><clipPath id="clip0_5_1482"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Sb;