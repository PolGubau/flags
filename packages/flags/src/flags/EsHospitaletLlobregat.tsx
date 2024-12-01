import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsHospitaletLlobregat = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_661)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M14 8.86663H28V6.66663H14V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M14 13.3333H28V11.1333H14V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M14 17.8001H28V15.6001H14V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M14 4.39995H28V2.19995H14V4.39995Z" clipRule="evenodd" /><mask id="mask0_27_661" width={14} height={20} x={0} y={0} maskUnits="userSpaceOnUse" style={{
      maskType: "alpha"
    }}><rect width={14} height={20} fill="white" /></mask><g mask="url(#mask0_27_661)"><rect width={14} height={20} fill="white" /><path stroke="#F63030" strokeWidth={2} d="M0 20L14 0" /><path stroke="#F63030" strokeWidth={2} d="M14 20L0 0" /></g></g><defs><clipPath id="clip0_27_661"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsHospitaletLlobregat;