import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const UyFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2089_1929)"><rect width={55.996} height={43.9981} x={3.79297} y={3.42188} fill="white" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.8226 27.7461V33.0732H5.55469L5.55469 27.7461H58.8226Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.8226 37.6016V42.9286H5.55469L5.55469 37.6016H58.8226Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.8226 17.8906V23.2177H24.7383V17.8906H58.8226Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.8226 8.03516V13.3622H24.7383V8.03516H58.8226Z" clipRule="evenodd" /><circle cx={14.3984} cy={16.2305} r={4.65234} fill="#FF9600" strokeWidth={3} /></g><rect width={56} height={44} x={3.79297} y={3.48438} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2089_1929"><rect width={56} height={44} x={3.79297} y={3.48438} fill="white" rx={9} /></clipPath></defs></svg>;
export default UyFlag;