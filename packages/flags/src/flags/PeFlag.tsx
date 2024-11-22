import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const PeFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2091_2114)"><rect width={55.996} height={43.9981} x={2.88672} y={3.79297} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M21.9141 4.72656V46.793H4.30859L4.30859 4.72656H21.9141Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M57.9102 4.72656V46.793H40.3047V4.72656H57.9102Z" clipRule="evenodd" /><circle cx={31.0625} cy={25.7617} r={5.15234} strokeWidth={2} /><rect width={4.89062} height={4.89062} x={28.4414} y={23.3125} fill="#F63030" rx={1} /></g><rect width={56} height={44} x={2.88672} y={3.85547} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2091_2114"><rect width={56} height={44} x={2.88672} y={3.85547} fill="white" rx={9} /></clipPath></defs></svg>;
export default PeFlag;