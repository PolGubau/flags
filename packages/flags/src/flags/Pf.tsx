import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Pf = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1949)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M0 5.33333H28V0H0V5.33333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V14.6667H0V20.0001Z" clipRule="evenodd" /><mask id="mask0_5_1949" width={8} height={8} x={10} y={6} maskUnits="userSpaceOnUse" style={{
      maskType: "alpha"
    }}><circle cx={14} cy={10} r={3.29443} fill="#FF9600" /></mask><g mask="url(#mask0_5_1949)"><circle cx={14} cy={10} r={3.29443} fill="#FF9600" /><rect width={6.58887} height={2.90552} x={10.7056} y={10.9797} fill="#0EA6FB" /></g></g><defs><clipPath id="clip0_5_1949"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Pf;