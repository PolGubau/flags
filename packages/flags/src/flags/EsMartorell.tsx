import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMartorell = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_699)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><rect width={9.33329} height={20} x={9.33325} fill="white" /><path fill="#0EA6FB" fillRule="evenodd" d="M18.6665 20H27.9998V0H18.6665V20Z" clipRule="evenodd" /><path fill="#FFDA27" d="M3.00002 5.57453L3 3.63043H3.81288V5.57453H4.21931V3H5.03217V5.57453H5.4386V3.73913H6.25146V5.57453V8.14551H3.00002V5.57453Z" /></g><defs><clipPath id="clip0_27_699"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMartorell;