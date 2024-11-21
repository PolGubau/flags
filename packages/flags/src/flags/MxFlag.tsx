import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const MxFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2091_2018)"><rect width={55.996} height={43.9981} x={3.26172} y={3.69922} fill="white" /><path fill="#8FD130" fillRule="evenodd" d="M22.2891 4.63281V46.6992H4.68359L4.68359 4.63281H22.2891Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M58.2852 4.63281V46.6992H40.6797V4.63281H58.2852Z" clipRule="evenodd" /><path fill="#9B5F38" strokeWidth={3} d="M35.9102 24.7652C35.9102 27.4502 33.7938 29.5656 31.2578 29.5656C28.7218 29.5656 26.6055 27.4502 26.6055 24.7652C26.6055 22.0802 28.7218 19.9648 31.2578 19.9648C33.7938 19.9648 35.9102 22.0802 35.9102 24.7652Z" /><path strokeLinecap="round" strokeWidth={1.26489} d="M26.0625 30.4453L26.3116 30.6698C29.1392 33.218 33.4632 33.1195 36.1719 30.4453V30.4453" /></g><rect width={56} height={44} x={3.26172} y={3.76172} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2091_2018"><rect width={56} height={44} x={3.26172} y={3.76172} fill="white" rx={9} /></clipPath></defs></svg>;
export default MxFlag;