import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ls = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1018)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M13.3334 9.99992L13.3676 9.89729C13.5702 9.28949 14.4299 9.28949 14.6325 9.89729L14.6667 9.99992L15.8484 11.7726C15.9366 11.9048 15.9172 12.0791 15.7853 12.1677C15.4916 12.3652 14.8965 12.6666 14 12.6666C13.1035 12.6666 12.5084 12.3652 12.2147 12.1677C12.0828 12.0791 12.0635 11.9048 12.1516 11.7726L13.3334 9.99992Z" clipRule="evenodd" /><path stroke="#4C4C4C" strokeWidth={0.666667} d="M15 8.66659C15 9.21887 14.5522 9.66659 14 9.66659C13.4477 9.66659 13 9.21887 13 8.66659C13 8.1143 13.4477 7.66659 14 7.66659C14.5522 7.66659 15 8.1143 15 8.66659Z" /></g><defs><clipPath id="clip0_5_1018"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ls;